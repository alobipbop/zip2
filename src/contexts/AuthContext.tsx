import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
  id: string;
  email: string | null;
  name: string | null;
  onboarding_completed?: boolean;
}

interface AuthContextType {
  currentUser: User | null;
  token: string | null;
  isAuthReady: boolean;
  login: (user: User, token: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  token: null,
  isAuthReady: false,
  login: async () => {},
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    // Restore session from localStorage
    const storedUser = localStorage.getItem('kairoly_user');
    const storedToken = localStorage.getItem('kairoly_token');
    if (storedUser && storedToken) {
      setCurrentUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
    setIsAuthReady(true);
  }, []);

  const login = async (user: User, newToken: string) => {
    setCurrentUser(user);
    setToken(newToken);
    localStorage.setItem('kairoly_user', JSON.stringify(user));
    localStorage.setItem('kairoly_token', newToken);
  };

  const logout = async () => {
    setCurrentUser(null);
    setToken(null);
    localStorage.removeItem('kairoly_user');
    localStorage.removeItem('kairoly_token');
  };

  return (
    <AuthContext.Provider value={{ currentUser, token, isAuthReady, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
