
import React from 'react';
import { Cloud, Heart, Sparkles, Gift } from 'lucide-react';

const benefits = [
  {
    icon: <Cloud className="h-10 w-10" />,
    title: "Cloud-Like Softness",
    description: "Feel the ultra-plush difference that wraps you in pure comfort."
  },
  {
    icon: <Heart className="h-10 w-10" />,
    title: "Adorable Anime Style",
    description: "Show off your unique cute vibe with character-inspired designs."
  },
  {
    icon: <Sparkles className="h-10 w-10" />,
    title: "Ultimate Comfort",
    description: "Perfect for sleep, lounge, gaming, or streaming sessions."
  },
  {
    icon: <Gift className="h-10 w-10" />,
    title: "The Perfect Gift",
    description: "Surprise someone special (or treat yourself) with a cloud of cuteness."
  }
];

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-white to-kumo-light-pink">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Why You'll Love Kumo Cloud</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
            >
              <div className="text-kumo-dark-pink mb-4">{benefit.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
