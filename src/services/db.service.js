const dbConfig = require("../configs/db.config");

//MongoDB client
const { MongoClient, ObjectId } = require("mongodb");
const uri = dbConfig.settings.uri;
const client = new MongoClient(uri);
client.connect();

//Database selection
const dbName = dbConfig.settings.dbName;
const database = client.db(dbName);

async function getAllFromDb(collection) {
  try {
    const dbCollection = database.collection(collection);
    const query = {};
    const result = await dbCollection.find(query).toArray();

    return result;
  } catch (err) {
    console.error(
      "Operation: getAllFromDb ",
      `An error was encountered: ${err}`
    );
  }
}

async function getOneFromDb(collection, userQuery) {
  try {
    const dbCollection = database.collection(collection);
    const query = userQuery;
    const result = await dbCollection.findOne(query);

    return result;
  } catch (err) {
    console.error(
      "Operation: getOneFromDb ",
      `An error was encountered: ${err}`
    );
  }
}

async function createOneInDb(collection, requestBody) {
  try {
    const dbCollection = database.collection(collection);
    const body = requestBody;
    const result = await dbCollection.insertOne(body);

    return result;
  } catch (err) {
    console.error(
      "Operation: createOneInDb ",
      `An error was encountered: ${err}`
    );
  }
}

async function replaceOneInDb(collection, userFilterQuery, requestBody) {
  try {
    const dbCollection = database.collection(collection);
    const filterQuery = userFilterQuery;
    const updateBody = requestBody;
    const result = await dbCollection.findOneAndReplace(filterQuery, updateBody);

    return result;
  } catch (err) {
    console.error(
      "Operation: updateOneInDb ",
      `An error was encountered: ${err}`
    );
  }
}

async function updateOneInDb(collection, userFilterQuery, userUpdateQuery) {
  try {
    const dbCollection = database.collection(collection);
    const filterQuery = userFilterQuery;
    const updateQuery = userUpdateQuery;
    const result = await dbCollection.findOneAndUpdate(filterQuery, updateQuery);

    return result;
  } catch (err) {
    console.error(
      "Operation: replaceOneInDb ",
      `An error was encountered: ${err}`
    );
  }
}

async function deleteOneFromDb(collection, userQuery) {
  try {
    const dbCollection = database.collection(collection);
    const query = userQuery;
    const result = await dbCollection.deleteOne(query);

    return result;
  } catch (err) {
    console.error(
      "Operation: deleteOneFromDb ",
      `An error was encountered: ${err}`
    );
  }
}

module.exports = {
  getAllFromDb,
  getOneFromDb,
  createOneInDb,
  updateOneInDb,
  replaceOneInDb,
  deleteOneFromDb,
};
