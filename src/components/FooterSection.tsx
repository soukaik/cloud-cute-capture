
import React from 'react';
import { Logo } from './Logo';

export const FooterSection: React.FC = () => {
  return (
    <footer className="py-10 px-4 bg-white border-t">
      <div className="max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        
        <div className="flex justify-center space-x-8 mb-6">
          <a href="#" className="text-gray-600 hover:text-kumo-dark-pink transition-colors">Contact</a>
          <a href="#" className="text-gray-600 hover:text-kumo-dark-pink transition-colors">FAQ</a>
          <a href="#" className="text-gray-600 hover:text-kumo-dark-pink transition-colors">Returns</a>
        </div>
        
        <div className="text-center text-sm text-gray-500">
          <p className="mb-1">© 2025 Kumo Cloud. All rights reserved.</p>
          <p>Made with ♥ for dreamers everywhere</p>
        </div>
      </div>
    </footer>
  );
};
