// src/app/_components/ThemeSwitcher.tsx
'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/solid'; // Import MoonIcon and SunIcon from Heroicons

import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    // Al cargar el componente, verifica el tema preferido del usuario
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', userPrefersDark ? 'dark' : 'light');
    setTheme(userPrefersDark ? 'dark' : 'light');
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <button className="text-orange" onClick={toggleTheme}>
      {/* Use the SunIcon and MoonIcon based on the current theme */}
      {theme === 'dark' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
    </button>
  );
}
