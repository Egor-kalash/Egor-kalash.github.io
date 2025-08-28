import React from 'react';
import { Calendar, Star, MapPin, Brain } from 'lucide-react';
import { Language } from '../types/language';
import { translations } from '../data/translations';

interface HeroProps {
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = (key: keyof typeof translations): string => translations[key][language];

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-emerald-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {t('heroTitle')}
                </h1>
                <p className="text-xl text-blue-700 font-semibold">
                  {t('heroSubtitle')}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('heroDescription')}
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold text-gray-900">6</span>
                  <span className="text-gray-600">{t('yearsExperience')}</span>
                </div>
                
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">Київ, Саксаганського 74Г</span>
                </div>
              </div>
              
              <a href="#contact" className="bg-blue-600 inline-block hover:bg-blue-700 text-white px-8 py-4 mt-10 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Calendar  className="w-5 h-5 inline mr-2" />
                {t('bookConsultation')}
              </a>
            </div>
            
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="aspect-[4/5]">
                  <img 
                    src="/public/image.png" 
                    alt="Yevheniia Zavorotynska - Analytical Psychologist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Brain className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};