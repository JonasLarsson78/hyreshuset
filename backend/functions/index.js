const functions = require('firebase-functions');

const { getUserDB, getRentalDB, updateUserDB } = require('./server');

const { firebaseAdminInit } = require('./serverUtils/serverUtils');
firebaseAdminInit();

exports.getUser = functions.https.onRequest(getUserDB);
exports.updateUserTheme = functions.https.onRequest(updateUserDB);
exports.getRental = functions.https.onRequest(getRentalDB);
