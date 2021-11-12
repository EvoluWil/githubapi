import { UserTypes } from "../@types/UserTypes";
import { createContext, ReactNode, useContext, useState } from "react";
import { AuthContextDataTypes } from "../@types/AuthContextDataTypes";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataTypes);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserTypes | null>(null);

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signOut, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { useAuth, AuthProvider };
