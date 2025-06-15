"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function About() {
  // Fade-in animation on scroll
  useEffect(() => {
    const fadeEls = document.querySelectorAll(".fade-in-up");
    const onScroll = () => {
      fadeEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          el.classList.add("opacity-100", "translate-y-0");
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Modal state for team bios
  const [modal, setModal] = useState({ open: false, member: null });
  const teamData = {
    jay: {
      title: "Mr. Jay Patel",
      role: "Founder & CEO",
      bio: "Visionary behind Aqui Grower LLP. With a deep understanding of organic farming, Jay aims to revolutionize the agriculture sector through sustainability and innovation.",
      img: "/img/founder1.jpg",
    },
    rina: {
      title: "Ms. Rina Shah",
      role: "Co-Founder",
      bio: "Rina specializes in hydroponics and agro-tech. Her efforts have helped Aqui Grower reach urban sectors with innovative farming methods.",
      img: "/img/founder2.jpg",
    },
    karan: {
      title: "Mr. Karan Desai",
      role: "Managing Director",
      bio: "Karan leads execution of projects, ensures quality, and connects with local farming communities to deliver results aligned with our core values.",
      img: "/img/founder3.jpg",
    },
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          {/* Make sure this video exists in your public/videos directory */}
          <source src="/videos/about-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold fade-in-up">
            Welcome to Aqui Grower LLP
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl fade-in-up">
            Be Advanced, Be Natural – Serving for a Sustainable Society
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-green-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-green-800 mb-6 fade-in-up">
            Our Mission
          </h2>
          <p className="max-w-3xl mx-auto text-lg fade-in-up">
            To empower communities through sustainable and innovative agricultural
            practices, making organic and hydroponic farming accessible and
            impactful.
          </p>
          <h2 className="text-4xl font-bold text-green-800 mt-12 mb-6 fade-in-up">
            Our Vision
          </h2>
          <p className="max-w-3xl mx-auto text-lg fade-in-up">
            To be a leading force in transforming agriculture into an
            eco-conscious, technology-driven industry that supports biodiversity
            and food security globally.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src="/img/organic-farm.jpg"
            alt="Organic Farm"
            className="rounded-xl shadow-lg fade-in-up opacity-0 translate-y-5  duration-700 hover:scale-105 hover:shadow-2xl hover:brightness-110 transition-transform "
            // Added hover effects
          />
          <div className="space-y-6 fade-in-up opacity-0 translate-y-5 transition-all duration-700">
            <h2 className="text-4xl font-bold text-green-700">
              About Aqui Grower LLP
            </h2>
            <p>
              Based in Ahmedabad, Aqui Grower LLP was founded in January 2021
              with a mission to make sustainable and organic agriculture
              accessible to everyone. We are dedicated to serving humanity's basic
              needs through organic farming, hydroponics, and environmental
              activities.
            </p>
            <p>
              From Miyawaki Forests to hydroponic solutions and citizen awareness
              programs, our work spans food security, biodiversity, and education.
            </p>
            <p>
              <strong>GSTIN:</strong> 24ABTFA9566B1Z6
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {["jay", "rina", "karan"].map((key) => (
            <div
              key={key}
              className="bg-white shadow-xl rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition"
              onClick={() => setModal({ open: true, member: key })}
            >
              <img
                src={teamData[key].img}
                className="w-full h-72 object-cover transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110"
                alt={teamData[key].title}
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">{teamData[key].title}</h3>
                <p className="text-green-600">{teamData[key].role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Parallax Banner - Fix the path by removing 'public/' */}
      <section
        className="h-96 parallax-bg"
        style={{
          backgroundImage: "url('/img/farm-parallax.jpg')",
        }}
      >
        <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-4xl text-white font-bold fade-in-up">
            Rooted in Nature, Powered by Innovation
          </h2>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-10 fade-in-up opacity-0 translate-y-5 transition-all duration-700">
          Key Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 fade-in-up opacity-0 translate-y-5 transition-all duration-700">
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img
              src="/img/project1.jpg"
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110"
              alt="Project 1"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl">Reliance LTD</h3>
              <p>Indoor & Outdoor Hydroponics Demonstration Unit</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img
              src="/img/project2.jpg"
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110"
              alt="Project 2"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl">NDDB</h3>
              <p>Moringa Plantation, Drying Unit, and Food Forest</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img
              src="/img/project3.jpg"
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110"
              alt="Project 3"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl">
                
                RUBAMIN PVT LTD, HALOL
              </h3>
              <p>Green Building with herbal plants and climbers and Terrace Fruit Orchards Farming</p>
            </div>
          </div>
        </div>
      </section>

      {/* Farming Gallery Flip Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-green-700 mb-10">
            Our Farming Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="flip-card bg-transparent w-full h-64 mx-auto hover:shadow-2xl transition-shadow">
              <div className="flip-inner w-full h-full">
                <div className="flip-front bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    src="/img/fgallery1.jpg"
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110"
                    alt="Gallery Image 1"
                  />
                </div>
                <div className="flip-back bg-green-100 p-6 rounded-lg flex flex-col justify-center items-center h-full">
                  <h3 className="text-xl font-semibold text-green-700">
                    Organic Spinach Beds
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Our certified organic produce nurtured without chemicals.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flip-card bg-transparent w-full h-64 mx-auto hover:shadow-2xl transition-shadow">
              <div className="flip-inner w-full h-full">
                <div className="flip-front bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    src="/img/fgallery2.jpg"
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110"
                    alt="Gallery Image 2"
                  />
                </div>
                <div className="flip-back bg-green-100 p-6 rounded-lg flex flex-col justify-center items-center h-full">
                  <h3 className="text-xl font-semibold text-green-700">
                    Hydroponic System
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Efficient water-based farming system used across our units.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flip-card bg-transparent w-full h-64 mx-auto hover:shadow-2xl transition-shadow">
              <div className="flip-inner w-full h-full">
                <div className="flip-front bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    src="/img/fgallery3.jpg"
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110"
                    alt="Gallery Image 3"
                  />
                </div>
                <div className="flip-back bg-green-100 p-6 rounded-lg flex flex-col justify-center items-center h-full">
                  <h3 className="text-xl font-semibold text-green-700">
                    Field Team at Work
                  </h3>
                  <p className="text-gray-700 mt-2">
                    The real heroes making each harvest successful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-green-600 mb-8">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img
              src="/img/gallery1.jpg"
              className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110"
              alt="Gallery 1"
            />
            <img
              src="/img/gallery2.jpg"
              className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110"
              alt="Gallery 2"
            />
            <img
              src="/img/gallery3.jpg"
              className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110"
              alt="Gallery 3"
            />
            <img
              src="/img/gallery4.jpg"
              className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110"
              alt="Gallery 4"
            />
            <img
              src="/img/gallery5.jpg"
              className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110"
              alt="Gallery 5"
            />
            <img
              src="/img/gallery6.jpg"
              className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110"
              alt="Gallery 6"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-green-700 mb-10">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow">
              <p>
                “Amazing experience collaborating with Aqui Grower LLP! They
                transformed our land into a thriving ecosystem.”
              </p>
              <p className="mt-2 font-semibold">— Client A</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p>
                “Their knowledge of organic and hydroponic systems is outstanding.
                Highly recommend!”
              </p>
              <p className="mt-2 font-semibold">— Client B</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p>
                “Passionate, committed, and result-oriented team. Thank you Aqui
                Grower!”
              </p>
              <p className="mt-2 font-semibold">— Client C</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Popups for Team */}
      {modal.open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="modal-bg absolute inset-0"
            onClick={() => setModal({ open: false, member: null })}
          ></div>
          <div className="bg-white w-11/12 md:w-1/2 lg:w-1/3 rounded-xl shadow-lg z-10 p-6 text-center">
            <img
              src={teamData[modal.member].img}
              alt={teamData[modal.member].title}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 transition-transform duration-300 hover:scale-110 hover:ring-4 hover:ring-green-300"
            />
            <h3 className="text-2xl font-bold text-green-700 mb-2">
              {teamData[modal.member].title}
            </h3>
            <p className="text-green-600 mb-4">
              {teamData[modal.member].role}
            </p>
            <p className="text-gray-700">{teamData[modal.member].bio}</p>
            <button
              onClick={() => setModal({ open: false, member: null })}
              className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Contact Call to Action */}
      <section className="bg-green-600 text-white py-12 text-center fade-in-up opacity-0 translate-y-5 transition-all duration-700">
        <h2 className="text-3xl font-bold">
          Join Us In Building a Greener Tomorrow
        </h2>
        <p className="mt-2">
          Partner with us or learn more about our mission and services.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block bg-white text-green-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all"
        >
          Contact Us
        </Link>
      </section>

      {/* Fade-in animation styles and extra styles for flip cards and modal */}
      <style jsx>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(20px);
        }
        .fade-in-up.opacity-100 {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
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
    </div>
  );
}