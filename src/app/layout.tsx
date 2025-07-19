import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// Update the import path if the context folder is in 'src/context'
import AuthProvider from '@/context/AuthProvider';



const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'True Feedback',
  description: 'Real feedback from real people.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" >
      <AuthProvider>
        <body className={inter.className}>
          {children}
        
        </body>
      </AuthProvider>
    </html>
  );
}
