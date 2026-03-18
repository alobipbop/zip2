import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
  id: string;
  email: string | null;
  name: string | null;
  onboardingCompleted?: boolean;
}

interface AuthContextType {
  currentUser: User | null;
  isAuthReady: boolean;
  login: (user: User) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  isAuthReady: false,
  login: async () => {},
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    // Check local storage for existing session
    const storedUser = localStorage.getItem('kairoly_user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setIsAuthReady(true);
  }, []);

  const login = async (user: User) => {
    setCurrentUser(user);
    localStorage.setItem('kairoly_user', JSON.stringify(user));
  };

  const logout = async () => {
    setCurrentUser(null);
    localStorage.removeItem('kairoly_user');
  };

  return (
    <AuthContext.Provider value={{ currentUser, isAuthReady, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
