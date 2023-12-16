// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8D6Ch_TS7oiWRys0zjPHVDvPD-DsEYkE",
  authDomain: "my-awesome-todolist-4ea4a.firebaseapp.com",
  projectId: "my-awesome-todolist-4ea4a",
  storageBucket: "my-awesome-todolist-4ea4a.appspot.com",
  messagingSenderId: "653267155102",
  appId: "1:653267155102:web:9a19b0bf1392f25bc8e38f",
  measurementId: "G-M25YR5J1P8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export { db };

// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// // Follow this pattern to import other Firebase services
// // import { } from 'firebase/<service>';

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA8D6Ch_TS7oiWRys0zjPHVDvPD-DsEYkE",
//   authDomain: "my-awesome-todolist-4ea4a.firebaseapp.com",
//   projectId: "my-awesome-todolist-4ea4a",
//   storageBucket: "my-awesome-todolist-4ea4a.appspot.com",
//   messagingSenderId: "653267155102",
//   appId: "1:653267155102:web:9a19b0bf1392f25bc8e38f",
//   measurementId: "G-M25YR5J1P8",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, "cities");
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map((doc) => doc.data());
//   console.log(cityList);
//   return cityList;
// }

// export { db, getCities }
