import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import navigation from './Links';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-gradient-to-b from-slate-950">
      <nav
        className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium leading-6 transition-all duration-150 ease-in-out text-white/70 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <Link href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Mystic Tarot Chat</span>
          <Image
            className="w-auto h-32"
            width={376}
            height={382}
            src="/logo_light.webp"
            alt="Mystic Tarot Chat Logo"
          />
        </Link>
        <div className="justify-end flex-1 text-right">
          <Link
            href="/contact"
            className="text-sm font-semibold leading-6 transition-all duration-150 ease-in-out text-white/70 hover:text-white"
          >
            Contact Us <span aria-hidden="true"></span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full px-6 py-6 overflow-y-auto bg-slate-950">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Mystic Tarot Chat</span>
              <Image
                className="w-auto h-32"
                width={376}
                height={382}
                src="/logo_light.webp"
                alt="Mystic Tarot Chat Logo"
              />
            </Link>
            <div className="flex justify-end flex-1">
              <Link
                href="#"
                className="text-sm font-semibold leading-6 text-right text-white/70"
              >
                Book now <span aria-hidden="true"></span>
              </Link>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 transition duration-150 ease-in-out rounded-lg text-white/70 hover:bg-slate-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
