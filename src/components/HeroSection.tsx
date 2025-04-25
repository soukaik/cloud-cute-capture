
import React from 'react';
import { Button } from '@/components/ui/button';
import { Cloud } from 'lucide-react';

interface HeroProps {
  scrollToProducts: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ scrollToProducts }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 pb-12 pt-20">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-70 z-0"></div>
      
      <div className="relative z-10 max-w-md mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900">
          Unlock Dreamy <span className="text-kumo-black">Comfort</span> & <span className="text-kumo-dark-pink">Cuteness</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 text-gray-700">
          Ultra-soft anime plush pajama sets designed for the ultimate relaxation experience.
        </p>
        
        <div className="mx-auto w-full max-w-xs">
          <Button 
            onClick={scrollToProducts} 
            className="w-full bg-kumo-dark-pink hover:bg-kumo-black text-white font-semibold py-6 rounded-full text-lg shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <Cloud className="mr-2 h-5 w-5" />
            Shop The Cuteness Now
          </Button>
        </div>
      </div>
      
      {/* Hero Image - This would be your model image */}
      <div className="mt-8 relative z-10 w-full max-w-sm mx-auto">
        <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
          <div className="w-full h-full bg-kumo-pink flex items-center justify-center">
            {/* Replace with actual image */}
            <p className="text-gray-500 text-center px-4">
              [Hero Image: Model wearing Pink Kumo Cloud pajama set]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
