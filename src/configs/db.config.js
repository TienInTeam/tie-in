require("dotenv").config();

const settings = {
  // dbName: "TESTDB1",
  dbName: process.env.TEST_DB,
  uri: process.env.MONGO_URL,
};

module.exports = {
  settings,
};
