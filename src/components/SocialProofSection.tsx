
import React from 'react';
import { Star } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  return (
    <section className="bg-kumo-light-pink py-10 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Por que os Amantes da Kumo Não Conseguem Parar</h2>
          <p className="text-gray-700">
            Porque seu pijama deve ser tão adorável quanto confortável.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex justify-center mb-2">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-center text-lg font-medium mb-1">4.9 Estrelas (Mais de 1.243 Avaliações)</p>
          <p className="text-center italic text-gray-600">
            "Literalmente o pijama mais macio que já usei! Me sinto flutuando em uma nuvem toda noite! 😍"
          </p>
          <p className="text-center mt-2 font-medium">- Mika T.</p>
        </div>
      </div>
    </section>
  );
};
