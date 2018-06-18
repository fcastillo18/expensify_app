import * as firebase from 'firebase';

// Initialize Firebase
  const config = {
    apiKey: "AIzaSyBxvXvYTc1NQwzOBJh-4Ix1iRyBStaPKDQ",
    authDomain: "expensify-5f2ea.firebaseapp.com",
    databaseURL: "https://expensify-5f2ea.firebaseio.com",
    projectId: "expensify-5f2ea",
    storageBucket: "expensify-5f2ea.appspot.com",
    messagingSenderId: "348755020117"
  };

  firebase.initializeApp(config);

  firebase.database().ref().set({
     name: 'Franklin Castillo' 
  });
