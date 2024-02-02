import { useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
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
    setAuthUser("");
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user.accessToken);
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={{ authUser, signIn, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
