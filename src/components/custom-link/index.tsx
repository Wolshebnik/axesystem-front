import CommonLink from 'next/link';

import { LinkProps } from './types';

const CustomLink = ({ url, text, icon, order = 0 }: LinkProps) => {
  return (
    <CommonLink
      href={url}
      className="flex items-center gap-2 text-primary hover:text-primaryHover"
    >
      {text && <span className={`order-${order}`}>{text}</span>}
      {icon && icon}
    </CommonLink>
  );
};

export { CustomLink };
