import { useContext, createContext, useState, useEffect } from "react"
import { signInWithEmailAndPassword,onAuthStateChanged, signOut } from "firebase/auth";
import PropTypes from 'prop-types'; // ES6
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './../firebase_setup/firebase.config';

export const AuthContext = createContext(null);
const ContexProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const createUsers = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUsers = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser = () => {
        return signOut(auth);
    }



    useEffect(() => {
        const unScribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser)
        })
        return () => {
            unScribe()
        }
    },[])

    const data = { user,createUsers,loginUsers,signOutUser}

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}
export default ContexProvider;

ContexProvider.PropTypes = {
    children:PropTypes.node
}
