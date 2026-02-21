import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-serif mb-6 tracking-widest">BELLA ITALIA</h2>
          <p className="text-stone-400 max-w-md mb-8 leading-relaxed">
            Desde 1985, trazendo o melhor da gastronomia italiana para sua mesa. 
            Ingredientes selecionados e paixão em cada prato.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest font-bold mb-6 text-primary">Contato</h4>
          <ul className="space-y-4 text-stone-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-primary flex-shrink-0" />
              <span>Rua das Oliveiras, 123<br />Jardins, São Paulo - SP</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-primary flex-shrink-0" />
              <span>(11) 3456-7890</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-primary flex-shrink-0" />
              <span>contato@bellaitalia.com.br</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest font-bold mb-6 text-primary">Horários</h4>
          <ul className="space-y-2 text-stone-400 text-sm">
            <li className="flex justify-between">
              <span>Terça - Quinta</span>
              <span>19:00 - 23:30</span>
            </li>
            <li className="flex justify-between">
              <span>Sexta - Sábado</span>
              <span>19:00 - 00:30</span>
            </li>
            <li className="flex justify-between">
              <span>Domingo</span>
              <span>12:00 - 16:00</span>
            </li>
            <li className="mt-4 text-stone-500 italic">Segunda-feira: Fechado</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto border-t border-stone-800 mt-16 pt-8 text-center text-stone-500 text-xs">
        <p>© 2026 Bella Italia Ristorante. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
