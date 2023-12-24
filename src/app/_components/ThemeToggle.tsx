// src/app/_components/ThemeToggle.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/_components/_ui';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

const ThemeToggle: React.FC = () => {
  // Obtener el tema actual del localStorage o usar el tema por defecto
  const storedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
  const currentTheme = storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  const [darkMode, setDarkMode] = useState(currentTheme === 'dark');

  useEffect(() => {
    // Aplicar el tema actual al cargar el componente
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', currentTheme);
    }
  }, [currentTheme]);

  const toggleTheme = () => {
    // Cambiar el tema y guardarlo en el localStorage
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode((prevMode) => !prevMode);

    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    }
  };

  return <Button onClick={toggleTheme}>{darkMode ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}</Button>;
};

export default ThemeToggle;
