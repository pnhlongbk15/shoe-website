// import { initializeApp } from 'firebase/app'
// import { getAuth } from 'firebase/auth';
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'


const config = {
        apiKey: "AIzaSyCRbufqkcdGt16aJsJmNRj4-vEz08q6Z4k",
        authDomain: "shoe-website-70afe.firebaseapp.com",
        projectId: "shoe-website-70afe",
        storageBucket: "shoe-website-70afe.appspot.com",
        messagingSenderId: "341661893139",
        appId: "1:341661893139:web:dcb1e4af3f72ce35bc35e6"

};
firebase.initializeApp(config)

export const auth = firebase.auth()
// const app = initializeApp(config)
// export const auth = getAuth(app)