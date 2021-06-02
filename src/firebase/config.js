import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAdOUKnMQIw5boYx-ylb49aejBtGGYHwmE',
  authDomain: 'zingmp3-13250.firebaseapp.com',
  projectId: 'zingmp3-13250',
  storageBucket: 'zingmp3-13250.appspot.com',
  messagingSenderId: '542200022734',
  appId: '1:542200022734:web:d2bb6238bcc0518021b29f',
  measurementId: 'G-BMS6W9GKDZ',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
