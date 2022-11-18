import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyAyZPicQidg1qFxjObp8cVhveETLxi0G0I",
    authDomain: "todo-list-30661.firebaseapp.com",
    projectId: "todo-list-30661",
    storageBucket: "todo-list-30661.appspot.com",
    messagingSenderId: "126932238092",
    appId: "1:126932238092:web:32b7e1db99fc2f11dad329"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase Auth
export const auth = getAuth()


