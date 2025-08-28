import React from 'react';
import { Users, Baby, Heart, Palette, Brain, Eye } from 'lucide-react';
import { Language } from '../types/language';
import { translations } from '../data/translations';

interface ServicesProps {
  language: Language;
}

export const Services: React.FC<ServicesProps> = ({ language }) => {
  const t = (key: keyof typeof translations): string => translations[key][language];

  const services = [
    {
      icon: Users,
      title: t('adultTherapy'),
      description: t('adultTherapyDesc'),
      issues: [
        t('loneliness'),
        t('selfRealization'),
        t('lowSelfEsteem'),
        t('depression'),
        t('grief'),
        t('anxiety'),
        t('panicAttacks'),
        t('lifeCrisis'),
        t('emptiness')
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Baby,
      title: t('childTherapy'),
      description: t('childTherapyDesc'),
      issues: [
        t('aggression'),
        t('fears'),
        t('somaticIssues'),
        t('socialDifficulties'),
        t('compulsiveActions'),
        t('hyperactivity'),
        t('tantrums')
      ],
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: Heart,
      title: t('teenTherapy'),
      description: t('teenTherapyDesc'),
      issues: [
        t('anxiety'),
        t('lowSelfEsteem'),
        t('socialDifficulties'),
        t('aggression'),
        t('depression')
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const methods = [
    { icon: Brain, name: t('analyticalTherapy'), color: 'text-blue-600' },
    { icon: Palette, name: t('artTherapy'), color: 'text-emerald-600' },
    { icon: Eye, name: t('psychoanalysis'), color: 'text-purple-600' },
    { icon: Heart, name: t('serialDrawing'), color: 'text-orange-600' }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('servicesTitle')}
            </h2>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="text-center">
                <span className="text-3xl font-bold text-blue-600">35$</span>
                <span className="text-lg text-gray-600 ml-2">{t('pricePerSession')}</span>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
                <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.issues.map((issue, issueIndex) => (
                    <div key={issueIndex} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${service.color.replace('text', 'bg')}`} />
                      <span className="text-sm text-gray-700">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              {t('specializations')}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methods.map((method, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                  <method.icon className={`w-6 h-6 ${method.color}`} />
                  <span className="font-medium text-gray-800">{method.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};