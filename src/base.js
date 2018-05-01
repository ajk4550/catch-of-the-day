import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyAMDRzK4LqW8xGvL2wm1HrR6fLtEgmaQqE',
	authDomain: 'catch-of-the-day-aaron-kaye.firebaseapp.com',
	databaseURL: 'https://catch-of-the-day-aaron-kaye.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };
// This is a default export
export default base;
