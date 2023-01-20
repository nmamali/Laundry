import firebase from "firebase/compat";
import 'firebase/auth'
import 'firebase/firestore'
import {getDatabase, onValue, ref, set} from "firebase/database";
// @ts-ignore
const Firebase = {
    // auth
    loginWithEmail: (email:string, password:string) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
    },
    signupWithEmail: (email:string, password:string) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
    },
    signOut: () => {
        return firebase.auth().signOut()
    },
    checkUserAuth: (user: any) => {
        return firebase.auth().onAuthStateChanged(user)
    },

    // @ts-ignore
    createNewUser: (userData) => {
        return firebase
            .firestore()
            .collection('users')
            .doc(`${userData.uid}`)
            .set(userData)
    },

    // @ts-ignore
    createOrder: async (data) => {
        const db = getDatabase();
        await set(ref(db, 'orders/' + data?.userId), data);
    },

    getOrders: async ()=>{
        const db = getDatabase();
        const ordersRef = ref(db, 'orders/');
        onValue(ordersRef, (snapshot) => {
            return snapshot.val()
        });
    }
}

export default Firebase