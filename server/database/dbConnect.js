const {MongoClient} = require("mongodb");
require("dotenv").config();

async function dbConnect() {
  const client = new MongoClient(process.env.DB_URL);

  try {
    await client.connect();

    //await listDatabases(client);
    console.log("connection succesful");
  } catch (e) {
    console.log(e);
    console.error(e);
  } finally {
    await client.close();
  }
}

module.exports = dbConnect;
