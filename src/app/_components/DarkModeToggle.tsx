// DarkModeToggle.tsx
'use client';

import React, { useState, useEffect } from 'react';

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Intenta obtener el modo guardado en localStorage
    const storedMode = localStorage.getItem('darkMode');
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Establece el modo según lo que está almacenado o la preferencia del sistema
    setIsDarkMode(storedMode ? JSON.parse(storedMode) : prefersDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;

    // Actualiza el estado y guarda en localStorage
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));

    // Cambia el tema directamente en el documento
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <button onClick={toggleDarkMode} className="p-2 rounded">
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
