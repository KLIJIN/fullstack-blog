import { ReactNode } from 'react';

export interface PostProps {
  children: ReactNode | ReactNode[];
  className: string;
}