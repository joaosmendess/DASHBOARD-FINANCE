import React, { createContext, useState, useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import dark from "../styles/themes/dark";
import light from "../styles/themes/light";


interface IChildren {
    children?: React.ReactNode;
}

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
  
}

interface ITheme {
  title: string;
  color: {
    primary: string;
    secondary: string;
    tertiary: string;
    White: string;
    black: string;
    gray: string;
    sucess: string;
    info: string;
    warning: string;
  }
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC <IChildren>  = ( {children} ) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    const themeSaved = localStorage.getItem('@minha-carteira:theme')

    if(themeSaved) {
      return JSON.parse(themeSaved)
    } else {
      return dark;
    }
  });

  const toggleTheme = () => {
    if (theme.title === 'dark') {
      setTheme(light);
      localStorage.setItem('@minha-carteira:theme', JSON.stringify(light));
    } else {
      setTheme(dark);
      localStorage.setItem('@minha-carteira:theme', JSON.stringify(dark));
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);
  return context;
}

export { ThemeProvider, useTheme };
