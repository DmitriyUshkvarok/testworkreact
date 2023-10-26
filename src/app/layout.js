import { Inter } from 'next/font/google';
import './globals.css';
import NavigationPanel from '../Components/NavigationPanel/NavigationPanel';
import Container from '../Components/Container/Container';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Test Work | Home Page',
  description: 'my test work Dmitriy Ushkvarok | React,Next.Js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <NavigationPanel />
          <main>{children}</main>
        </Container>
      </body>
    </html>
  );
}
