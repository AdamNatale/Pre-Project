const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const app = express();
const port = process.env.PORT || 5000;
const db = 'mongodb://localhost:27017';
const dbName = 'rpsDb';

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

MongoClient.connect(db, (err, database) => {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const dbClient = database.db(dbName);
    database.close();
});