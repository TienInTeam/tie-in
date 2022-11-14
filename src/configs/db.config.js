require("dotenv").config();

const settings = {
  dbName: "TESTDB1",
  uri: "mongodb+srv://root:root@cluster0.lb9myjr.mongodb.net/?retryWrites=true&w=majority",
};

module.exports = {
  settings,
};
