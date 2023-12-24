/* src/app/_components/ThemeToggle.tsx */
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/_components/_ui';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

export default function ThemeToggle() {
  const storedTheme = localStorage.getItem('theme');
  const initialTheme = storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const [isDarkMode, setIsDarkMode] = useState(initialTheme === 'dark');

  useEffect(() => {
    if (!document.documentElement.hasAttribute('data-theme')) {
      document.documentElement.setAttribute('data-theme', initialTheme);
    }
  }, [initialTheme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return <Button onClick={toggleTheme}>{isDarkMode ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}</Button>;
}
