import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-8">
          {/* Contact Section */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="text-gray-600 hover:text-green-600 transition-colors duration-200 cursor-pointer">
                  +91 99983 17292
                </span>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-gray-600">
                  <div className="hover:text-green-600 transition-colors duration-200 cursor-pointer">
                    D/4, Malabar Hill Apart., Beside Anand Vidyalaya, Nr. Mansi
                    Circle, Satelite, Vastrapur,
                  </div>
                  <div className="hover:text-green-600 transition-colors duration-200 cursor-pointer">
                    Ahmedabad-380015
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <Link
                  href="mailto:hello@unifiedui.com"
                  className="text-gray-600 hover:text-green-600 transition-colors duration-200"
                >
                  aquigrower@gmail.com
                </Link>
              </div>
            </div>
          </div>

          {/* Navigate Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Navigate
            </h3>
            <nav className="space-y-3">
              <Link
                href="/services"
                className="block text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/success-stories"
                className="block text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                href="/discover"
                className="block text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                href="/discover"
                className="block text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                Projects
              </Link>
              <Link
                href="/care"
                className="block text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                Blogs
              </Link>
              <Link
                href="/download-app"
                className="block text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Solution Section */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Our Services
            </h3>
            <nav className="space-y-3">
              <Link
                href="/get-in-touch"
                className="block text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                Sustainable Agriculture & Organic Farming
              </Link>
              <Link
                href="/technology"
                className="block text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                Hydroponics for Traditional, Exotics, and Medicinal Herbs
              </Link>
              <Link
                href="/technology"
                className="block text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                Ecological Restoration & Afforestation
              </Link>
              <Link
                href="/who-we-are"
                className="block text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                Extension Activity & Awareness
              </Link>
              <Link
                href="/expertise"
                className="block text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                Biodiversity Awareness & Citizen Science Initiatives
              </Link>
            </nav>
          </div>

          {/* Discover Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Our Projects
            </h3>
            <nav className="space-y-3">
              <Link
                href="/latest-news"
                className="block text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                Latest News
              </Link>
              <Link
                href="/new-arrivals"
                className="block text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                New Arrivals
              </Link>
              <Link
                href="/solution"
                className="block text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                Solution
              </Link>
              <Link
                href="/gain-profession"
                className="block text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                Gain Profession
              </Link>
              <Link
                href="/career"
                className="block text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                Career
              </Link>
            </nav>
          </div>

          {/* Follow Us Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Follow Us
            </h3>
            <nav className="space-y-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                Facebook
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                Instagram
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                LinkedIn
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                Twitter
              </Link>
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-500 text-sm">
              ©2025 aquigrower, All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:text-green-600 transition-colors duration-200"
              >
                Privacy & Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="text-gray-500 hover:text-green-600 transition-colors duration-200"
              >
                Terms & Condition
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
