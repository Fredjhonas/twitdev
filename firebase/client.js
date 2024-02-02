import * as firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
import data from '../configFirebase.json';

firebase.initializeApp(data.firebaseConfig);
export const auth = getAuth();
