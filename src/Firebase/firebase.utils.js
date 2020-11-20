import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
	apiKey: "AIzaSyCNVofIR9FQOgTxNCshb6nkVK1P6oyt8wo",
	authDomain: "studbox-e8f75.firebaseapp.com",
	databaseURL: "https://studbox-e8f75.firebaseio.com",
	projectId: "studbox-e8f75",
	storageBucket: "studbox-e8f75.appspot.com",
	messagingSenderId: "338412023532",
	appId: "1:338412023532:web:3fee655a84d6de2520bfc9",
	measurementId: "G-53G8NZZ8CD"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`Users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		try {
			await userRef.set({
				displayName,
				email,
				friends: [],
				groups : [],
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export default firebase;