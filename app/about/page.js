"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  Leaf,
  Target,
  Eye,
  Award,
  Users,
  Globe,
  Star,
  Quote,
} from "lucide-react";


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


    // Testimonials slider state
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
      {
        id: 1,
        name: "Sarah Johnson",
        role: "Organic Farm Owner",
        company: "Green Valley Farms",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        content:
          "This agricultural solution has transformed our farming operations. We've seen a 40% increase in crop yield and significantly reduced our operational costs.",
        rating: 5,
      },
      {
        id: 2,
        name: "Michael Chen",
        role: "Agricultural Consultant",
        company: "AgroTech Solutions",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        content:
          "As a consultant working with over 200 farms, I can confidently say this is the most comprehensive agricultural platform I've encountered.",
        rating: 5,
      },
      {
        id: 3,
        name: "Emily Rodriguez",
        role: "Sustainable Agriculture Specialist",
        company: "EcoGrow Cooperative",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        content:
          "We've reduced water usage by 30% while maintaining excellent crop quality. This platform is essential for modern farming.",
        rating: 5,
      },
      {
        id: 4,
        name: "David Thompson",
        role: "Large Scale Producer",
        company: "Prairie Gold Agriculture",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        content:
          "Managing 5,000 acres became so much easier with this system. The automation features have saved us countless hours.",
        rating: 5,
      },
      {
        id: 5,
        name: "Lisa Parker",
        role: "Precision Agriculture Expert",
        company: "Smart Farm Technologies",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        content:
          "The precision agriculture tools are incredibly accurate. We've optimized our fertilizer usage and seen remarkable improvements in soil health.",
        rating: 5,
      },
      {
        id: 6,
        name: "Robert Martinez",
        role: "Dairy Farm Manager",
        company: "Sunrise Dairy Co.",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        content:
          "Our dairy operation has never been more efficient. The livestock monitoring features have improved our herd health significantly.",
        rating: 5,
      },
    ];

    // Calculate total slides (2 testimonials per slide on desktop, 1 on mobile)
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      checkMobile();
      window.addEventListener("resize", checkMobile);

      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const totalSlides = isMobile
      ? testimonials.length
      : Math.ceil(testimonials.length / 2);

    // Auto-slide every 6 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }, [totalSlides]);

    const goToSlide = (index) => {
      setCurrentIndex(index);
    };

    const renderStars = (rating) => {
      return Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ));
    };

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
          <h1 className="text-5xl md:text-6xl font-bold fade-in-up">
            Welcome to Aqui Grower LLP
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl fade-in-up">
            Be Advanced, Be Natural – Serving for a Sustainable Society
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        {/* About Content */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src="./img/organic-farm.jpg"
              alt="Organic Farm"
              className="rounded-xl shadow-lg fade-in-up opacity-0 translate-y-5  duration-700 hover:scale-105 hover:shadow-2xl hover:brightness-110 transition-transform "
              // Added hover effects
            />
            <div className="space-y-6 fade-in-up opacity-0 translate-y-5 transition-all duration-700">
              <div className="text-start mb-12">
                <h1 className="text-3xl md:text-3xl lg:text-4xl uppercase font-bold tracking-wide">
                  <span className="text-gray-800">About </span>
                  <span className="text-green-500 relative">
                    aqui grower llp
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 rounded-full transform translate-y-2"></div>
                  </span>
                </h1>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Based in Ahmedabad, Aqui Grower LLP was founded in January 2021
                with a mission to make sustainable and organic agriculture
                accessible to everyone. We are dedicated to serving humanity's
                basic needs through organic farming, hydroponics, and
                environmental activities.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                From Miyawaki Forests to hydroponic solutions and citizen
                awareness programs, our work spans food security, biodiversity,
                and education.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>GSTIN:</strong> 24ABTFA9566B1Z6
              </p>
            </div>
          </div>
        </section>

        {/* Out story */}
        <section>
          <div className="grid lg:grid-cols-2 gap-12 items-center my-14">
            <div>
              <div className="text-start mb-10">
                <h1 className="text-3xl md:text-3xl lg:text-4xl uppercase font-bold tracking-wide">
                  <span className="text-gray-800">our </span>
                  <span className="text-green-500 relative">
                    stroy
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 rounded-full transform translate-y-2"></div>
                  </span>
                </h1>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Founded by a team of agricultural scientists and technology
                experts, AgriTech Solutions emerged from a shared vision to
                bridge the gap between traditional farming wisdom and modern
                innovation.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Starting with a small pilot project in rural communities, we've
                grown to serve thousands of farmers across multiple regions,
                providing them with tools and knowledge to thrive in today's
                challenging agricultural landscape.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">5000+</div>
                  <div className="text-gray-600">Farmers Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">50+</div>
                  <div className="text-gray-600">Regions Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">50+</div>
                  <div className="text-gray-600">Regions Covered</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Award className="h-12 w-12 mx-auto mb-3" />
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-green-100">Yield Improvement</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-12 w-12 mx-auto mb-3" />
                    <div className="text-2xl font-bold">30%</div>
                    <div className="text-green-100">Cost Reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section>
          <div className="grid lg:grid-cols-2 gap-6 mt-12">
            {/* Mission */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                To transform traditional farming practices through cutting-edge
                technology, providing farmers with intelligent solutions that
                increase productivity, reduce environmental impact, and ensure
                sustainable food production for future generations.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Eye className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                To be the global leader in agricultural innovation, creating a
                world where smart farming technologies ensure food security,
                environmental sustainability, and prosperity for farming
                communities worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="text-center my-12">
            <h1 className="text-3xl md:text-3xl lg:text-4xl uppercase font-bold tracking-wide">
              <span className="text-gray-800"> Meet Our </span>
              <span className="text-green-500 relative">
                Team
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 rounded-full transform translate-y-2"></div>
              </span>
            </h1>
            <p className="text-md text-gray-600 mt-6">
              Have a question or want to work together? We are here to help and
              would love to hear from you.
            </p>
          </div>

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
                  <h3 className="text-xl font-semibold">
                    {teamData[key].title}
                  </h3>
                  <p className="text-green-600">{teamData[key].role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Showcase */}
        <section>
          <div className="text-center my-12">
            <h1 className="text-3xl md:text-3xl lg:text-4xl uppercase font-bold tracking-wide">
              <span className="text-gray-800">Key </span>
              <span className="text-green-500 relative">
                Projects
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 rounded-full transform translate-y-2"></div>
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-up opacity-0 translate-y-5 transition-all duration-700">
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
                <p>
                  Green Building with herbal plants and climbers and Terrace
                  Fruit Orchards Farming
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Farming Gallery Flip Cards */}
        <section>
          <div className="text-center my-12">
            <h1 className="text-3xl md:text-3xl lg:text-4xl uppercase font-bold tracking-wide">
              <span className="text-gray-800"> Our Farming </span>
              <span className="text-green-500 relative">
                Gallery
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 rounded-full transform translate-y-2"></div>
              </span>
            </h1>
          </div>

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
        </section>

        {/* Gallery Section */}
        <section>
          <div className="text-center my-12">
            <h1 className="text-3xl md:text-3xl lg:text-4xl uppercase font-bold tracking-wide">
              <span className="text-gray-800">Photos </span>
              <span className="text-green-500 relative">
                Gallery
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 rounded-full transform translate-y-2"></div>
              </span>
            </h1>
          </div>

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
        </section>

        {/* Testimonials Slider */}
        <section>
          <div className="text-center my-12">
            <h1 className="text-3xl md:text-3xl lg:text-4xl uppercase font-bold tracking-wide">
              <span className="text-gray-800"></span>
              <span className="text-green-500 relative">
                Testimonials
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 rounded-full transform translate-y-2"></div>
              </span>
            </h1>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              {/* Desktop View - 2 testimonials per slide */}
              <div className="hidden md:block">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {Array.from({ length: totalSlides }, (_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-2 gap-4 p-4">
                        {testimonials
                          .slice(slideIndex * 2, slideIndex * 2 + 2)
                          .map((testimonial) => (
                            <div
                              key={testimonial.id}
                              className="bg-white rounded-xl shadow-lg p-4 relative"
                            >
                              {/* Quote Icon */}
                              <div className="absolute top-3 left-3 text-green-200">
                                <Quote className="w-5 h-5" />
                              </div>

                              {/* Author Section */}
                              <div className="flex flex-col items-center">
                                {/* Profile Image */}
                                <img
                                  src={testimonial.image}
                                  alt={testimonial.name}
                                  className="w-12 h-12 rounded-full object-cover border-2 border-green-100 mb-2"
                                />

                                {/* Author Info */}
                                <div className="text-center">
                                  <h4 className="text-sm font-bold text-gray-900 mb-1">
                                    {testimonial.name}
                                  </h4>
                                  <p className="text-green-600 font-semibold text-xs mb-1">
                                    {testimonial.role}
                                  </p>
                                  <p className="text-gray-500 text-xs">
                                    {testimonial.company}
                                  </p>
                                </div>
                              </div>

                              {/* Rating */}
                              <div className="flex justify-center mb-3 pt-3">
                                {renderStars(testimonial.rating)}
                              </div>

                              {/* Testimonial Text */}
                              <blockquote className="text-sm text-gray-700 mb-4 leading-relaxed italic text-center line-clamp-3">
                                "{testimonial.content}"
                              </blockquote>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile View - 1 testimonial per slide */}
              <div className="block md:hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={`mobile-${testimonial.id}`}
                      className="w-full flex-shrink-0"
                    >
                      <div className="bg-white rounded-xl shadow-lg p-4 relative max-w-sm mx-auto">
                        {/* Quote Icon */}
                        <div className="absolute top-3 left-3 text-green-200">
                          <Quote className="w-5 h-5" />
                        </div>

                        {/* Rating */}
                        <div className="flex justify-center mb-3 pt-3">
                          {renderStars(testimonial.rating)}
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-sm text-gray-700 mb-4 leading-relaxed italic text-center">
                          "{testimonial.content}"
                        </blockquote>

                        {/* Author Section */}
                        <div className="flex flex-col items-center">
                          {/* Profile Image */}
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-green-100 mb-2"
                          />

                          {/* Author Info */}
                          <div className="text-center">
                            <h4 className="text-sm font-bold text-gray-900 mb-1">
                              {testimonial.name}
                            </h4>
                            <p className="text-green-600 font-semibold text-xs mb-1">
                              {testimonial.role}
                            </p>
                            <p className="text-gray-500 text-xs">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-green-600 scale-125"
                    : "bg-gray-300 hover:bg-green-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>
      </div>

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
            <p className="text-green-600 mb-4">{teamData[modal.member].role}</p>
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
    </>
  );
}