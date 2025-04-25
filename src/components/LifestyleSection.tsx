
import React from 'react';

export const LifestyleSection: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg mb-6">
            {/* Replace with actual lifestyle image */}
            <div className="w-full h-full bg-kumo-light-pink flex items-center justify-center">
              <p className="text-gray-600 text-center px-4">
                [Lifestyle Image: Model relaxing in Kumo Cloud pajamas]
              </p>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-3 text-center text-gray-900">
            Experience Cloud-Like Bliss
          </h2>
          
          <p className="text-lg text-center text-gray-700">
            Wrap yourself in pure bliss with Kumo Cloud's ultra-soft fabric that feels like you're floating on a dream. Make every night-in feel special with pajamas that are as cute as they are comfortable.
          </p>
        </div>
      </div>
    </section>
  );
};
