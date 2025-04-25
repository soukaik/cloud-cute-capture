import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  color: string;
  bgColor: string;
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Kumo Cloud Rosa",
    color: "Rosa Suave",
    bgColor: "bg-kumo-pink",
    price: "R$ 249,99",
  },
  {
    id: 2,
    name: "Kumo Cloud Branco",
    color: "Branco Puro",
    bgColor: "bg-white",
    price: "R$ 249,99",
  },
  {
    id: 3,
    name: "Kumo Cloud Preto",
    color: "Preto Elegante",
    bgColor: "bg-kumo-black",
    price: "R$ 249,99",
  }
];

export const ProductCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Rosa Suave");
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    setSelectedColor(products[(currentSlide + 1) % products.length].color);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    setSelectedColor(products[currentSlide === 0 ? products.length - 1 : currentSlide - 1].color);
  };

  const selectColor = (index: number) => {
    setCurrentSlide(index);
    setSelectedColor(products[index].color);
  };

  return (
    <section id="products" className="py-12 px-4">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Encontre Seu Pijama Perfeito</h2>
        
        <div className="relative">
          <div className="overflow-hidden rounded-xl" ref={carouselRef}>
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="min-w-full">
                  <div 
                    className={`aspect-[3/4] ${product.bgColor} rounded-xl flex items-center justify-center shadow-md`}
                  >
                    {/* Replace with actual product image */}
                    <p className={`text-center px-4 ${product.color === "Preto Elegante" ? "text-white" : "text-gray-600"}`}>
                      [Product Image: Model wearing {product.color} Kumo Cloud pajama set]
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide} 
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex justify-center mt-6 space-x-4">
          <button 
            onClick={() => selectColor(0)} 
            className={`w-12 h-12 rounded-full bg-kumo-pink border-2 transition-all ${selectedColor === "Rosa Suave" ? "border-black scale-110" : "border-transparent"}`}
            aria-label="Rosa Suave color"
          ></button>
          <button 
            onClick={() => selectColor(1)} 
            className={`w-12 h-12 rounded-full bg-white border-2 shadow-sm transition-all ${selectedColor === "Branco Puro" ? "border-black scale-110" : "border-transparent"}`}
            aria-label="Branco Puro color"
          ></button>
          <button 
            onClick={() => selectColor(2)} 
            className={`w-12 h-12 rounded-full bg-kumo-black border-2 transition-all ${selectedColor === "Preto Elegante" ? "border-gray-400 scale-110" : "border-transparent"}`}
            aria-label="Preto Elegante color"
          ></button>
        </div>
        
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold">{products[currentSlide].name}</h3>
          <p className="text-gray-600 mb-2">{products[currentSlide].color}</p>
          <p className="text-kumo-black font-bold text-2xl">{products[currentSlide].price}</p>
          
          <div className="mt-6">
            <Button className="w-full bg-kumo-dark-pink hover:bg-kumo-black text-white py-6 rounded-full text-lg shadow-md">
              Adicionar ao Carrinho
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
