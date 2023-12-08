import { cn } from '@/lib/utils';
import type { FC, ReactNode } from 'react';

type CardProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

export const Card: FC<CardProps> = ({ children, className }) => (
  <div
    className={cn(
      'rounded-lg border p-4',
      'border-zinc-200 bg-white',
      'dark:border-zinc-800 dark:bg-zinc-950',
      className
    )}
  >
    {children}
  </div>
);
