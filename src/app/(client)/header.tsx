import Link from 'next/link';

import { Burger, NavLink, ThemeIcons } from 'components';

import { links } from './config';

const Header = () => {
  return (
    <header className="sticky top-0 z-40">
      <div className="px-6 xl:px-0 backdrop-blur-sm bg-darken-bg-theme/90 dark:bg-lighten-bg-body/90 text-darken-color dark:text-lighten-color">
        <div className="wrapper flex justify-between items-center py-2">
          <div className="flex flex-col sm:flex-row justify-between lg:justify-start w-full items-center gap-4 text-xl">
            <span>+380 (95) 598-55-40</span> <span>+380 (67) 573-89-49</span>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <ThemeIcons />
            <span className="cursor-pointer whitespace-nowrap">UA | EN</span>
          </div>
        </div>
      </div>

      <div className="backdrop-blur-sm bg-white/90 dark:bg-darken-bg-theme/90 px-6 xl:px-0 drop-shadow-lg dark:drop-shadow-darken">
        <div className="wrapper flex justify-between items-center h-[70px]">
          <Link href="/">
            <h1>
              <span className="text-red">AXE</span>
              <span>SYSTEM</span>
            </h1>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                exact={link.exact}
                activeStyle="relative p-1 uppercase font-semibold text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:border after:border-primary"
                currentStyle="relative p-1 uppercase font-semibold hover:text-primary transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:border after:scale-x-0 after:border-primary after:transition-all after:duration-300 after:hover:scale-100"
              >
                {link.title}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <div>Поиск</div>
            <Burger />
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
