
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyD5Cu9y4NmYgiL8B5LqJAg60tlSX4oZgRU",
  authDomain: "salad-clo-ecommerce.firebaseapp.com",
  projectId: "salad-clo-ecommerce",
  storageBucket: "salad-clo-ecommerce.appspot.com",
  messagingSenderId: "373953501475",
  appId: "1:373953501475:web:166cedbc84d4b108fc5496"
};


const app = initializeApp(firebaseConfig);
export const database= getFirestore(app)