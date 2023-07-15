import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const useUserAuth = () => {
  const [user] = useAuthState(auth);
  return user;
};
