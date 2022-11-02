
//Import DB configuration file
const dbConfig = require('../configs/db.config');

//Connect mongoDB
const { MongoClient, ObjectId } = require('mongodb');
const client = new MongoClient(dbConfig.db.uri);

async function query(sql, params) {
    const connection = await mysql.createConnection(dbConfig);
    const [results, ] = await connection.execute(sql, params);
  
    return results;
  }


const collection = client.db("TestDB1").collection("Users");
const query = {};
const allUsers = await collection.find(query).toArray();
client.close();

async function query(sql, params) {
  const connection = await mysql.createConnection(dbConfig);
  const [results, ] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query
}