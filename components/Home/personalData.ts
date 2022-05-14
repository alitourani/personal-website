// TODO: This file can be replaced by the rows of a database.

export type HonorItem = {
  id: number;
  year: number;
  title: string;
  link?: string;
  country: string;
  organization: string;
  description?: string;
};

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
    icon: '/ir.svg',
    proficiency: 'Native proficiency',
  },
  {
    id: 2,    
    name: 'English',    
    icon: '/en.svg',
    proficiency: 'Professional working proficiency (IELTS 7.0)',
  },
  {
    id: 3,
    name: 'French',
    icon: '/fr.svg',
    proficiency: 'Elementary proficiency',
  },
];

export const honorItems: HonorItem[] = [
  {
    id: 1,
    year: 2014,
    country: 'Iran',
    title: 'Top-15 Business Planners Award',
    organization: '10th Sheikh Bahai National Technopreneurship Festival',
    link: 'https://www.linkedin.com/company/sheikh-bahai-technopreneurship-festival/about/',
    description: 'Selected in the final stage of “the Best Business Planners” competitions (top 1%) for “Automatic Human Tracker Application for Banks CCTV s Surveillance Systems”'
  },
  {
    id: 2,
    year: 2016,
    country: 'Iran',
    title: 'Winning scholarship for Masters in Computer Engineering (Software Engineering stream)',
    organization: 'University of Guilan',
    description: 'The competitive scholarship is awarded through a nationwide exam with more than 25,000 applicants'
  },
  {
    id: 3,
    year: 2018,
    country: 'Iran',
    title: 'Holding the highest average grade point among all Computer Engineering students in the class of 2016',
    organization: 'Department of Computer Engineering, University of Guilan',
  },
  {
    id: 4,
    year: 2018,
    country: 'Iran',
    title: 'Selected as the Best Student Researcher',
    organization: 'University of Guilan',
  }
];