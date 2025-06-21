'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
    const currentPath : string = usePathname();
    return (
        <nav className="flex flex-row justify-center items-center text-white py-4 gap-4 sm:gap-8 md:gap-12 lg:gap-16 text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-black">
           <Link className={`${currentPath === '/' ? 'text-gray-300' : ''} hover:text-gray-300`} aria-current={currentPath === '/' ? 'page' : undefined} href="/">Home</Link>
           <Link className={`${currentPath === '/games' ? 'text-gray-300' : ''} hover:text-gray-300`} aria-current={currentPath === '/games' ? 'page' : undefined} href="/games">Games</Link>
        </nav>
    )
}