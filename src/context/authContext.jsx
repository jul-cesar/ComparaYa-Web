import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase-auth";

export const Auth = createContext();

export const AuthFunction = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setCurrentUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Auth.Provider value={{ createUser, logIn, logOut, currentUser }}>
      {children}
    </Auth.Provider>
  );
};
