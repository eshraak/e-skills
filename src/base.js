import Rebase from 're-base';
import Firebase from 'firebase';

const firebaseApp = Firebase.initializeApp({
	apiKey: "AIzaSyDUmQUwBCCLDtyfD1lkjHNiocJNk4TJJGg",
    authDomain: "skyll-20ad4.firebaseapp.com",
    databaseURL: "https://skyll-20ad4.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());


//named export
export { firebaseApp };
//default export
export default base;