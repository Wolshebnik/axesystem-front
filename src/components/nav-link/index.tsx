'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ChildrenProps } from 'types';

interface NavLinkProps {
  href: string;
  exact?: boolean;
  currentStyle?: string;
  activeStyle?: string;
}

const NavLink = ({
  href,
  exact,
  children,
  currentStyle,
  activeStyle,
}: ChildrenProps<NavLinkProps>) => {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname?.startsWith(href);
  const active = isActive ? activeStyle : currentStyle;

  return (
    <Link href={href} className={active}>
      {children}
    </Link>
  );
};

export { NavLink };
