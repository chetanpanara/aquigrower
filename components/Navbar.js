"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white  fixed w-full top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:justify-center md:relative">
          {/* Logo - positioned absolutely on desktop to keep menu centered */}
          <div className="flex-shrink-0 md:absolute md:left-0">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-tr from-white  via-green-400  to-green-900 bg-clip-text text-transparent "
            >
              AquiGrower
            </Link>
          </div>

          {/* Desktop Menu - centered */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {menuItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative tracking-wider px-3 py-2 text-sm font-medium transition-colors duration-300 group
                      ${
                        isActive
                          ? "text-green-700"
                          : "text-gray-800 hover:text-green-700"
                      }
                    `}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-green-700 transition-all duration-300 ease-out
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                      `}
                    ></span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-800 focus:outline-none focus:text-gray-800 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white `}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm block tracking-wider px-3 py-2 font-medium transition-all duration-300 group rounded-md
                  ${
                    isActive
                      ? "text-green-700 bg-gray-200"
                      : "text-gray-800 hover:text-green-700 hover:bg-gray-200"
                  }
                `}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-3 h-0.5 bg-green-700 transition-all duration-300 ease-out
                    ${isActive ? "w-8" : "w-0 group-hover:w-8"}
                  `}
                ></span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
