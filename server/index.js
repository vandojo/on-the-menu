const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
require("dotenv").config();

const dbConnect = require("./database/dbConnect");
const user = require("./database/userModel");

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

dbConnect();

app.post("/register", (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((pw) => {
      const user = new user({
        email: req.body.email,
        password: pw,
      });

      user
        .save()
        .then((result) => {
          res.status(201).send({
            message: "user created",
            result,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "error creating user",
            error,
          });
        });
    })
    .catch((error) => {
      response.status(500).send({
        message: "password not hashed successfully",
        error,
      });
    });
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
