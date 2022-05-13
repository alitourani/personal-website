// TODO: This file can be replaced by the rows of a database.

export type LanguageItem = {
  id: number;
  name: string;
  icon: string;
  proficiency: string;
};

export const languageItems: LanguageItem[] = [
  {
    id: 1,
    name: 'Persian',
    icon: './ir.svg',
    proficiency: 'Native proficiency',
  },
  {
    id: 2,    
    name: 'English',    
    icon: './en.svg',
    proficiency: 'Professional working proficiency',
  },
  {
    id: 3,
    name: 'French',
    icon: './fr.svg',
    proficiency: 'Elementary proficiency',
  },
];