import React from 'react';
import { Send, MapPin, Globe, Video, Mail, MessageCircle, Phone } from 'lucide-react';
import { Language } from '../types/language';
import { translations } from '../data/translations';

interface ContactProps {
  language: Language;
}

export const Contact: React.FC<ContactProps> = ({ language }) => {
  const t = (key: keyof typeof translations): string => translations[key][language];

  const contactMethods = [
    {
      icon: Send,
      name: 'Telegram',
      value: '@Ievgeniia_psy',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      link: 'https://t.me/Ievgeniia_psy'
    },
    {
      icon: Mail,
      name: 'Gmail',
      value: 'ezavorotynska@gmail.com',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      link: 'mailto:ezavorotynska@gmail.com'
    },
    {
      icon: Phone,
      name: language === 'ua' ? 'Телефон' : 'Phone',
      value: '066 088 0477',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      link: 'tel:+380660880477'
    }
  ];

  const platforms = [
    {
      icon: Video,
      name: 'Zoom',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('contactTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('contactDescription')}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {language === 'ua' ? 'Способи зв\'язку' : 'Contact Methods'}
                </h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
                    >
                      <div className={`w-12 h-12 ${method.bgColor} rounded-lg flex items-center justify-center`}>
                        <method.icon className={`w-6 h-6 ${method.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{method.name}</h4>
                        <p className="text-gray-600">{method.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {t('platforms')}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {platforms.map((platform, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className={`w-12 h-12 ${platform.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                        <platform.icon className={`w-6 h-6 ${platform.color}`} />
                      </div>
                      <p className="font-medium text-gray-800 text-sm">{platform.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t('onlineOffline')}</h4>
                    <p className="text-gray-600">
                      {language === 'ua' 
                        ? 'Проводжу консультації як онлайн, так і в особистому кабінеті в Києві.' 
                        : 'I conduct consultations both online and in my personal office in Kyiv.'
                      }
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <a 
                      href="https://maps.google.com/?q=Саксаганського+74Г,+Київ,+Україна"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:scale-110 transition-transform duration-200"
                    >
                      <MapPin className="w-6 h-6 text-red-600 hover:text-red-700" />
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {language === 'ua' ? 'Адреса офісу' : 'Office Address'}
                    </h4>
                    <a 
                      href="https://maps.google.com/?q=Саксаганського+74Г,+Київ,+Україна"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {t('address')}
                    </a>
                  </div>
                </div>
                 
                {/* <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    {language === 'ua' ? 'Графік роботи' : 'Working Hours'}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        {language === 'ua' ? 'Понеділок - П\'ятниця' : 'Monday - Friday'}
                      </span>
                      <span className="font-medium">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        {language === 'ua' ? 'Субота' : 'Saturday'}
                      </span>
                      <span className="font-medium">10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        {language === 'ua' ? 'Неділя' : 'Sunday'}
                      </span>
                      <span className="font-medium text-red-500">
                        {language === 'ua' ? 'Вихідний' : 'Closed'}
                      </span>
                    </div>
                  </div> */}
                {/* </div> */} 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};