import { projectAuth } from '../config';
import firebase from 'firebase/app';

export const login = async () => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    await projectAuth.signInWithPopup(provider);
  } catch (err) {
    console.log(err.message);
  }
};
