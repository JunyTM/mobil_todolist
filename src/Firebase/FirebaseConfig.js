// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtGWjpnjk9uZ9V1wxzJtfoXfAZWXS6bqs",
  authDomain: "noti-list-demo.firebaseapp.com",
  projectId: "noti-list-demo",
  storageBucket: "noti-list-demo.appspot.com",
  messagingSenderId: "402267330803",
  appId: "1:402267330803:web:9746c156e76993cd073f86",
  measurementId: "G-8G3W5YCH6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);