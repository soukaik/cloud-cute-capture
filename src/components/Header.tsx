
import React from 'react';
import { Link } from 'react-router-dom';
import { Package } from 'lucide-react';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Logo className="h-8 w-8" />
            <span className="font-semibold text-xl">Kumo Cloud</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/rastreamento" 
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <Package className="h-5 w-5" />
              <span>Rastrear Pedido</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
