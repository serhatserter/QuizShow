import Firebase from 'firebase'
const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyAKla1kgQBv-N2wXjtwHTV23Rsa0qDXS90",
    authDomain: "quizshow-1972d.firebaseapp.com",
    databaseURL: "https://quizshow-1972d.firebaseio.com",
    projectId: "quizshow-1972d",
    storageBucket: "",
    messagingSenderId: "376684932539",
    appId: "1:376684932539:web:3179e7f010eeae5e"
})
export const db = firebaseApp.database()