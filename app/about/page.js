"use client";
import React from "react";
import Testimonials from "@/components/Testimonials";
import Aboutcomponent from "@/components/About";
import Teams from "@/components/Teams";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover brightness-50"
        >
          {/* Place about-bg.mp4 in /public directory and use this path */}
          <source src="./videos/about-bg.mp4" type="video/mp4" alt="no found" />
        </video>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold">
            About AquiGrower
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Be Advanced, Be Natural – Serving for a Sustainable Society
          </p>
        </div>
      </section>

      <Aboutcomponent />
      <Teams />
      <Testimonials />

      {/* Fade-in animation styles and extra styles for flip cards and modal */}
      <style jsx>{`
        .parallax-bg {
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
        }
        .flip-card {
          perspective: 1000px;
        }
        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-inner {
          transform: rotateY(180deg);
        }
        .flip-front,
        .flip-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }
        .flip-back {
          transform: rotateY(180deg);
        }
        .modal-bg {
          background-color: rgba(0, 0, 0, 0.6);
        }
        /* Extra hover effect for all images */
        img:hover {
          /* fallback for browsers without Tailwind JIT */
        }
      `}</style>
    </>
  );
}