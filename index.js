const express = require("express");
const app = express();

app.listen(process.env.PORT || 3000);

//Settings to connect to MongoDB
const mongodb = require("mongodb");
const uri =
  "mongodb+srv://tieinuser1:tieinmongo01@testcluster.ryzz4av.mongodb.net/?retryWrites=true&w=majority";
const client = new mongodb.MongoClient(uri);

app.use(express.json());

//Create endpoints

//Read data
app.get('/student', (req, res) => {

  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Students");
    const query = {};
    const cursor = await collection.find(query).toArray();

    client.close();

    res.status(200).send(cursor);
  });


});

//Create data
app.post('/student', (req, res) => {

  const body = req.body

  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Students");
    const student = await collection.insertOne({
      name: req.body.name,
      class: req.body.class,
      lastname: req.body.name
    });
    client.close();
    res.send(student)
  });

});



//Update data
app.put('/student', (req, res) => {


  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Students");
    const student = await collection.findOneAndUpdate(
      { name: req.body.name },
      {
        $set: {
          name: req.body.name,
          class: req.body.class,
          lastName: req.body.lastName
        }
      }
    );

    client.close();


    res.send(student)
  });

});

//Delete data
app.delete('/student', (req, res) => {


  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Students");
    const student = await collection.deleteOne(
      { _id: new mongodb.ObjectID("634a28e4ceeff592ecea000f") }
    );
    client.close();


    res.send(student)
  });

});

