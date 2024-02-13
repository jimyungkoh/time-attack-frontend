import { createContext, useContext } from "react";

const initialValue = {
  signedIn: false,
  signIn: () => {},
  signOut: () => {},
};

const AuthContext = createContext(initialValue);

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
