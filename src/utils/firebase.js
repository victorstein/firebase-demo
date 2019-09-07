import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDbceIm1HKjp00esEj8vb0cbbIrr0E05wA',
  authDomain: 'fir-demo-52a31.firebaseapp.com',
  databaseURL: 'https://fir-demo-52a31.firebaseio.com',
  projectId: 'fir-demo-52a31',
  storageBucket: '',
  messagingSenderId: '739028771843',
  appId: '1:739028771843:web:b53ef29055ac24cb7d1a36'
}

const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase

export const Database = Firebase.database()
export const Auth = Firebase.auth()
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
