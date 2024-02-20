// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBHn3Z07g5Ab1k_FKf8e-OxlpF18RoH2-o',
	authDomain: 'journal-app-bde6b.firebaseapp.com',
	projectId: 'journal-app-bde6b',
	storageBucket: 'journal-app-bde6b.appspot.com',
	messagingSenderId: '710114639894',
	appId: '1:710114639894:web:53d2ff85fc9878d6a23537',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
