'use client'; // This directive is crucial for client-side context

import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize theme state
  // Check localStorage first, otherwise default to 'light'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') { // Ensure localStorage is only accessed in the browser
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? savedTheme : 'light'; // <--- CHANGE THIS LINE TO 'light'
    }
    return 'light'; // Default for SSR or initial load
  });

  // Effect to save theme to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
    // Apply the theme class to the body element
    document.body.className = theme === 'dark' ? '' : 'light-theme'; // Ensure 'light-theme' class is applied
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to easily consume the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};