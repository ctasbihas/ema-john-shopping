// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzBBXj7YriX7E5TsHzYpKkd5GWxK1LwBA",
    authDomain: "ema-john-dc808.firebaseapp.com",
    projectId: "ema-john-dc808",
    storageBucket: "ema-john-dc808.appspot.com",
    messagingSenderId: "216709324572",
    appId: "1:216709324572:web:cf6d731fed6a27de9124d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;