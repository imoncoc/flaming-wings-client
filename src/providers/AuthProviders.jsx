import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [preloader, setPreloader] = useState(true);

const createUser = (email, password) => {
    setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password);
};

const signIn = (email, password) => {
    setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
};

const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
}

const signInWithGithub = () => {
  return signInWithPopup(auth, githubProvider);
}

const logOut = () => {
    setLoading(true)
  return signOut(auth);
};

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
    // console.log("Logged in user inside auth state observed", loggedUser);
    setUser(loggedUser);
    setLoading(false);
  });

  return () => {
    unsubscribe();
  }
});





    const authInfo = {
      user,
      auth,
      createUser,
      signIn,
      signInWithGoogle,
      signInWithGithub,
      logOut,
      loading,
      preloader,
      setPreloader,
    };



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;