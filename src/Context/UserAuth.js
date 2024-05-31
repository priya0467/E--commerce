import React, { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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

    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return <UserAuthContext.Provider value={{ user, signUp,logIn,logOut }}>
        {children}
    </UserAuthContext.Provider>;
}

export function UseuserAuth() {
    return useContext(UserAuthContext);
}
