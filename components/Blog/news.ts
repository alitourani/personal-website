// TODO: This file can be replaced by the rows of a database.

export type RecentItem = {
  id: number;
  link: string;
  date: string;
  title: string;
  content: string;
};

export const recentItems: RecentItem[] = [
  {
    id: 1,
    title: 'Hey! This is my first blog post!',
    content: 'I think it was a good idea to implement a Next.js app for my website!',
    date: '2022-04-24',
    link: '#',
  },
];