"use client";

import { useState, useEffect } from "react";

const ThemeMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleDarkMode = (): void => {
    setDarkMode((prev: boolean) => {
      const newMode = !prev;
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  return (
    <button onClick={toggleDarkMode} className="focus:outline-none">
      {/* Sirkel med inner og outer shadow */}
      <div className="w-14 h-14 flex justify-center items-center rounded-full bg-gray-200 dark:bg-blue-800 transition-colors duration-500 shadow-lg dark:shadow-md relative">
        <div
          className="absolute inset-0 rounded-full dark:shadow-[inset_4px_4px_10px_rgba(0,0,0,0.4),_inset_-4px_-4px_10px_rgba(255,255,255,0.1)] shadow-[inset_4px_4px_10px_rgba(0,0,0,0.1),_inset_-4px_-4px_10px_rgba(255,255,255,0.4)] transition-all duration-500"
        />
        <div
          className={`transition-transform duration-700 ease-in-out ${
            darkMode ? "rotate-0" : "rotate-180"
          }`}
        >
          {darkMode ? (
            <svg
              className="w-7 h-7 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg
              className="w-7 h-7 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414z" />
            </svg>
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeMode;





