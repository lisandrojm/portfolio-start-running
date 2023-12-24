/* src/app/_components/ThemeToggle.tsx */
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/_components/_ui';

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setDarkMode(currentTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);

    const newTheme = darkMode ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return <Button onClick={toggleTheme}>{darkMode ? 'Light Mode' : 'Dark Mode'}</Button>;
};

export default ThemeToggle;
