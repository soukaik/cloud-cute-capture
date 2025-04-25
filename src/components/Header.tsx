
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ShoppingCart } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-white/95 shadow-md backdrop-blur-sm' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        <Logo />
        
        <button className="p-2 rounded-full bg-kumo-pink/20 hover:bg-kumo-pink/40 transition-colors">
          <ShoppingCart className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};
