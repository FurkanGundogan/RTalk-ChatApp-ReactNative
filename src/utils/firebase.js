import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD8yRFGKpLeuGTSYs3ePjPiraxt_hQzxQc",
    authDomain: "rtalks-9f906.firebaseapp.com",
    projectId: "rtalks-9f906",
    storageBucket: "rtalks-9f906.appspot.com",
    messagingSenderId: "172187916890",
    appId: "1:172187916890:web:b1db3cb7c715bbfa8fd663",
    measurementId: "G-QDZCHG8M22"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);