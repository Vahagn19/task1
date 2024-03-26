import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsfoOa-wzSEl9ItsKmQZFV_PZJ2AfqzCk",
  authDomain: "figma-project-8715d.firebaseapp.com",
  projectId: "figma-project-8715d",
  storageBucket: "figma-project-8715d.appspot.com",
  messagingSenderId: "665658378182",
  appId: "1:665658378182:web:c4630b421661ec310e94c7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

