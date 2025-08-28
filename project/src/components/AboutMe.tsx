import React from 'react';
import { User, Heart, Shield, ExternalLink } from 'lucide-react';
import { Language } from '../types/language';
import { translations } from '../data/translations';

interface AboutMeProps {
  language: Language;
}

export const AboutMe: React.FC<AboutMeProps> = ({ language }) => {
  const t = (key: keyof typeof translations): string => translations[key][language];

  const features = [
    {
      icon: User,
      title: language === 'ua' ? 'Індивідуальний підхід' : 'Individual Approach',
      description: language === 'ua' 
        ? 'Кожна сесія адаптована під ваші унікальні потреби' 
        : 'Each session is tailored to your unique needs'
    },
    {
      icon: Heart,
      title: language === 'ua' ? 'Емпатія та підтримка' : 'Empathy & Support',
      description: language === 'ua' 
        ? 'Безпечний простір для відкритого діалогу' 
        : 'Safe space for open dialogue'
    },
    {
      icon: Shield,
      title: language === 'ua' ? 'Професійна етика' : 'Professional Ethics',
      description: language === 'ua' 
        ? 'Дотримання найвищих стандартів конфіденційності' 
        : 'Adherence to highest confidentiality standards'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('aboutMeTitle')}
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {t('aboutMeText').split('(https://jungians.kiev.ua)')[0]}
                  <a 
                    href="https://jungians.kiev.ua" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                  >
                    (https://jungians.kiev.ua)
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  .
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Євгенія Заворотинська</p>
                    <p className="text-sm text-gray-600">
                      {language === 'ua' ? 'Аналітична психологиня' : 'Analytical Psychologist'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg shrink-0">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl p-6 text-white">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">IAAP</div>
                  <p className="text-blue-100">
                    {language === 'ua' 
                      ? 'Член Української групи розвитку Аналітичної психології' 
                      : 'Member of Ukrainian Development Group for Analytical Psychology'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};