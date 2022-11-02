const env = process.env;
const db = {
    user: 'tieinuser1',
    password: 'tieinmongo01',
    database: 'TestDB1',
    uri: `mongodb+srv://${this.user}:${this.password}@testcluster.ryzz4av.mongodb.net/?retryWrites=true&w=majority`
};

module.exports = db;