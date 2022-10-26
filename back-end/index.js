//Connect mongoDB
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://rojintg:mongo@newclaster.bmbuxcx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);




//Use Express
const express = require('express');
const app = express();
const PORT = 8080;


app.use(express.json());

app.listen(PORT, () => {
  console.log(`it is listening to ${PORT}`);
})

//Create endpoints

//Read data
app.get('/student', (req, res) => {

  client.connect(async err => {
    const collection = client.db("tiein").collection("student");
    const query = { name: "jane" };
    const student = await collection.findOne(query);
    client.close();

    res.status(200).send(student);
  });


});

//Create data
app.post('/student', (req, res) => {

  const body = req.body

  client.connect(async err => {
    const collection = client.db("tiein").collection("student");
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
app.put('/student/(:id)', (req, res) => {


  client.connect(async err => {
    const collection = client.db("tiein").collection("student");
    const student = await collection.findOneAndUpdate(
      { id: req.body.name },
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
let ObjectID = require('mongodb').ObjectID;

app.delete('/student/id', (req, res) => {
  const idMongo = json.stringify(req.params.id)
  client.connect(async err => {
      const collection = client.db("tiein").collection("student");
      const student = await collection.deleteOne({ _id: ObjectId(idMongo) });
      client.close();
  
  
      res.send(student)
    });

  // client.connect(async err => {
  //   const collection = client.db("tiein").collection("student");
  //   const student = await collection.findByIdAndRemove(
  //     (req.params.id, (err, doc) => {
  //       if (!err) {
  //         res.redirect('/users-list')
  //       } else {
  //         console.log(err)
  //       }
  //     })
  //   );
  //   client.close();


  //   res.send(student)
  // });

});

