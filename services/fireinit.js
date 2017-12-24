// import Firebase from 'firebase'

// var config = {
//   apiKey: 'AIzaSyDpyXi_cAEDFC_m3LrmaaHggc_lLNA0OXw',
//   authDomain: 'coffecup-d6152.firebaseapp.com',
//   databaseURL: 'https://coffecup-d6152.firebaseio.com',
//   projectId: 'coffecup-d6152',
//   storageBucket: 'coffecup-d6152.appspot.com',
//   messagingSenderId: '586625591569'
// }

// var app = Firebase.initializeApp(config)
// var db = app.database()
// var orderRef = db.ref('orders')
// export default orderRef

import * as firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore'
import 'firebase/database'

var config = {
  apiKey: 'AIzaSyDpyXi_cAEDFC_m3LrmaaHggc_lLNA0OXw',
  authDomain: 'coffecup-d6152.firebaseapp.com',
  databaseURL: 'https://coffecup-d6152.firebaseio.com',
  projectId: 'coffecup-d6152',
  storageBucket: 'coffecup-d6152.appspot.com',
  messagingSenderId: '586625591569'
}

// eslint-disable-next-line
!firebase.apps.length ? firebase.initializeApp(config) : ''
// export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
// export const auth = firebase.auth()
export const DB = firebase.database()
export default firebase
