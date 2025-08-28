import React from 'react';
import { Brain } from 'lucide-react';
import { Language, Translation } from '../types/language';
import { translations } from '../data/translations';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const t = (key: keyof typeof translations): string => translations[key][language];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Євгенія Заворотинська</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {t('home')}
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {t('about')}
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {t('services')}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {t('contact')}
            </a>
          </div>
          
          <LanguageSelector currentLanguage={language} onLanguageChange={onLanguageChange} />
        </nav>
      </div>
    </header>
  );
};