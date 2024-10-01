import Image from 'next/image';
import type { FC } from 'react';
import Gmail from './gmail.svg';
import Outlook from './outlook.svg';

export const Navbar: FC = () => (
  <nav className="flex shrink-0 items-center justify-between">
    <h1 className="font-semibold">Email Signature Generator</h1>
    <div className="text-muted-foreground text-sm flex items-center gap-1">
      <p>Tested in</p>
      <div className="flex items-center gap-1">
        <Image src={Outlook} alt="" width={16} height={16} />
        <p>Outlook</p>
      </div>
      <p>and</p>
      <div className="flex items-center gap-1">
        <Image src={Gmail} alt="" width={16} height={16} />
        <p>Gmail</p>
      </div>
    </div>
  </nav>
);
