'use client';
import { useState } from 'react';
import { MenuIcon, X } from 'lucide-react';
import Link from 'next/link';
import { useMediaQuery } from '../hooks/use-media-query';
import Logo from "../assets/Images/Navbar/ctlogo.png";
import NaacLogo from "../assets/Images/Navbar/naaclogo.webp";
import {
  DrawerContent,
  HeaderDrawer,
} from './core/drawer/vaul-header';
const items = [
  {
    id: 1,
    logo: Logo
  },
  {
   logo: NaacLogo,
    id: 2,
  },
  
];
export default function Navbar() {
  const [headerOpen, setHeaderOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <>
      <header className="flex justify-between border items-center p-3 rounded-md dark:bg-black/45 backdrop-blur-md">
        <img src={Logo} alt="CT Logo" className="h-14" />
            <img src={NaacLogo} alt="Naac Logo" className="h-[75px] w-18" />

        <HeaderDrawer
          open={headerOpen}
          setOpen={setHeaderOpen}
          drawerBtn={() => {
            return (
              <button>
                <MenuIcon />
              </button>
            );
          }}>
          <DrawerContent>
            {!isDesktop && (
              <div className="flex justify-center w-full absolute bottom-1 left-0 ">
                <div className=" w-16 h-[0.30rem] flex-shrink-0 rounded-full bg-gray-600 my-4" />
              </div>
            )}
            <div className=" mx-auto  gap-4">
              <div className="flex justify-between items-center border-b">
                {isDesktop && (
                  <button
                    className="flex justify-start p-2 mb-2 rounded-md dark:bg-white dark:text-black bg-black text-white"
                    onClick={() => setHeaderOpen(false)}>
                    <X />
                  </button>
                )}
                <h1 className="mx-auto text-2xl font-bold">CT GROUP</h1>
              </div>
              <div className="flex justify-between py-2">
                <nav className="flex gap-8">
                  <ul className="xl:text-2xl text-lg space-y-2 xl:space-y-4 font-semibold uppercase  pr-8">
                    <li>
                      <Link
                        href="/"
                        className="relative flex items-center gap-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">
                        ABOUT
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/components"
                        className="relative flex gap-2 items-center after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">
                        COURSES
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="relative flex gap-2 items-center after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">
                        ACEDEMICS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/templates"
                        className="relative flex items-center gap-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">
                        PLACEMENTS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/open-source"
                        className="relative flex items-center gap-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">
                        CONTACT
                      </Link>
                    </li>
                  </ul>
                </nav>

                <div className="grid grid-cols-3 gap-4 py-4 pr-20 w-full">
                  <>
                  {items.map((item) => (
                    <figure
                      key={item.id}
                      className="inline-block group w-full xl:h-52 h-full relative rounded-md">
                      <img src={item.logo} alt="Logo" className="w-full h-full object-contain rounded-md" />
                    </figure>
                  ))}
                  </>
                </div>
              </div>
            </div>
          </DrawerContent>
        </HeaderDrawer>
      </header>
    </>
  );
}
