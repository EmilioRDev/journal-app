import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(FirebaseAuth, googleProvider);
		// const credentials = GoogleAuthProvider.credentialFromResult(result);

		const { displayName, email, photoURL, uid } = result.user;

		return {
			ok: true,
			//User info
			displayName,
			email,
			photoURL,
			uid,
		};
	} catch (error) {
		// Handle Errors here.
		const errorMessage = error.message;

		return {
			ok: false,
			errorMessage,
		};
	}
};

export const registerUserWithEmailPassword = async({email, password, displayName,}) => {
	try {

		const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
		const {uid, photoURL} = resp.user;
		// TODO: actualizar el displaName en Firebase

		return {
			ok: true,
			//User info
			displayName,
			email,
			photoURL,
			uid,
		}

	} catch (error) {
		console.log(error);
		const errorMessage = error.message;

		return {
			ok: false,
			errorMessage,
		};
	}
};
