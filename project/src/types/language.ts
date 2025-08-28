export type Language = 'ua' | 'en';

export interface Translation {
  ua: string;
  en: string;
}

export interface Translations {
  // Header
  home: Translation;
  about: Translation;
  services: Translation;
  contact: Translation;
  
  // Hero Section
  heroTitle: Translation;
  heroSubtitle: Translation;
  heroDescription: Translation;
  bookConsultation: Translation;
  yearsExperience: Translation;
  
  // Services
  servicesTitle: Translation;
  adultTherapy: Translation;
  childTherapy: Translation;
  teenTherapy: Translation;
  adultTherapyDesc: Translation;
  childTherapyDesc: Translation;
  teenTherapyDesc: Translation;
  pricePerSession: Translation;
  
  // About
  aboutTitle: Translation;
  education: Translation;
  experience: Translation;
  specializations: Translation;
  
  // Contact
  contactTitle: Translation;
  contactDescription: Translation;
  onlineOffline: Translation;
  address: Translation;
  platforms: Translation;
  
  // Footer
  allRightsReserved: Translation;
  
  // Methods
  analyticalTherapy: Translation;
  artTherapy: Translation;
  psychoanalysis: Translation;
  serialDrawing: Translation;
  
  // Issues
  loneliness: Translation;
  selfRealization: Translation;
  lowSelfEsteem: Translation;
  depression: Translation;
  grief: Translation;
  anxiety: Translation;
  panicAttacks: Translation;
  lifeCrisis: Translation;
  emptiness: Translation;
  aggression: Translation;
  fears: Translation;
  somaticIssues: Translation;
  socialDifficulties: Translation;
  compulsiveActions: Translation;
  hyperactivity: Translation;
  tantrums: Translation;
}