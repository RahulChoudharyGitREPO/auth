import { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithPopup
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    async function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                window.location.href = '/login';
            });
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                window.location.href = '/';
            });
    }

    function loginWithGoogle() {
        return signInWithPopup(auth, googleProvider)
            .then(() => {
                window.location.href = '/';
            });
    }

    function logout() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        user,
        signUp,
        login,
        loginWithGoogle,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
