import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3fKSoyhyma0Mhd11YSvHcrYoxaQvz64k",
  authDomain: "darioreact.firebaseapp.com",
  projectId: "darioreact",
  storageBucket: "darioreact.firebasestorage.app",
  messagingSenderId: "849293482794",
  appId: "1:849293482794:web:c3a89fc617d59896889c53"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(<App />
  
)
