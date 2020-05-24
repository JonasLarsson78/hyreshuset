import * as firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';

export const init = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig).auth();
  }
};

export const authWithPassword = (user) =>
  firebase.auth().signInWithEmailAndPassword(user.email, user.password);

export const createWithPassword = (user) =>
  firebase.auth().createUserWithEmailAndPassword(user.email, user.password);

export const sendVerificationMail = () =>
  firebase.auth().currentUser.sendEmailVerification();

export const resetPasswordWithEmail = (email) =>
  firebase.auth().sendPasswordResetEmail(email);

export const logOut = () => firebase.auth().signOut();
