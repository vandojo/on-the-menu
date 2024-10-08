const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const dbConnect = require("./database/dbConnect");

//dbConnect();

const {Edamam} = require("./edamam");

let edamam = new Edamam(process.env.APP_EDAMAM_KEYS, process.env.APP_EDAMAM_ID);

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/api", async (req, res) => {
  let data = req.query.mealType;

  let params;

  if (data == "All") {
    params = {
      mealType: "Breakfast&mealType=Dinner&mealType=Lunch&mealType=Snack",
    };
  } else {
    params = {
      mealType: data,
    };
  }

  edamam.formatURL(params);

  edamam.makeRequest().then((data) => {
    res.json({message: data.hits});
  });
});

app.post("/search_recipes", async (req, res) => {
  let params = req.body;

  edamam.formatURL(params);
  edamam.makeRequest().then((data) => {
    res.json({message: data.hits});
  });
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
