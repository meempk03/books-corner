'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { NAV_LINKS } from '../lib/constants';

export default function Header() {
    const pathname = usePathname();
    console.log('Header pathname:', pathname);
    return (
        <>
            <header className="border-b border-moonstone">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Books Corner</h1>
                    <nav className="space-x-6 text-green-50 font-medium">
                        {
                            NAV_LINKS.map((link) => (
                                <Link key={link.name.toLowerCase()}
                                    href={link.path}
                                    className={clsx(
                                        'hover:text-red-700 transition',
                                        pathname === link.path ? 'text-moonstone' : '')}>
                                    {link.name}
                                </Link>
                            ))
                        }
                    </nav>
                </div>
            </header>
        </>
    );
}