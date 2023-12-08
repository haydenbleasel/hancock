import '../styles/globals.css';
// eslint-disable-next-line import/namespace, import/no-deprecated
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import type { FC, ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Hancock | Simple Email Signature Generator',
  description: 'Enter your details below to generate your email signature.',
};

const RootLayout: FC<{ readonly children: ReactNode }> = ({ children }) => (
  <html lang="en">
    <body className="h-screen bg-zinc-100 dark:bg-zinc-900 p-4">
      {children}
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
