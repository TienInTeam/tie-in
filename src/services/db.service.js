require("dotenv").config();

const dbConfig = require("../configs/db.config");

//MongoDB client
const { MongoClient, ObjectId } = require("mongodb");
const uri = dbConfig.settings.uri;
const client = new MongoClient(uri);

//Database selection
const dbName = dbConfig.settings.dbName;
const database = client.db(dbName);

async function getAllFromDb(collection) {
  try {
    await client.connect();
    const dbCollection = database.collection(collection);
    const query = {};
    const result = await dbCollection.find(query).toArray();

    return result;

  } catch (err) {
    console.error(`An error was encountered: ${err}`);
  } finally {
    client.close();
  }
}

async function getOneFromDb(collection, userQuery) {
  try {
    await client.connect();
    const dbCollection = database.collection(collection);
    const query = userQuery;
    const result = await dbCollection.findOne(query);

    return result;

  } catch (err) {
    console.error(`An error was encountered: ${err}`);
  } finally {
    client.close();
  }
}

async function createOneInDb(collection, requestBody) {
  try {
    await client.connect();
    const dbCollection = database.collection(collection);
    const body = requestBody;
    const result = await dbCollection.insertOne(body);

    return result;

  } catch (err) {
    console.error(`An error was encountered: ${err}`);
  } finally {
    client.close();
  }
}

async function updateOneInDb(collection, userQuery, requestBody) {
  try {
    await client.connect();
    const dbCollection = database.collection(collection);
    const query = userQuery;
    const updateBody = requestBody;
    const result = await dbCollection.findOneAndUpdate(query, updateBody);

    return result;
    
  } catch (err) {
    console.error(`An error was encountered: ${err}`);
  } finally {
    client.close();
  }
}

async function deleteOneFromDb(collection, userQuery) {
  try {
    await client.connect();
    const dbCollection = database.collection(collection);
    const query = userQuery;
    const result = await dbCollection.deleteOne(query);

    return result;

  } catch (err) {
    console.error(`An error was encountered: ${err}`);
  } finally {
    client.close();
  }
}

module.exports = {
  getAllFromDb,
  getOneFromDb,
  createOneInDb,
  updateOneInDb,
  deleteOneFromDb,
};
