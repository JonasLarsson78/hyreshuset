const admin = require('firebase-admin');
const serviceAccount = require('./firebaseAdmin.json');

// MongoDB url
const urlMongoDB =
  'mongodb+srv://jonas:997mbm@job1-f4lbb.gcp.mongodb.net/test?retryWrites=true&w=majority';

const optionsMongoDB = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const firebaseAdminInit = () => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://cvjob1-26b30.firebaseio.com',
  });
};

module.exports = { urlMongoDB, optionsMongoDB, firebaseAdminInit };
