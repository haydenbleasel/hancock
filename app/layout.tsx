import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import type { FC, ReactNode } from 'react';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <html lang="en">
    <body className="h-screen bg-neutral-100 p-4">
      {children}
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
