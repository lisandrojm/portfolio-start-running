// src/app/_components/ThemeToggle.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/_components/_ui';

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    setDarkMode(currentTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return <Button onClick={toggleTheme}>{darkMode ? 'Light Mode' : 'Dark Mode'}</Button>;
};

export default ThemeToggle;
