/* src/app/_components/ThemeToggler.tsx */
'use client';
import { Button } from '@/_components/_ui';

export default function ThemeToggler() {
  let savedTheme = 'dark';

  if (typeof window !== 'undefined' && window.localStorage) {
    // Solo intenta acceder a localStorage si estamos en un entorno de navegador
    savedTheme = window.localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    if (typeof window !== 'undefined' && window.localStorage) {
      // Solo intenta acceder a localStorage si estamos en un entorno de navegador
      window.localStorage.setItem('theme', newTheme);
    }

    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return <Button onClick={toggleTheme}>Toggle Theme</Button>;
}
