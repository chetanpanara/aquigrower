"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Droplet, Sprout, Users, Zap, ShieldCheck, Sparkles, ArrowRight, Sun, Wind } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SustainableAgriculturePage = () => {
  // Add refs for animations
  const galleryRef = useRef(null);
  const galleryItemsRef = useRef([]);
  const galleryTitleRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Reset refs array
    galleryItemsRef.current = [];

    // Animation for the gallery section
    const galleryTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top 75%",
        end: "bottom bottom",
        toggleActions: "play none none none"
      }
    });

    // Animate the gallery heading
    galleryTimeline.from(galleryTitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    // Staggered animation for gallery items
    galleryTimeline.from(galleryItemsRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    }, "-=0.4");

    // Create hover animations for gallery items
    galleryItemsRef.current.forEach(item => {
      const image = item.querySelector('img');
      const overlay = item.querySelector('.overlay-content');
      const tag = item.querySelector('.tag');
      
      // Create a hover timeline for each item
      const hoverTimeline = gsap.timeline({ paused: true });
      
      hoverTimeline
        .to(image, { scale: 1.1, duration: 0.6, ease: "power2.out" })
        .to(overlay, { opacity: 1, duration: 0.4 }, 0)
        .from(overlay.querySelectorAll('h3, p, button'), { 
          y: 20, 
          opacity: 0, 
          stagger: 0.1, 
          duration: 0.4 
        }, 0.1)
        .to(tag, { 
          backgroundColor: "rgba(22, 163, 74, 0.9)", 
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", 
          scale: 1.05,
          duration: 0.3 
        }, 0);
      
      // Add event listeners
      item.addEventListener('mouseenter', () => hoverTimeline.play());
      item.addEventListener('mouseleave', () => hoverTimeline.reverse());
    });

    // Cleanup function
    return () => {
      if (ScrollTrigger.getAll().length > 0) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
      
      galleryItemsRef.current.forEach(item => {
        item.removeEventListener('mouseenter', () => {});
        item.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  // Function to add items to the refs array
  const addToGalleryRefs = (el) => {
    if (el && !galleryItemsRef.current.includes(el)) {
      galleryItemsRef.current.push(el);
    }
  };

  return (
    <div className="container mx-auto overflow-hidden bg-gradient-to-b from-white via-green-50/30 to-green-100/20">
      {/* Enhanced Background Elements with more dynamic visuals */}
      <div className="fixed -z-10 top-0 left-0 w-full h-screen overflow-hidden pointer-events-none">
        {/* Larger, more prominent background elements */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-green-500/10 to-emerald-400/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-green-300/15 to-blue-300/10 blur-3xl"></div>
        <div className="absolute top-2/3 left-1/2 w-[450px] h-[450px] rounded-full bg-gradient-to-r from-lime-400/15 to-yellow-300/10 blur-3xl animate-float"></div>
        
        {/* Added animated particles */}
        <div className="absolute inset-0 opacity-30">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>
        
        {/* Enhanced decorative pattern elements */}
        <div className="absolute top-20 right-20 w-36 h-36 opacity-15 animate-spin-very-slow">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10L90 90M10 90L90 10" stroke="currentColor" strokeWidth="2" className="text-green-800" />
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" className="text-green-800" />
          </svg>
        </div>
        <div className="absolute bottom-40 left-20 w-48 h-48 opacity-15 rotate-45 animate-float-slow">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="2" className="text-green-800" />
              <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" className="text-green-800" />
            </svg>
        </div>
        
        {/* Added 3D-like elements */}
        <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-xl bg-gradient-to-br from-green-500/5 to-green-600/10 backdrop-blur-md rotate-12 animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full border border-green-500/10 backdrop-blur-sm animate-spin-slow"></div>
      </div>
      
      {/* Enhanced Header Section with more drama */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
        <div className="text-center mb-20 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-r from-green-50 to-emerald-50/80 rounded-full blur-3xl opacity-70"></div>
          
          {/* Enhanced decorative element */}
          <div className="flex justify-center mb-5">
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-green-100/90 to-emerald-200/80 backdrop-blur-sm text-green-800 text-sm font-medium shadow-green-200/50 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2 text-amber-500" />
              <span>Organic & Sustainable</span>
            </div>
          </div>
          
          {/* More dramatic heading with stronger gradient */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-md bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-green-700 to-emerald-500 leading-tight">
            Sustainable Agriculture
          </h1>
          
          {/* More prominent divider */}
          <div className="w-32 h-2 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 rounded-full mx-auto my-8 shadow-sm"></div>
          
          <p className="text-lg md:text-2xl text-gray-600 mt-8 max-w-3xl mx-auto leading-relaxed font-light">
            Cultivating essential food crops using organic farming methods to produce healthy, 
            chemical-free food that contributes to food security and public health.
          </p>
        </div>
      </div>

      {/* Dramatically Enhanced Hero Section */}
      <div className="relative overflow-hidden rounded-3xl mx-4 sm:mx-8 mb-32 shadow-2xl border border-white/20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/sustainable-farming.png" 
            alt="Sustainable Agriculture"
            width={1920}
            height={800}
            className="w-full h-full object-cover"
            unoptimized
          />
          {/* More vibrant overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-green-700/85 to-emerald-600/75"></div>
          
          {/* Enhanced decorative patterns */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <div className="h-full w-full" style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, white 1px, transparent 1px),
                radial-gradient(circle at 80% 70%, white 0.5px, transparent 0.5px),
                radial-gradient(circle at 50% 50%, white 0.8px, transparent 0.8px)
              `, 
              backgroundSize: '40px 40px, 30px 30px, 50px 50px'
            }}></div>
          </div>
        </div>
        
        <div className="relative z-10 py-28 px-6 sm:px-12 lg:px-16 max-w-5xl">
          {/* Enhanced label */}
          <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-green-300/30 to-emerald-400/20 backdrop-blur-md text-white text-sm font-medium rounded-full mb-10 shadow-lg shadow-green-900/20 border border-white/10">
            <Leaf className="w-4 h-4 mr-2 text-green-200" />
            <span>Nature-based solutions</span>
          </div>
          
          {/* More dramatic heading with highlighted text */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-10 drop-shadow-lg leading-tight">
            Returning to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-emerald-300 drop-shadow-none">Nature's Wisdom</span>
          </h2>
          
          <p className="text-white/90 text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl font-light drop-shadow-md">
            At AquiGrower, we believe that sustainable agriculture is the foundation of a healthy society. 
            Our organic farming initiatives focus on producing essential foods that nourish both people and planet,
            without harmful chemicals or unsustainable practices.
          </p>
          
          {/* Enhanced buttons with more drama */}
          <div className="flex flex-wrap gap-6">
            <Link href="/contact" className="group bg-gradient-to-r from-white to-green-50 text-green-700 hover:from-green-50 hover:to-white px-8 py-4 rounded-full font-medium transition duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 flex items-center">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/services" className="relative text-white border border-white/70 hover:border-white px-8 py-4 rounded-full font-medium transition duration-300 overflow-hidden group backdrop-blur-sm hover:bg-white/10 shadow-lg shadow-green-900/10">
              <span className="relative z-10">Explore All Services</span>
              <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 bg-white/10 transition-transform duration-300"></div>
            </Link>
          </div>
          
          {/* Added floating icons for visual interest */}
          <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 animate-float-slow">
            <Sun className="w-8 h-8 text-yellow-200/70" />
          </div>
          <div className="absolute bottom-10 left-16 w-14 h-14 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 animate-float">
            <Wind className="w-7 h-7 text-blue-200/70" />
          </div>
        </div>
      </div>

      {/* Enhanced Introduction with visual elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-gradient-to-br from-green-50 to-green-100/70 rounded-3xl p-8 sm:p-14 shadow-xl border border-green-100/80 relative overflow-hidden backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-48 h-48 bg-green-200/30 rounded-full blur-3xl -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-300/20 rounded-full blur-3xl -ml-10 -mb-10"></div>
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-30 mix-blend-soft-light pointer-events-none">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="leaf-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M20 1C13 1 1 13 1 20C1 27 13 39 20 39C27 39 39 27 39 20C39 13 27 1 20 1Z" fill="none" stroke="currentColor" className="text-green-600" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#leaf-pattern)" />
            </svg>
          </div>
          
          <div className="flex items-center justify-center mb-10">
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg p-2">
              <div className="w-full h-full rounded-full bg-white/20 flex items-center justify-center p-2">
                <Leaf className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-6">Our Sustainable Approach</h2>
          <p className="text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            We combine traditional farming wisdom with modern sustainable practices to grow food that's 
            healthy for people and the planet. Our methods focus on building soil health, conserving water,
            and supporting biodiversity.
          </p>
        </div>
      </div>

      {/* Enhanced Service Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">How We Make a Difference</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our comprehensive approach to sustainable agriculture addresses every aspect of food production</p>
          <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto mt-6"></div>
        </div>
      
        <div className="grid md:grid-cols-3 gap-8">
          {/* Focus Section - Enhanced */}
          <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-3xl opacity-70 -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-green-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:rotate-3 transition-transform duration-300">
                <Sprout className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-green-800 mb-4">Our Focus</h3>
              
              <p className="mb-6 text-gray-700">
                We cultivate essential food crops using purely organic farming methods, emphasizing:
              </p>
              <ul className="space-y-4 mb-6">
                { [
                  "Staple grains (rice, wheat, maize)",
                  "Protein-rich legumes (beans, lentils)",
                  "Nutrient-dense vegetables (leafy greens, root crops)",
                  "Local fruit varieties adapted to our climate"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center rounded-full bg-green-100 h-7 w-7 mr-3 flex-shrink-0 mt-0.5">
                      <ShieldCheck className="h-4 w-4 text-green-600" />
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                )) }
              </ul>
              <p className="text-gray-700">
                Our production emphasizes chemical-free cultivation, contributing directly to food security and public health in our community.
              </p>
            </div>
          </div>

          {/* Approach Section - Enhanced */}
          <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-3xl opacity-70 -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-green-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:rotate-3 transition-transform duration-300">
                <Droplet className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-green-800 mb-4">Our Approach</h3>
              
              <p className="mb-6 text-gray-700">
                We implement both traditional wisdom and innovative techniques for sustainable farming:
              </p>
              <ul className="space-y-4 mb-6">
                { [
                  "Natural soil enrichment through composting and crop rotation",
                  "Biological pest control using beneficial insects",
                  "Water conservation through drip irrigation and rainwater harvesting",
                  "Permaculture design principles for ecosystem resilience",
                  "Seed saving to preserve local biodiversity"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center rounded-full bg-green-100 h-7 w-7 mr-3 flex-shrink-0 mt-0.5">
                      <ShieldCheck className="h-4 w-4 text-green-600" />
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                )) }
              </ul>
            </div>
          </div>

          {/* Goal Section - Enhanced */}
          <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-3xl opacity-70 -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-green-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:rotate-3 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-green-800 mb-4">Our Goal</h3>
              
              <p className="mb-6 text-gray-700">
                We aim to establish a reliable source of organically grown staple foods by:
              </p>
              <ul className="space-y-4 mb-6">
                { [
                  "Making healthy food options accessible to all community members",
                  "Promoting sustainable food systems within our region",
                  "Training new farmers in organic methods",
                  "Creating a local food network that reduces transportation emissions",
                  "Building community resilience through food sovereignty"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center rounded-full bg-green-100 h-7 w-7 mr-3 flex-shrink-0 mt-0.5">
                      <ShieldCheck className="h-4 w-4 text-green-600" />
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                )) }
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Benefits Section */}
      <div className="bg-gradient-to-b from-gray-50 to-green-100/30 py-24 mb-24 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-100/50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-100/50 rounded-full blur-3xl"></div>
        
        {/* Added decorative patterns */}
        <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-soft-light">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,128,0,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,128,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-4">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-green-800 mb-4">Benefits of Our Organic Farming</h2>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">Sustainable practices that nurture both the earth and its inhabitants</p>
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            { [
              {
                icon: <Leaf className="h-10 w-10 text-white" />,
                title: "Healthier Food",
                description: "No chemicals means more nutritious produce for your family"
              },
              {
                icon: <Droplet className="h-10 w-10 text-white" />,
                title: "Environmental Protection",
                description: "Our methods preserve soil health and protect local water sources"
              },
              {
                icon: <Users className="h-10 w-10 text-white" />,
                title: "Community Support",
                description: "We create local jobs and strengthen food security"
              },
              {
                icon: <Sprout className="h-10 w-10 text-white" />,
                title: "Sustainable Future",
                description: "Building agricultural systems that can thrive for generations"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100/50 group">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-green-800">{benefit.title}</h3>
                <p className="text-center text-gray-600 text-lg">{benefit.description}</p>
              </div>
            )) }
          </div>
        </div>
      </div>

      {/* Enhanced Image Gallery Section with GSAP Animations */}
      <div ref={galleryRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div ref={galleryTitleRef} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-4">Photo Gallery</span>
          <h2 className="text-4xl font-bold text-center text-green-800 mb-4">Our Farming Practices</h2>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">See how we implement sustainable agriculture techniques in our daily operations</p>
          <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          { [
            { 
              src: "/img/farming-1.png", 
              span: "col-span-12 md:col-span-6 h-80",
              title: "Organic Crop Cultivation",
              description: "Our family has practiced chemical-free farming for over three generations. We use heirloom seeds and traditional techniques passed down through generations, focusing on crop diversity and soil health.",
              tag: "Family Heritage"
            },
            { 
              src: "/img/farming-1.png", 
              span: "col-span-6 md:col-span-3 h-64",
              title: "Natural Pest Management",
              description: "We employ companion planting and beneficial insects rather than harmful pesticides. Our integrated pest management approach maintains ecological balance.",
              tag: "Eco-Friendly"
            },
            { 
              src: "/img/farming-1.png", 
              span: "col-span-6 md:col-span-3 h-64",
              title: "Water Conservation",
              description: "Our drip irrigation systems and rainwater harvesting reduce water usage by 60% compared to conventional farming, preserving this precious resource.",
              tag: "Resource Efficient"
            },
            { 
              src: "/img/farming-1.png", 
              span: "col-span-6 md:col-span-4 h-72",
              title: "Soil Regeneration",
              description: "Through composting, cover cropping, and minimal tillage, we build rich, living soil that sequesters carbon and produces nutrient-dense food.",
              tag: "Carbon Capture"
            },
            { 
              src: "/img/farming-1.png", 
              span: "col-span-6 md:col-span-8 h-72",
              title: "Community Farming Education",
              description: "We regularly host workshops where families learn sustainable growing techniques. Our farm serves as a living classroom for the next generation of sustainable farmers.",
              tag: "Knowledge Sharing"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              ref={addToGalleryRefs}
              className={`${item.span} rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 relative group`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover"
                unoptimized
              />
              
              {/* Decorative tag in corner */}
              <div className="tag absolute top-4 left-4 px-3 py-1 bg-green-600/90 text-white text-xs font-medium rounded-lg shadow-lg z-10">
                {item.tag}
              </div>
              
              {/* Enhanced details overlay with animation classes */}
              <div className="overlay-content absolute inset-0 opacity-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-sm">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/90 text-sm md:text-base mb-4">{item.description}</p>
                <button className="self-start bg-white/90 text-green-700 px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center">
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          )) }
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
          
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10 mix-blend-overlay">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M0 25C20 25 20 75 40 75C60 75 60 25 80 25C100 25 100 75 120 75" stroke="white" strokeWidth="2" fill="none" />
                </pattern>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#wave-pattern)" />
            </svg>
          </div>
          
          <div className="px-8 py-16 md:py-20 md:px-16 text-center text-white relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Join Our Sustainable Agriculture Movement</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Whether you're looking to source organic produce, learn farming techniques, or partner with us,
              we welcome your interest in building a more sustainable food system.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact" className="group bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 flex items-center">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/services" className="relative bg-transparent text-white border border-white/60 hover:border-white hover:bg-white/10 px-8 py-4 rounded-full font-medium transition-all duration-300 overflow-hidden group">
                <span className="relative z-10">Explore Other Services</span>
                <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 bg-white/10 transition-transform duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.08); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes spin-very-slow {
          0% { transform: rotate(0); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        
        .animate-spin-very-slow {
          animation: spin-very-slow 45s linear infinite;
        }
        
        /* Particle animations */
        .particle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(144, 238, 144, 0.8) 0%, rgba(144, 238, 144, 0) 70%);
        }
        
        .particle-1 {
          width: 100px;
          height: 100px;
          top: 10%;
          left: 15%;
          animation: float 20s infinite ease-in-out;
        }
        
        .particle-2 {
          width: 150px;
          height: 150px;
          top: 60%;
          left: 80%;
          animation: float 25s infinite ease-in-out;
          animation-delay: -5s;
        }
        
        .particle-3 {
          width: 80px;
          height: 80px;
          top: 80%;
          left: 10%;
          animation: float 18s infinite ease-in-out;
          animation-delay: -2s;
        }
        
        .particle-4 {
          width: 120px;
          height: 120px;
          top: 30%;
          left: 60%;
          animation: float 22s infinite ease-in-out;
          animation-delay: -7s;
        }
        
        .particle-5 {
          width: 90px;
          height: 90px;
          top: 70%;
          left: 40%;
          animation: float 20s infinite ease-in-out;
          animation-delay: -10s;
        }
        
        /* Enhanced animation keyframes for gallery interactions */
        @keyframes floating {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        
        .gallery-item-float {
          animation: floating 5s ease-in-out infinite;
        }
        
        /* Ensure GSAP animations work smoothly with Tailwind transitions */
        .overlay-content, .tag {
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
};

export default SustainableAgriculturePage;