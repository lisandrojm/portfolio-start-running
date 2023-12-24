// src/app/_components/ThemeToggle.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/_components/_ui';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

const ThemeToggle: React.FC = () => {
  // Obtener el tema actual del localStorage o usar el tema por defecto
  const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
  const [darkMode, setDarkMode] = useState(savedTheme === 'dark');

  useEffect(() => {
    // Verificar si se ha guardado un tema en el localStorage
    if (savedTheme !== null) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      setDarkMode(savedTheme === 'dark');
    } else {
      // Si no hay un tema guardado, usar el tema preferido del usuario o el tema por defecto
      const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', preferredTheme);
      setDarkMode(preferredTheme === 'dark');
    }
  }, [savedTheme]);

  const toggleTheme = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    // Guardar el tema en el localStorage si está definido
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  };

  const icon = darkMode ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />;

  return <Button onClick={toggleTheme}>{icon}</Button>;
};

export default ThemeToggle;
