import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const [loading, setLoading]= useState(true)

const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
}

const logIn = (email,password)=> {
    return signInWithEmailAndPassword(auth,email,password)
}

const logOut = ()=>{
    return signOut(auth)
}
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        return unsubscribe();
    }
},[])

const authInfo={
    createUser,
        user,
        loading,
        logOut,
        logIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;