import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface AuthContextProps {
  signed: boolean;
  user: object | null;
  token: string | null;
  login(user: object, token: string): void;
  logout(): void;
};

interface AuthProviderProps {
  children: ReactNode
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<object | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storagedUser = localStorage.getItem('@App:user');
    const storagedToken = localStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      setToken(storagedToken);
    }
  }, []);

  const login = async (user: object, token: string) => {
    setUser(user);
    setToken(token);

    localStorage.setItem('@App:user', JSON.stringify(user));
    localStorage.setItem('@App:token', token);
  }

  const logout = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem('@App:user');
    localStorage.removeItem('@App:token');
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(token), user, token, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
}
