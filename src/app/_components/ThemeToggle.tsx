// src/app/_components/ThemeToggle.tsx
'use client';

import { useState, useLayoutEffect } from 'react';
import { Button } from '@/_components/_ui';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

export default function ThemeToggle() {
  const getInitialTheme = (): string => {
    try {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        // Si hay un tema almacenado, lo utilizamos directamente
        return storedTheme;
      }

      // Si no hay un tema almacenado, verificamos prefers-color-scheme
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch (error) {
      // Handle the case where localStorage is not available (e.g., server-side rendering)
      return 'dark';
    }
  };

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => getInitialTheme() === 'dark');

  const toggleTheme = (): void => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useLayoutEffect(() => {
    const initialTheme = getInitialTheme();
    document.documentElement.setAttribute('data-theme', initialTheme);
    setIsDarkMode(initialTheme === 'dark');
  }, []); // Empty dependency array to run only once during component mount

  useLayoutEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    } catch (error) {
      // Handle the case where localStorage is not available (e.g., server-side rendering)
    }
  }, [isDarkMode]);

  return <Button onClick={toggleTheme}>{isDarkMode ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}</Button>;
}
