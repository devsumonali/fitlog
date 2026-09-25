import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';

const inter = Inter({
     subsets: ['latin'],
     variable: '--font-inter',
});

const oswald = Oswald({
     subsets: ['latin'],
     variable: '--font-oswald',
});

export const metadata: Metadata = {
     title: 'FitLog',
     description: 'Workout Library',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
     return (
          <html lang="en" className={`${inter.variable} ${oswald.variable} h-full antialiased`}>
               <Navbar />
               <body className="min-h-full flex flex-col">{children}</body>
               <Footer />
          </html>
     );
}
