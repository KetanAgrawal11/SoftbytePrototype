
'use client';

import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-md transition-colors duration-300
                 bg-[var(--primary-color)] text-[var(--text-primary)]
                 hover:bg-[var(--primary-color-dark)] hover:text-[var(--text-primary)]
                 border border-[var(--border-color)]"
      style={{
      }}
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
};

export default ThemeToggler;