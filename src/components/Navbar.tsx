"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const links = [
        { href: "/", name: "home" },
        { href: "#", name: "|" },
        { href: "/portfolio", name: "portfolio" },
    ];
    const pathname = usePathname();

    return (
        <nav className="w-full flex items-center justify-center h-[70px] z-10 relative tracking-wider">
            <ul className="flex gap-4">
                {links.map((link) => {
                    const { href } = link;
                    const isActive =
                        (pathname === "/" && href === "/") ||
                        pathname === href ||
                        pathname?.startsWith(`${href}/`) ||
                        pathname?.startsWith(`${href}?`);

                    return (
                        <Link
                            key={link.name}
                            href={`${link.href}`}
                            className={`uppercase text-xl md:text-2xl font-bold ${isActive ? "text-primary" : "text-white"}`}>
                            {link.name}
                        </Link>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
