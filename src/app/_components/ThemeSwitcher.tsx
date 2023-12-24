// src/app/_components/ThemeSwitcher.tsx
'use client';
import { Button } from '@/_components/_ui';

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

  return <Button onClick={toggleTheme}>Switch to {theme === 'dark' ? 'light' : 'dark'} mode</Button>;
}
