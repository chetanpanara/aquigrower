"use client";

import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  // Array of video sources and content - replace with your actual video paths and content
  const slides = [
    {
      video: "./hero.mp4",
      title: "Sustainable Agriculture & Organic Farming",
      subtitle: "Family Farmer",
      description:
        "Cultivating essential food crops using purely organic farming methods to produce healthy, chemical-free food for local consumption, contributing to food security and public health.",
    },
    {
      video: "./hero2.mp4",
      title: " Hydroponics Systems",
      subtitle: "Eco-Friendly Solutions",
      description:
        "Utilizing hydroponic technology to cultivate a diverse range of herbs, including traditional Indian varieties, exotic culinary herbs, and valuable medicinal plants.",
    },
    {
      video: "./hero3.mp4",
      title: " Afforestation Initiatives",
      subtitle: "Pure & Natural",
      description:
        "  Actively engaging in afforestation and ecological restoration projects to enhance green cover and promote biodiversity through Miyawaki Forests and Social Forestry.",
    },
    {
      video: "./hero4.mp4",
      title: " Extension & Awareness Programs",
      subtitle: "Growing Together",
      description:
        "  Educating and empowering the community on sustainable agricultural practices and environmental conservation through hands-on training and demonstrations.",
    },
  ];

  // Auto-advance slider every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="min-h-screen relative overflow-hidden h-screen">
      {/* Video Slider */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <video
            key={index}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideo ? "opacity-100" : "opacity-0"
            }`}
            src={slide.video}
            autoPlay
            loop
            muted
            playsInline
          />
        ))}
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="text-center w-full max-w-4xl">
          {/* Dynamic content based on current slide */}
          <div className="text-white space-y-4 lg:space-y-4">
            {/* Main heading with animation */}
            <div className="transition-all duration-500 ease-in-out transform">
              <h1 className="text-3xl sm:text-6xl lg:text-6xl xl:text-6xl font-bold leading-tight">
                {slides[currentVideo].title}
                <br />
                {/* <span className="text-green-400 typing-effect">
                  {slides[currentVideo].subtitle}
                </span> */}
              </h1>
            </div>

            {/* Description with fade animation */}
            <div className="transition-all duration-500 ease-in-out">
              <p className="text-md sm:text-lg text-white leading-relaxed mx-auto max-w-3xl">
                {slides[currentVideo].description}
              </p>
            </div>
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
