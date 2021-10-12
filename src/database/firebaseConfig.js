import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, } from 'firebase/firestore/lite';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const configRasterWeb = {
  apiKey: "AIzaSyCXTJLuTXqBWB-hcEhJ8-UQ9TEaG6yRL6g",
  authDomain: "raster-entrega.firebaseapp.com",
  databaseURL: "https://raster-entrega-default-rtdb.firebaseio.com",
  projectId: "raster-entrega",
  storageBucket: "raster-entrega.appspot.com",
  messagingSenderId: "1076971822970",
  appId: "1:1076971822970:web:82f5f9a4f8358a60e280c3",
  measurementId: "G-0ZKW4GMGFM"
}

const app = initializeApp(configRasterWeb);

const db = getFirestore(app);

const storage = getStorage(app);

export async function getUsers() {
  const citiesCol = collection(db, 'users');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}


// const storage = firebase.storage();


export { db, storage, ref, getDownloadURL};
