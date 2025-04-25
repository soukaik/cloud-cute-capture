
import React from 'react';
import logoSvg from '../assets/logo.svg';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={logoSvg} alt="Kumo Cloud Logo" className="h-14 w-auto animate-float" />
    </div>
  );
};
