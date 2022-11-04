require("dotenv").config();

const settings = {
  dbName: process.env.DB_URL,
  uri: process.env.DB_NAME,
};

module.exports = {
  settings,
};
