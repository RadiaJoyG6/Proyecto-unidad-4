  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  import { getAuth } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'
  
  import {getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js" //para CRUD

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
  apiKey: "AIzaSyAtGdx49F_Zxlj5zR7haNe_zurDcvJkwok",
  authDomain: "glow-app-10c20.firebaseapp.com",
  projectId: "glow-app-10c20",
  storageBucket: "glow-app-10c20.appspot.com",
  messagingSenderId: "1097165212252",
  appId: "1:1097165212252:web:759b65ae394a0855cff499",
  measurementId: "G-FW4VWG2JF6"
};

  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  console.log(app);
  //Inicializar auth de firebase 
 export const auth = getAuth();
 export const db = getFirestore();

 //Servicios de Firestore

 //Para leer los tasks

 export const getTasks = () => getDocs(collection(db,"tasks"))
 export const onGetTasks = (callback) => {onSnapshot(collection(db,"tasks"),callback)}
 export const saveTasks = (title, description, userMail) => {
  addDoc(collection(db, "tasks"),{title, description,userMail})
 }

 export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

 export const getTask = (id) => getDoc(doc(db, "tasks", id));

 export const updateTask = (id, newFields) => updateDoc(doc(db, "tasks", id), newFields);
