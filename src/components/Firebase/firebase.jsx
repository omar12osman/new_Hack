import app from "firebase/app";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyCZ332C4JorqVWCri1UpwLkGWtz9dnhtUg",
  authDomain: "appcreation-f0f9d.firebaseapp.com",
  databaseURL: "https://appcreation-f0f9d.firebaseio.com",
  projectId: "appcreation-f0f9d",
  storageBucket: "appcreation-f0f9d.appspot.com",
  messagingSenderId: "121881559636"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdata = password => this.auth.current.updataPassword(password);
}

export default Firebase;
