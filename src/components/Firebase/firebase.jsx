import app from "firebase/app";

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
}

export default Firebase;
