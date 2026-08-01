'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { NAV_LINKS } from '../lib/constants';

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Books Corner</h1>
          <nav className="space-x-6 text-secondary font-medium">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name.toLowerCase()}
                href={link.path}
                className={clsx(
                  'hover:text-gold transition',
                  pathname === link.path ? 'text-gold' : ''
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
