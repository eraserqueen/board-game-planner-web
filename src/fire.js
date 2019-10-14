import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBFHuBxKLFK3J7iIuk-IgRMsTscUDMV4eY",
    authDomain: "board-games-planner.firebaseapp.com",
    databaseURL: "https://board-games-planner.firebaseio.com",
    projectId: "board-games-planner",
    storageBucket: "board-games-planner.appspot.com",
    messagingSenderId: "741707614163"
  };
const fire = firebase.initializeApp(config);
export default fire;
