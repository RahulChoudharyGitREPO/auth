import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBCY2ekQ1Eg-_f34s6xRidrHU7CATsWArM",
    authDomain: "authentication-d5097.firebaseapp.com",
    databaseURL: "https://authentication-d5097-default-rtdb.firebaseio.com",
    projectId: "authentication-d5097",
    storageBucket: "authentication-d5097.firebasestorage.app",
    messagingSenderId: "235155346500",
    appId: "1:235155346500:web:4b5a6b250b75806a051811",
    measurementId: "G-J61D3S75ZE",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

