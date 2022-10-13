const express = require('express');
const app = express();
const PORT = 8080;


app.use(express.json());

app.listen(PORT, () => {
  console.log(`it is listening to ${PORT}`);
})

app.get('/student', (req, res) => {
  res.status(200).send({
    studentName: 'Rojin',
    studentMajor: 'web & mobileapp development'
  })
});

app.post('/student/:id', (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: 'We need a logo' })
  }

  res.send({
    student: `your ${logo}`
  })
});

