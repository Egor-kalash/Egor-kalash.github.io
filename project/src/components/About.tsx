import React from 'react';
import { GraduationCap, Award, Users, CheckCircle } from 'lucide-react';
import { Language } from '../types/language';
import { translations } from '../data/translations';

interface AboutProps {
  language: Language;
}

export const About: React.FC<AboutProps> = ({ language }) => {
  const t = (key: keyof typeof translations): string => translations[key][language];

  const education = [
    {
      year: '2014-2016',
      degree: language === 'ua' 
        ? 'НПУ імені Драгоманова, спеціаліст «Психологія»' 
        : 'Dragomanov NPU, Specialist in Psychology',
    },
    {
      year: '2017-2021',
      degree: language === 'ua' 
        ? 'Курс спеціалізації з аналітичної психотерапії, Міжнародна асоціація аналітичної психології' 
        : 'Analytical Psychotherapy Specialization, International Association of Analytical Psychology',
    },
    {
      year: '2022-2026',
      degree: language === 'ua' 
        ? 'Курс спеціалізації з дитячої психотерапії "Юнгіанська психотерапія дітей та підлітків"' 
        : 'Child Psychotherapy Specialization "Jungian Psychotherapy for Children and Adolescents"',
    },
    {
      year: '2019-2020',
      degree: language === 'ua' 
        ? 'Курс підвищення кваліфікації «Метод психосоціальної підтримки – серійне малювання»' 
        : 'Advanced Training Course "Psychosocial Support Method - Serial Drawing"',
    }
  ];

  const achievements = [
    {
      icon: Users,
      title: language === 'ua' ? 'Супервізія' : 'Supervision',
      description: language === 'ua' 
        ? 'Працюю під супервізією сертифікованого юнгіанського аналітика' 
        : 'Working under supervision of certified Jungian analyst'
    },
    {
      icon: Award,
      title: language === 'ua' ? 'Міжнародний досвід' : 'International Experience',
      description: language === 'ua' 
        ? 'Участь у міжнародних конференціях та семінарах як слухач і доповідач' 
        : 'Participant in international conferences and seminars as attendee and speaker'
    },
    {
      icon: CheckCircle,
      title: language === 'ua' ? 'Власна терапія' : 'Personal Therapy',
      description: language === 'ua' 
        ? 'Досвід власної терапії 7 років' 
        : '7 years of personal therapy experience'
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('aboutTitle')}
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">{t('education')}</h3>
                </div>
                
                <div className="space-y-6">
                  {education.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold shrink-0">
                          {item.year}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{item.degree}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-emerald-600" />
                  <h3 className="text-2xl font-bold text-gray-900">{t('experience')}</h3>
                </div>
                
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                      <div className="flex items-start gap-4">
                        <div className="bg-emerald-50 p-3 rounded-lg">
                          <achievement.icon className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                  <p className="text-blue-800 font-semibold">
                    {language === 'ua' 
                      ? 'років аналітичної психотерапії дорослих і дітей' 
                      : 'years of analytical psychotherapy for adults and children'
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