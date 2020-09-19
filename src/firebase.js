import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD4yE6azTvIbasqta4YdRJo5SU9PbwJ6eQ",
  authDomain: "fb-clone-b612c.firebaseapp.com",
  databaseURL: "https://fb-clone-b612c.firebaseio.com",
  projectId: "fb-clone-b612c",
  storageBucket: "fb-clone-b612c.appspot.com",
  messagingSenderId: "424124156527",
  appId: "1:424124156527:web:b1bc2678de0773b19ddb9a",
  measurementId: "G-DQZNFF325X",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
