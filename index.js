//Use Express
const express = require('express');
const app = express();

//Server Port
app.listen(process.env.PORT || 3000);

//Connect mongoDB
const { MongoClient, ObjectId } = require('mongodb');
const uri = "mongodb+srv://tieinuser1:tieinmongo01@testcluster.ryzz4av.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

//Middleware for json reading.
app.use(express.json());


//Create endpoints

//Get all Students
app.get('/student', (req, res) => {

  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Students");
    const query = {};
    const allStudents = await collection.find(query).toArray();

    client.close();

    res.status(200).send(allStudents);
  });
});

//Create new Student
app.post('/student', (req, res) => {

  const body = req.body

  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Students");
    const student = await collection.insertOne({
      name: req.body.name,
      lastName: req.body.lastName,
      class: req.body.class,
      age: req.body.age
    });
    client.close();

    res.send(student)
  });

});

//Update student data
app.put('/student/:id', (req, res) => {

  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Students");
    const student = await collection.findOneAndUpdate(
      { id: req.params.id },
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
app.delete('/student/:id', (req, res) => {

  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Students");
    const deleteResponse = await collection.deleteOne(
      { _id: new ObjectId(req.params.id) }
    );
    client.close();

    res.send(deleteResponse)
  });

});

