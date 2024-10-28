const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../database/userModel");
require("dotenv").config();

const secret_key = process.env.LOGIN_SECRET_KEY;

const register = (req, res) => {
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
};

const login = (req, res) => {
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
            secret_key,
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
            message: "The password is here incorrect.",
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
};

const isLoggedIn = async (req, res, next) => {
  try {
    const token = await req.headers.authorization.split(" ")[1];
    const decodedToken = await jwt.verify(token, secret_key);
    const user = await decodedToken;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      error: new Error("Invalid request"),
    });
  }
};

module.exports = {register, login, isLoggedIn};
