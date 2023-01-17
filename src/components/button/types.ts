import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text?: string;
  icon?: ReactNode;
  fullWidth?: boolean;
  capitalize?: boolean;
  borderRadius?: boolean;
  styleType?: 'standard' | 'outline';
  colorType?: 'primary' | 'secondary' | 'red' | 'green' | 'transparent';
}
