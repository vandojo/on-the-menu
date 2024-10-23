const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

app.post("/login", (req, res) => {
  User.findOne({email: req.body.email})
    .then((user) => {
      bcrypt
        .compare(req.body.password, user.password)
        .then((pwCheck) => {
          if (!pwCheck) {
            return res.status(400).send({
              message: "The password is incorrect",
              error,
            });
          }
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            {expiresIn: "24h"}
          );

          res.status(200).send({
            message: "Login Succesful",
            email: user.email,
            token,
          });
        })
        .catch((error) => {
          res.status(400).send({
            message: "The password is incorrect.",
            error,
          });
        });
    })
    .catch((e) => {
      res.status(404).send({
        message: "No account with that email exists.",
        e,
      });
    });
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
