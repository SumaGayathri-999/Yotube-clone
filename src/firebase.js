import  firebase from "firebase/compat/app";
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyA3zCZw4vj5b-EebbQNaW1gX66WUMgkUM4",
  authDomain: "youtb-clone.firebaseapp.com",
  projectId: "youtb-clone",
  storageBucket: "youtb-clone.appspot.com",
  messagingSenderId: "811323823897",
  appId: "1:811323823897:web:4334c6c3bf8c5fea3c1788"
};

firebase.initializeApp(firebaseConfig);
export default firebase.auth();



