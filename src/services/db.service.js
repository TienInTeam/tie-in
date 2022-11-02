//Import DB configuration file
const dbConfig = require("../configs/db.config");

//Connect mongoDB
const { MongoClient } = require("mongodb");
const client = new MongoClient(dbConfig.db.uri);

async function connectToDatabaseCollection(collection) {
  const database = client.db(dbConfig.db.database);
  const collection = database.collection(collection);
}

module.exports = {
  connectToDatabaseCollection,
};
