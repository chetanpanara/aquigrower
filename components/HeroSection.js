"use client";

import React from "react";

const HeroSection = () => {
  return (
    <div className="min-h-screen relative overflow-hidden h-screen">
      {/* Background Video with Overlay */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="./hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="text-center w-full max-w-4xl">
          {/* Main content */}
          <div className="text-white space-y-4 lg:space-y-4">
            {/* Main heading */}
            <h1 className="text-3xl sm:text-6xl lg:text-6xl xl:text-6xl font-bold leading-tight">
              Hii,I am Dr. Nalin K Pagi
              <br />
              <span className="text-green-400 typing-effect">
                Family Farmer
              </span>
            </h1>

            {/* Description */}
            <p className="text-md sm:text-lg text-gray-200 leading-relaxed mx-auto max-w-3xl">
              Seeking a challenging role as a Farming Consultant where my
              expertise can contribute to organizational growth and drive
              sustainable agricultural development for the betterment of
              society.
            </p>

            <a
              href={"/about"}
              className="bg-green-600 backdrop-blur-md hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg text-md transition"
            >
              About Me
            </a>
            <a
              href={"/contact"}
              className="bg-white/20 backdrop-blur-md mx-2 hover:bg-white/50 text-white font-semibold px-4 py-2 rounded-lg text-md transition-colors duration-200 shadow"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* CSS for typing effect */}
      <style jsx>{`
        .typing-effect {
          display: inline-block;
          overflow: hidden;
          border-right: 3px solid #60a5fa;
          white-space: nowrap;
          animation: typing 3s steps(39, end), blink-caret 1s step-end infinite;
          animation-iteration-count: infinite;
          animation-delay: 0s;
        }

        @keyframes typing {
          0% {
            width: 0;
          }
          50% {
            width: 13ch;
          }
          100% {
            width: 13ch;
          }
        }

        @keyframes blink-caret {
          0%,
          50% {
            border-color: #60a5fa;
          }
          51%,
          100% {
            border-color: transparent;
          }
        }

        .typing-effect {
          animation: typing 4s steps(39, end) infinite,
            blink-caret 1s step-end infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
