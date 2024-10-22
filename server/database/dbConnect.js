const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect() {
  mongoose.connect(process.env.DB_URL,
    {useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  ).then(()=> {
    console.log('connected to mongodb')
  }).catch((error)=>{
    console.log('ran into an error')
    console.log(error)
  })

  
}

module.exports = dbConnect;
