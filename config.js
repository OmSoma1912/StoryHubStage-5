import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyA1BRukKUDJcpYENb0wn41ycbzLb4EBfMg",
    authDomain: "story-hub-78e4e.firebaseapp.com",
    databaseURL: "https://story-hub-78e4e.firebaseio.com",
    projectId: "story-hub-78e4e",
    storageBucket: "story-hub-78e4e.appspot.com",
    messagingSenderId: "570995439369",
    appId: "1:570995439369:web:da29849c9aa8c710fe45d8"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()