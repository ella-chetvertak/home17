const express = require('express')
const bodyParser = require('body-parser')
 
const app = express()
 
const jsonParser = bodyParser.json()

app.get('/api/test', (req, res) => {
  res.send(JSON.stringify({text: 'Hello world'}))
});

app.post('/api/test', jsonParser, (req, res) => {
  res.send(req.body);
  console.log(req.body)
});

app.use(express.static('src'));

app.listen(8081, () => {
  console.log(`Example app listening on port 8081`)
});