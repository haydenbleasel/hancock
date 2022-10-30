import '../styles/globals.css';
import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { Analytics } from '@vercel/analytics/react';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <Analytics />
  </>
);

export default App;
