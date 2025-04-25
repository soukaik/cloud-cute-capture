
import React from 'react';
import { Button } from '@/components/ui/button';

export const CallToActionSection: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-kumo-light-pink to-white">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-kumo-pink">
          <h2 className="text-3xl font-bold mb-4 text-kumo-black">Ready to Join the Cloud?</h2>
          
          <div className="bg-kumo-pink/30 rounded-lg p-3 mb-6">
            <p className="text-lg font-semibold mb-1">Limited Time Offer:</p>
            <p className="text-2xl font-bold">15% Off Your First Order!</p>
          </div>
          
          <Button className="w-full bg-kumo-dark-pink hover:bg-kumo-black text-white py-6 rounded-full text-lg shadow-md mb-6">
            Shop Now
          </Button>
          
          <div className="flex justify-center space-x-4 mb-4">
            <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
              <p className="text-xs font-semibold">VISA</p>
            </div>
            <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
              <p className="text-xs font-semibold">MC</p>
            </div>
            <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
              <p className="text-xs font-semibold">AMEX</p>
            </div>
            <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
              <p className="text-xs font-semibold">PAY</p>
            </div>
          </div>
          
          <p className="text-sm text-gray-500">
            Free shipping on orders over $75 • 30-day returns
          </p>
        </div>
      </div>
    </section>
  );
};
