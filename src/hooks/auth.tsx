import React, { createContext, useContext, useState } from "react";

interface IChildren {
  children?: React.ReactNode;
}

interface IAuthContext {
  logged: boolean;
  signIn(email: string, password: string): void;
  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<IChildren> = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem("@minha-carteria:logged");
    return !!isLogged;
  });

  const signIn = (email: string, password: string) => {
    if (email === "seuemail@exemplo.com" && password === "123") {
      localStorage.setItem("@minha-carteria:logged", 'true');
      setLogged(true);
    } else {
      alert("Email ou senha inválidos!");
    }
  };

  const signOut = () => {
    localStorage.removeItem("@minha-carteria:logged");
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() : IAuthContext {
    const context = useContext(AuthContext)

    return context
}

export  {AuthProvider, useAuth};