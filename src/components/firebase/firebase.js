import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDDheTNkmS7mHEylTcB8CI016Ff7I-AvU",
  authDomain: "whatsapp-clone-eb234.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-eb234-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-eb234",
  storageBucket: "whatsapp-clone-eb234.appspot.com",
  messagingSenderId: "238756093813",
  appId: "1:238756093813:web:b148043d11bf9063343d3c",
  measurementId: "G-5VLCF8SFGH"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db

// NB: This method only work with firebase version 8 (8.4.1)