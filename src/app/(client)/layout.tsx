// 'use client';
import { Noto_Sans } from '@next/font/google';

import { ChildrenProps } from 'types';

import { Footer } from './footer';
import { Header } from './header';

const notoSans = Noto_Sans({ weight: ['400', '500', '600', '700'] });

export default function Layout({ children }: ChildrenProps) {
  return (
    <div
      className={`${notoSans.className} flex flex-col min-h-screen overflow-y-auto overflow-x-hidden`}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}
