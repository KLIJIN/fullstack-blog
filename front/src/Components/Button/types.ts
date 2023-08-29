import { HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
  size?: 'small' | 'medium' | 'large';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  variant?: 'text' | 'outlined' | 'contained';
  type?: "submit" | "reset" | "button";
  fullWidth?: boolean;
  onClick?: () => void;
}