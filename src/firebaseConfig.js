// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  //  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  //  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  //  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  //  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID
  apiKey: 'AIzaSyCOVzNM_DsAtIq-Oqox56BD80Chl8ZuuWA',
  authDomain: 'develope-app-504c3.firebaseapp.com',
  projectId: 'develope-app-504c3',
  storageBucket: 'develope-app-504c3.appspot.com',
  messagingSenderId: '688732897940',
  appId: '1:688732897940:web:69a853b5683e77445c2a81'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
