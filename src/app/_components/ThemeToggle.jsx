// components/ThemeToggle.jsx
'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/_components/_ui';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return <Button onClick={toggleTheme}>{isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</Button>;
};

export default ThemeToggle;
