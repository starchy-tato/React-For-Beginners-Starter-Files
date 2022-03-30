import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBdaFE3ADOKwTpIqKMIE2NtLteHm5aMorA",
  authDomain: "catch-of-the-day-tw-5b7a4.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-tw-5b7a4-default-rtdb.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
