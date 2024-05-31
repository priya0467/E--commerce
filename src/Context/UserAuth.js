import React, { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const UserAuthContext = createContext(); // Change createContext to a function call

export default function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState("");

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return <UserAuthContext.Provider value={{ user, signUp,logIn }}>
        {children}
    </UserAuthContext.Provider>;
}

export function UseuserAuth() {
    return useContext(UserAuthContext);
}
