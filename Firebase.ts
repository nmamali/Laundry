import firebase from "firebase/compat";
import 'firebase/auth'
import 'firebase/firestore'
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
    }
}

export default Firebase