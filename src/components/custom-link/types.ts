import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

type BaseLink = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export interface LinkProps extends Omit<BaseLink, 'href'> {
  url: string;
  text?: string;
  order?: 0 | 1;
  icon?: JSX.Element;
}
