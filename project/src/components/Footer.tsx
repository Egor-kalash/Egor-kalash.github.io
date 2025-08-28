import React from 'react';
import { Brain, Heart } from 'lucide-react';
import { Language } from '../types/language';
import { translations } from '../data/translations';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = (key: keyof typeof translations): string => translations[key][language];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-2">
              <Brain className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">Євгенія Заворотинська</span>
            </div>
            
            <p className="text-gray-400 max-w-md mx-auto">
              {language === 'ua' 
                ? 'Професійна психологічна допомога для дорослих, підлітків та дітей' 
                : 'Professional psychological help for adults, teenagers and children'
              }
            </p>
            
            <div className="border-t border-gray-800 pt-6">
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <span>&copy; 2025 Євгенія Заворотинська.</span>
                <span>{t('allRightsReserved')}</span>
                <Heart className="w-4 h-4 text-red-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};