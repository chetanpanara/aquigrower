"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Sustainable Agriculture & Organic Farming for Basic Mankind Needs",
          href: "/services/sustainable-agriculture",
        },
        {
          name: "Hydroponics for Traditional, Exotics, and Medicinal Herbs",
          href: "/services/hydroponics",
        },
        {
          name: "Environmental Activity & Afforestation Initiatives",
          href: "/services/Environmental",
        },
        {
          name: "Extension Activity & Awareness for Sustainable Practices",
          href: "/services/hydroponics",
        },
      ],
    },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsServicesDropdownOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  const isServicesActive = pathname.startsWith("/services");

  return (
    <nav className="bg-white fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:justify-center md:relative">
          {/* Logo - positioned absolutely on desktop to keep menu centered */}
                <div className="flex-shrink-0 md:absolute md:left-0 flex items-center space-x-2">
                <Link href="/" className="flex items-center">
                  <img
                  src="./img/logo.png"
                  alt="AquiGrower Logo"
                  className="h-15 w-15"
                  />
                  <span className="text-2xl font-bold bg-gradient-to-tr from-white via-green-400 to-green-900 bg-clip-text text-transparent ml-2">
                  AquiGrower
                  </span>
                </Link>
                </div>

                {/* Desktop Menu - centered */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-2">
              {menuItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      ref={dropdownRef}
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <button
                        onClick={toggleServicesDropdown}
                        className={`relative tracking-wider px-3 py-2 text-sm font-medium transition-colors duration-300 group flex items-center space-x-1
                          ${
                            isActive
                              ? "text-green-700"
                              : "text-gray-800 hover:text-green-700"
                          }
                        `}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            isServicesDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                        <span
                          className={`absolute bottom-0 left-0 h-0.5 bg-green-700 transition-all duration-300 ease-out
                            ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                          `}
                        ></span>
                      </button>

                      {/* Desktop Dropdown */}
                      <div
                        className={`absolute top-full left-0 mt-1 w-96 bg-white rounded-md shadow-lg border border-gray-200 transition-all duration-200 ${
                          isServicesDropdownOpen
                            ? "opacity-100 visible transform translate-y-0"
                            : "opacity-0 invisible transform -translate-y-2"
                        }`}
                      >
                        <div className="py-1">
                          {item.dropdownItems.map((dropdownItem) => {
                            const isDropdownActive =
                              pathname === dropdownItem.href;
                            return (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className={`block px-4 py-3 text-sm leading-5 transition-colors duration-200 ${
                                  isDropdownActive
                                    ? "text-green-700 bg-green-50"
                                    : "text-gray-700 hover:text-green-700 hover:bg-gray-50"
                                }`}
                                onClick={() => setIsServicesDropdownOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }

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
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            if (item.hasDropdown) {
              return (
                <div key={item.name}>
                  <button
                    onClick={toggleMobileServices}
                    className={`relative text-sm w-full text-left tracking-wider px-3 py-2 font-medium transition-all duration-300 group rounded-md flex items-center justify-between
                      ${
                        isActive
                          ? "text-green-700 bg-gray-200"
                          : "text-gray-800 hover:text-green-700 hover:bg-gray-200"
                      }
                    `}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        isMobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                    <span
                      className={`absolute bottom-0 left-3 h-0.5 bg-green-700 transition-all duration-300 ease-out
                        ${isActive ? "w-8" : "w-0 group-hover:w-8"}
                      `}
                    ></span>
                  </button>

                  {/* Mobile Dropdown Items */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isMobileServicesOpen
                        ? "max-h-32 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-6 space-y-1 max-h-32 overflow-y-auto">
                      {item.dropdownItems.map((dropdownItem) => {
                        const isDropdownActive = pathname === dropdownItem.href;
                        return (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className={`block text-sm px-3 py-2 font-medium transition-all duration-300 rounded-md
                              ${
                                isDropdownActive
                                  ? "text-green-700 bg-green-50"
                                  : "text-gray-600 hover:text-green-700 hover:bg-gray-100"
                              }
                            `}
                            onClick={() => {
                              setIsOpen(false);
                              setIsMobileServicesOpen(false);
                            }}
                          >
                            {dropdownItem.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

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
