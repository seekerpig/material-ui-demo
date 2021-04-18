import firebase from "firebase/app";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyB6fXHWYomeowGda87mAeZsuuMdRf5Vook",
  authDomain: "tutor-app-8318e.firebaseapp.com",
  projectId: "tutor-app-8318e",
  storageBucket: "tutor-app-8318e.appspot.com",
  messagingSenderId: "532524773202",
  appId: "1:532524773202:web:ffefc31c7c358aa91fd48b",
  measurementId: "G-W6R8HWM42Y"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const analytics = firebase.analytics();

firebase.analytics().logEvent('notification_received');


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
