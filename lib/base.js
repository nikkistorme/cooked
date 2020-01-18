import Rebase from 're-base';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
}

const baseIsLoaded = () => {
  // console.log(firebase.apps)
  if(!firebase.apps.length) {
    return firebase.initializeApp(firebaseConfig)
  } else {
    return firebase.app()
  }
}

const firebaseApp = baseIsLoaded();
const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export {firebaseApp};

// This is a default export
export default base;








// import firebase from 'firebase';
// // import 'firebase/firestore';

// export function loadFirebase() {
//   try {  // Initialize Firebase
//     const config = {
//       apiKey: process.env.FIREBASE_API_KEY,
//       authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//       databaseURL: process.env.FIREBASE_DATABASE_URL,
//       projectId: process.env.FIREBASE_PROJECT_ID,
//       storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//       messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//       appId: process.env.FIREBASE_APP_ID,
//       measurementId: process.env.FIREBASE_MEASUREMENT_ID
//     };
//     firebase.initializeApp(config);
//     firebase.analytics();
//     return firebase;
//   } catch (err) {
//     if(e)
//   }
// }