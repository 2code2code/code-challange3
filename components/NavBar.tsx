"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-amber-200 to-yellow-400">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <svg
                className="h-8"
                viewBox="0 0 473.935 473.935"
                xmlSpace="preserve"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="236.967"
                  cy="236.967"
                  r="236.967"
                  fill="#9CBDBF"
                ></circle>
                <path
                  fill="#F1EB75"
                  d="M313.289 193.634L246.565 192.56 316.424 42.189 194.64 102.196 157.473 241.364 199.778 224.571 171.045 348.581 207.359 331.698 180.631 431.716 296.395 293.816 255.19 293.154z"
                ></path>
              </svg>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 text-lg transition hover:text-gray-500/75"
                    href="/about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 text-lg transition hover:text-gray-500/75"
                    href="/services"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 text-lg transition hover:text-gray-500/75"
                    href="/teams"
                  >
                    Teams
                  </a>
                </li>
              </ul>
            </nav>

            <div className="block md:hidden">
              <button
                onClick={toggleMenu}
                className="rounded bg-yellow-400 p-2 text-gray-600 transition hover:text-gray-600/75"
                aria-label="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <nav aria-label="Global">
              <ul className="flex flex-col items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/services"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/teams"
                  >
                    Teams
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
