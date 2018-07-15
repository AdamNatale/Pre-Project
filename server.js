const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
const db = 'mongodb://localhost:27017/rpsDb';
const dbName = 'rpsDb';
const rps = require('./model/schema');

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.use(bodyParser.json());

app.listen(port, () => console.log(`Listening on port ${port}`));

mongoose.connect(db);
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + db);
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose connection disconnected');
});

app.post('/api/score', function(req, res) {
  var newName = req.body.name;
  var newScore = req.body.score;
  var newRps = new rps({name: newName, score: newScore});
  newRps.save(function(err) {
    if (err) return next(err);
  })
})