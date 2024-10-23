const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
require("dotenv").config();

const dbConnect = require("./database/dbConnect");
const User = require("./database/userModel");

dbConnect();

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

app.post("/register", (req, res) => {
  // hash the password
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      // create a new user instance and collect the data
      const user = new User({
        email: req.body.email,
        password: hashedPassword,
      });

      // save the new user
      user
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          res.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        // catch error if the new user wasn't added successfully to the database
        .catch((error) => {
          res.status(500).send({
            message: "The following error occurred:",
            error,
          });
        });
    })
    // catch error if the password hash isn't successful
    .catch((e) => {
      res.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
