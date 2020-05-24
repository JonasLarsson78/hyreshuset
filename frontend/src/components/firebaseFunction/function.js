import axios from 'axios';

let URL;

if (process.env.NODE_ENV === 'development') {
  URL = 'http://localhost:5001/cvjob1-26b30/us-central1/'; // Dev
} else {
  URL = 'https://us-central1-cvjob1-26b30.cloudfunctions.net/'; // Deploy
}

const FUNCTION = {
  getUser: 'getUser',
  updateUserTheme: 'updateUserTheme',
  getRental: 'getRental',
};

export const getUserData = (obj) => axios.post(URL + FUNCTION.getUser, obj);

export const updateUserTheme = (obj) =>
  axios.post(URL + FUNCTION.updateUserTheme, obj);

export const getRentalData = () => axios.get(URL + FUNCTION.getRental);
