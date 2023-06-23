import { Inter } from 'next/font/google';
import NavBar from '../components/nav-bar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Países do mundo',
  description: 'Informações sobre países',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ inter.className }>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
