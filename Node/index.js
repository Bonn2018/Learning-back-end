const { auth, signIn } = require('./containers/auth');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;
const MongoClient = require('mongodb').MongoClient;
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
let db;

app.options('*', cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/auth', cors(corsOptions), (request, response) => {
  auth(db, request, response)
});

app.post('/sign_in', cors(corsOptions), (request, response) => {
  signIn(db, request, response)
});


MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, function (err, client) {
  if (err) {
    return console.log(err);
  }

  db = client.db('Users');

  app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`DB use. Server is listening on ${port}`);
  });
});
