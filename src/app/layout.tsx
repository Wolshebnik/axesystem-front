import { Roboto } from '@next/font/google';

import { Provider } from 'components';

import 'styles/globals.css';

const roboto = Roboto({
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={roboto.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
