import { useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState();
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscirbe = onAuthStateChanged(auth, (user) => {
      setAuthUser(user?.accessToken);
    });
    return () => unsubscirbe();
  }, []);
  return (
    <AuthContext.Provider value={{ authUser, signIn, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
