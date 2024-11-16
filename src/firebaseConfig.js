// Importa Firestore además de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAcnXUrZM7QYwUflVa63GrktiQHPIsgC-Q",
  authDomain: "insanegaming-715b9.firebaseapp.com",
  projectId: "insanegaming-715b9",
  storageBucket: "insanegaming-715b9.firebasestorage.app",
  messagingSenderId: "812607690844",
  appId: "1:812607690844:web:cfbf560729d91e4e8bae99",
  measurementId: "G-YML6H41SHC"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta Firestore para usarlo en otros archivos
export const db = getFirestore(app);
