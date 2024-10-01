import { cn } from '@/lib/utils';
import type { FC, ReactNode } from 'react';

type CardProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

export const Card: FC<CardProps> = ({ children, className }) => (
  <div className={cn('rounded-lg border bg-background p-4', className)}>
    {children}
  </div>
);
