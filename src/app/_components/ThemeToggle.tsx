// src/app/_components/ThemeToggle.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/_components/_ui';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

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

  const icon = darkMode ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />;

  return <Button onClick={toggleTheme}>{icon}</Button>;
};

export default ThemeToggle;
