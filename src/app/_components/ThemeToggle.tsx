// src/app/_components/ThemeToggle.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/_components/_ui';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

const ThemeToggle: React.FC = () => {
  // Obtener el estado inicial de darkMode desde el localStorage
  const storedDarkMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(storedDarkMode ? JSON.parse(storedDarkMode) : true);

  useEffect(() => {
    // Configurar el tema al cargar la página
    const currentTheme = darkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [darkMode]);

  const toggleTheme = () => {
    // Cambiar el estado de darkMode al contrario de su valor actual
    setDarkMode((prevMode: any) => !prevMode);

    // Guardar el nuevo estado en el localStorage
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  };

  return <Button onClick={toggleTheme}>{darkMode ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}</Button>;
};

export default ThemeToggle;
