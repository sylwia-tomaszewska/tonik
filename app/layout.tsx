import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Github Repositories Search',
  description: 'Tonik Studio - recruitment task',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='shortcut icon' href='favicon.svg' type='image/x-icon' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
