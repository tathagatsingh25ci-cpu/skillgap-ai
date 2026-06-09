import * as React from 'react';
import { clsx } from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return <div className={clsx('glass rounded-3xl p-6 shadow-soft', className)} {...props} />;
}
