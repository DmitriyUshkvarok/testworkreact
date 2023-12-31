import { Philosopher, Fredericka_the_Great } from 'next/font/google';

export const philosopher = Philosopher({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
});

export const fredericka = Fredericka_the_Great({
  subsets: ['latin'],
  weight: ['400'],
});
