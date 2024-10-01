import type { Metadata } from 'next';
import type { FC } from 'react';
import { Editor } from './components/editor';
import { Navbar } from './components/navbar';

export const metadata: Metadata = {
  title: 'Hancock | Simple Email Signature Generator',
  description: 'Enter your details below to generate your email signature.',
};

const Home: FC = () => (
  <div className="flex h-full w-full flex-col gap-4 overflow-hidden">
    <Navbar />
    <Editor />
  </div>
);

export default Home;
