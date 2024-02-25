import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { SignUpTypes } from '../pages/signup/type'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User
} from 'firebase/auth'
import Signup from "../pages/signup";

const AuthContext = createContext<any>(undefined);

export const AuthContextProvider = ({ children }: any) => {
    const [user, setUser] = useState<SignUpTypes>({ email: '', password: '' })

    const signUp = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            return setUser(currentuser as any);
        });
        return () => {
            unsubscribe();
        }
    })

    return (
        <AuthContext.Provider value={{ Signup, logIn, logOut, user }}></AuthContext.Provider>
    )
}

export const UserAuth = (() => {
    return useContext(AuthContext)
})

