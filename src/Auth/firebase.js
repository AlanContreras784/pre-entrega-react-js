// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgaPRB1RWsJ02UmkeOwAFI9CLSpTm9xcs",
    authDomain: "prueba-auth1-5a565.firebaseapp.com",
    projectId: "prueba-auth1-5a565",
    storageBucket: "prueba-auth1-5a565.firebasestorage.app",
    messagingSenderId: "1089570942852",
    appId: "1:1089570942852:web:a84062767a425c064677d1",
    measurementId: "G-HTTDD00TTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth();

export function crearUsuario(email, password){
    return(
        new Promise((res,rej)=>{
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed up 
                console.log("Credenciales", userCredential)
                const user = userCredential.user;
                console.log(user)
                res(user);
                // ...
            })
            .catch((error) => {
                console.log(error.code, error.message)
                const errorCode = error.code;
                const errorMessage = error.message;
                rej(error);
                // ..
            });
        })
    )
    
}

export function loginEmailPass(email, password){

    return(
        new Promise((res,rej)=>{
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log('Credenciales', userCredential);
                const user = userCredential.user;
                console.log(user);
                res(user);
                // ...
            })
            .catch((error) => {
                console.log(error.code, error.message)
                const errorCode = error.code;
                const errorMessage = error.message;
                rej(error);
            });
        }
    )
    )

}

