const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const {Edamam} = require("./edamam");

let edamam = new Edamam(process.env.APP_EDAMAM_KEYS, process.env.APP_EDAMAM_ID);

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/api", async (req, res) => {
  let params = {
    q: "chicken",
  };

  edamam.formatURL(params);

  edamam.makeRequest().then((data) => {
    res.json({message: data.hits[0].recipe});
  });
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
