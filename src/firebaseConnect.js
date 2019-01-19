import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAX7bgiMC2bAa5FzSMwAj4Ay17Xtuwj_2E",
    authDomain: "ttsouth-2db46.firebaseapp.com",
    databaseURL: "https://ttsouth-2db46.firebaseio.com",
    projectId: "ttsouth-2db46",
    storageBucket: "ttsouth-2db46.appspot.com",
    messagingSenderId: "900641166307"
  };

  var fire = firebase.initializeApp(config);

  export default fire;