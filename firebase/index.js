import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVOs3OOpjj2wssB8Z1KhXc1WwMCWRL304",
  authDomain: "artify-image-storage.firebaseapp.com",
  projectId: "artify-image-storage",
  storageBucket: "artify-image-storage.appspot.com",
  messagingSenderId: "470121583444",
  appId: "1:470121583444:web:fe6eb1e4dba24a690b2ec1",
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  listAll,
  ref,
  storage,
  getDownloadURL,
  db,
  doc,
  getDoc,
  collection,
  getDocs,
};
