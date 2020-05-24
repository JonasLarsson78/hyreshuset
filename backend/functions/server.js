const express = require('express');
const cors = require('cors');

const MongoClient = require('mongodb').MongoClient;

const { urlMongoDB, optionsMongoDB } = require('./serverUtils/serverUtils');

const resObj = {
  message: '',
  data: null,
};

/* ---------- Get user data from DB -------------- */
const getUserDB = express();
getUserDB.use(cors({ origin: true }));
getUserDB.post('*', (req, res) => {
  const { epost } = req.body;

  if (!epost) {
    resObj.message = 'GET: Get user data fail.';
    res.status(404).send(resObj);
  } else {
    MongoClient.connect(urlMongoDB, optionsMongoDB).then((client) => {
      console.log('Connected to Database');
      const db = client.db('job1DB');

      db.collection('userData')
        .find({ epost }, { projection: { _id: 0 } })
        .toArray((err, data) => {
          resObj.message = 'GET: Get user data sucsess';
          resObj.data = data;
          res.status(200).send(resObj);
        });
    });
  }
});
/* ---------------------------------------------- */
/* ---------- Update user theme data on DB -------------- */
const updateUserDB = express();
updateUserDB.use(cors({ origin: true }));
updateUserDB.post('*', (req, res) => {
  const { epost, tema } = req.body;

  if (!epost) {
    resObj.message = 'UPDATE: Update user data fail.';
    res.status(404).send(resObj);
  } else {
    MongoClient.connect(urlMongoDB, optionsMongoDB).then((client) => {
      console.log('Connected to Database');
      const db = client.db('job1DB');

      db.collection('userData').findOneAndUpdate({ epost }, { $set: { tema } });
      res.end();
    });
  }
});
/* ---------------------------------------------- */

/* ---------- Get rental from DB -------------- */
const getRentalDB = express();
getRentalDB.use(cors({ origin: true }));
getRentalDB.get('*', (req, res) => {
  MongoClient.connect(urlMongoDB, optionsMongoDB).then((client) => {
    console.log('Connected to Database');
    const db = client.db('job1DB');

    db.collection('ledigt')
      .find({}, { projection: { _id: 0 } })
      .toArray((err, data) => {
        resObj.message = 'GET: Get rental sucsess';
        resObj.data = data;
        res.status(200).send(resObj);
      });
  });
});
/* ---------------------------------------------- */

module.exports = {
  getUserDB,
  getRentalDB,
  updateUserDB,
};
