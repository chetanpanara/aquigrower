"use client"
import React, { useState, useEffect } from "react";
import {  Star, Quote } from "lucide-react";

function Testimonials() {
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
        "This agricultural solution has transformed our farming operations. We have seen a 40% increase in crop yield and significantly reduced our operational costs.",
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
        "As a consultant working with over 200 farms, I can confidently say this is the most comprehensive agricultural platform I have encountered.",
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
        "We have reduced water usage by 30% while maintaining excellent crop quality. This platform is essential for modern farming.",
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
        "The precision agriculture tools are incredibly accurate. We have optimized our fertilizer usage and seen remarkable improvements in soil health.",
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Testimonials Slider */}
        <section>
  

          <div className="text-center my-10">
            <h1 className="text-3xl md:text-3xl lg:text-4xl uppercase font-bold tracking-wide">
              <span className="from-gray-900 via-green-700 to-emerald-500 bg-clip-text text-transparent bg-gradient-to-r relative">
                Testimonials
              </span>
            </h1>
            <p className=" text-gray-600 mt-4">
              To showcase our completed and ongoing projects, demonstrating our
              capabilities and achievements
            </p>
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
                              className="bg-white rounded-xl shadow-sm p-4 relative"
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
                                {testimonial.content}
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
                      <div className="bg-white rounded-xl shadow-sm p-4 relative max-w-sm mx-auto">
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
                        <blockquote className="text-sm text-gray-700 mb-4 leading-relaxed italic text-center">
                          {testimonial.content}
                        </blockquote>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-3">
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
    </>
  );
}

export default Testimonials;
