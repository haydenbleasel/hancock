import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import type { FC, ReactNode } from 'react';
import { ThemeProvider } from './components/theme-provider';

type RootLayoutProps = {
  readonly children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body className="h-screen bg-secondary p-4">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
