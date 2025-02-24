"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeMode from "./ThemeMode";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-header-bg text-header-text shadow-md">
      <div className="flex items-center">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>
      <nav className="flex items-center space-x-6">
        <Link href="/" className="hover:text-primary">
          Hjem
        </Link>
        <Link href="/about" className="hover:text-primary">
          Om meg
        </Link>
        <Link href="/projects" className="hover:text-primary">
          Prosjekter
        </Link>
        <ThemeMode />
      </nav>
    </header>
  );
};

export default Header;