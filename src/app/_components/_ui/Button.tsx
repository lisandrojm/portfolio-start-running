/* src/app/_components/_ui/Button.tsx */

import React, { useState } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseDown = () => {
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button className={`ml-auto block bg-transparent border border-orange px-3.5 py-2.5 text-center text-sm font-semibold text-orange uppercase shadow-sm ${isHovered ? 'hover:bg-orange hover:text-black' : ''} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange`} onMouseDown={handleMouseDown} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} {...props}>
      {children}
    </button>
  );
}
