import { createContext, useContext, useState } from 'react';

// () => void
interface AuthContextType {
  isLoggedIn: boolean;
  toggleLoggedIn: () => void;
  logIn: () => void;
  logOut: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Component should be placed inside AuthContext');
  }
  return context;
};

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLoggedIn = () => setIsLoggedIn((value) => !value);
  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);

  return { isLoggedIn, toggleLoggedIn, logIn, logOut };
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn, toggleLoggedIn, logIn, logOut } = useAuth();
  return (
    <AuthContext value={{ isLoggedIn, toggleLoggedIn, logIn, logOut }}>{children}</AuthContext>
  );
};
