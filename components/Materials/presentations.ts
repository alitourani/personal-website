// TODO: This file can be replaced by the rows of a database.

import { ColumnItem } from "./commonTypes";

export type PresItem = {
  date: Date;
  link: string;
  index: string;
  title: string;
  location: string;
};

export const presColumns: ColumnItem[] = [
  {
    key: 'title',
    title: 'Title',
    dataIndex: 'title',
  },
  {
    key: 'link',
    title: 'Link',
    dataIndex: 'link',
  },
  {
    key: 'location',
    title: 'Location',
    dataIndex: 'location',
  },
  {
    key: 'date',
    title: 'Date',
    dataIndex: 'date',
  }
];

export const dataSource: PresItem[] = [
  {
    index: '1',
    date: new Date('2016-11-15'),
    location: 'University of Guilan',
    title: 'An Introduction to Ruby Programming Language',
    link: 'https://www.researchgate.net/publication/322222154_An_Introduction_to_Ruby_Programming_Language',
  },
  {
    index: '2',
    date: new Date('2016-12-15'),
    location: 'University of Guilan',
    title: 'Design Patterns in Cloud Computing',
    link: 'https://www.researchgate.net/publication/312053966_Design_Patterns_in_Cloud_Computing',
  },
  {
    index: '3',
    date: new Date('2017-12-15'),
    location: 'University of Guilan',
    title: 'Fiber Optic Sensors and Their Applications',
    link: 'https://www.researchgate.net/publication/321759004_Fiber_Optic_Sensors_FOS_and_their_applications',
  },
  {
    index: '4',
    date: new Date('2017-12-15'),
    location: 'University of Guilan',
    title: 'How to Start with CUDA?',
    link: 'https://www.researchgate.net/publication/329512940_CUDA_Tutorial_-_How_to_Start_with_CUDA',
  },
  {
    index: '5',
    date: new Date('2018-12-15'),
    location: 'University of Guilan',
    title: 'Digital Image Processing Applications in ITS',
    link: 'http://alitourani.ir/course-material/#:~:text=Digital%20Image%20Processing%20Applications%20in%20ITS',
  },
];