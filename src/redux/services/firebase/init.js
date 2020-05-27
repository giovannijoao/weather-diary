import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

const firebaseEnvConfig = process.env.REACT_APP_FIREBASE_CONFIG;
if (firebaseEnvConfig) {
    const firebaseConfig = JSON.parse(firebaseEnvConfig);
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
} else {
    throw new Error('Está faltando as configurações do Firebase no .env.')
}