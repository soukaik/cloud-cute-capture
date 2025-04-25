
import React, { useRef } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { SocialProofSection } from '@/components/SocialProofSection';
import { ProductCarousel } from '@/components/ProductCarousel';
import { BenefitsSection } from '@/components/BenefitsSection';
import { LifestyleSection } from '@/components/LifestyleSection';
import { CallToActionSection } from '@/components/CallToActionSection';
import { FooterSection } from '@/components/FooterSection';

const Index = () => {
  const productsRef = useRef<HTMLDivElement>(null);
  
  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        <HeroSection scrollToProducts={scrollToProducts} />
        <SocialProofSection />
        
        <div ref={productsRef}>
          <ProductCarousel />
        </div>
        
        <BenefitsSection />
        <LifestyleSection />
        <CallToActionSection />
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Index;
