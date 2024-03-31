
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyChGV9HXTdUzgxLjXwhbcineN47CJWzRCc",
  authDomain: "private-route-d3d5f.firebaseapp.com",
  projectId: "private-route-d3d5f",
  storageBucket: "private-route-d3d5f.appspot.com",
  messagingSenderId: "648582911540",
  appId: "1:648582911540:web:02161aec7aad1a0884dc61"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);