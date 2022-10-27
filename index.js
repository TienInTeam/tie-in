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


///////////Create endpoints///////////
///////////////Student//////////////

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

//Get one student
app.get('/student/:id', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Students");
    const oneStudent = await collection.findOne(
      { _id: new ObjectId(req.params.id) }
    );
    client.close();
    res.status(200).send(oneStudent);
  });
});

//Create new Student
app.post('/student', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Students");
    const student = await collection.insertOne({
      email: req.body.email,
      fullName: req.body.fullname,
      Institution: req.body.institution,
      linkedInUrl: req.body.linkedInUrl,
      githubUrl: req.body.githubUrl,
      profileUrl: req.body.profileUrl
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
      { _id: new ObjectId(req.params.id) },
      {
        $set: {
          email: req.body.email,
          fullName: req.body.fullName,
          Institution: req.body.Institution,
          linkedInUrl: req.body.linkedInUrl,
          githubUrl: req.body.githubUrl,
          profileUrl: req.body.profileUrl
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
