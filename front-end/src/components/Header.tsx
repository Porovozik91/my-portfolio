"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeMode from "./ThemeMode";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between py-4 px-6 bg-header-bg text-header-text shadow-md">
      <div className="flex items-center">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>
      <div className="flex items-center flex-1 ml-10 justify-end gap-20 flex-wrap">
        <nav className="flex items-center space-x-4 md:space-x-6">
          <Link href="/" className="hover:text-primary">
            Hjem
          </Link>
          <Link href="/about" className="hover:text-primary">
            Om meg
          </Link>
          <Link href="/projects" className="hover:text-primary">
            Prosjekter
          </Link>
        </nav>
        <ThemeMode />
        <button className="bg-primary text-white px-4 py-2 rounded-2xl shadow hover:bg-primary/80 transition">
           Preview CV
        </button>
      </div>
    </header>
  );
};

export default Header;

