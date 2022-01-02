import * as firebase from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { firebaseConfig } from './config'

firebase.initializeApp(firebaseConfig)
export const auth = getAuth();

