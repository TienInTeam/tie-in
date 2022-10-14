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
app.get('/student', (req, res) => {

  client.connect(async err => {
    const collection = client.db("tiein").collection("student");
    const query = {name: "Rojin"};
    const student = await collection.findOne(query);
    client.close();

    res.status(200).send(student);
  });
  

});

app.post('/student', (req, res) => {
  
  const body = req.body

  client.connect(async err => {
    const collection = client.db("tiein").collection("student");
    const student = await collection.insertOne(body);
    client.close();


  res.send(student)
});

});


