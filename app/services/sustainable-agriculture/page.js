import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Droplet, Sprout, Users, Zap, ShieldCheck } from 'lucide-react';

const SustainableAgriculturePage = () => {
  return (
    <div className="container mx-auto">
      {/* Header Section with consistent styling to other pages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-3xl lg:text-4xl uppercase font-bold tracking-wide">
            <span className="text-gray-800">Sustainable </span>
            <span className="text-green-500 relative">
              Agriculture
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 rounded-full transform translate-y-2"></div>
            </span>
          </h1>
          <p className="text-md text-gray-600 mt-6">
            Cultivating essential food crops using organic farming methods to produce healthy, 
            chemical-free food that contributes to food security and public health.
          </p>
        </div>
      </div>

      {/* Hero Section - Enhanced with better background and positioning */}
      <div className="relative overflow-hidden rounded-xl mx-4 sm:mx-8 mb-16">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/sustainable-farming.png" 
            alt="Sustainable Agriculture"
            width={1920}
            height={800}
            className="w-full h-full object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/50"></div>
        </div>
        
        <div className="relative z-10 py-20 px-6 sm:px-12 lg:px-16 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Returning to Nature's Wisdom
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            At AquiGrower, we believe that sustainable agriculture is the foundation of a healthy society. 
            Our organic farming initiatives focus on producing essential foods that nourish both people and planet,
            without harmful chemicals or unsustainable practices.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-white text-green-700 hover:bg-green-50 px-6 py-3 rounded-full font-medium transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Started
            </Link>
            <Link href="/services" className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-full font-medium transition duration-300">
              Explore All Services
            </Link>
          </div>
        </div>
      </div>

      {/* Introduction with visual elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-green-50 rounded-2xl p-8 sm:p-12 shadow-sm">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-center text-green-800 mb-6">Our Sustainable Approach</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            We combine traditional farming wisdom with modern sustainable practices to grow food that's 
            healthy for people and the planet. Our methods focus on building soil health, conserving water,
            and supporting biodiversity.
          </p>
        </div>
      </div>

      {/* Service Sections - Redesigned with better visual hierarchy and spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Focus Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-600 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <Sprout className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-700">Our Focus</h3>
            </div>
            
            <p className="mb-4 text-gray-700">
              We cultivate essential food crops using purely organic farming methods, emphasizing:
            </p>
            <ul className="space-y-3 mb-4">
              { [
                "Staple grains (rice, wheat, maize)",
                "Protein-rich legumes (beans, lentils)",
                "Nutrient-dense vegetables (leafy greens, root crops)",
                "Local fruit varieties adapted to our climate"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center rounded-full bg-green-100 h-6 w-6 mr-3 flex-shrink-0 mt-0.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-green-600" />
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              )) }
            </ul>
            <p className="text-gray-700">
              Our production emphasizes chemical-free cultivation, contributing directly to food security and public health in our community.
            </p>
          </div>

          {/* Approach Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-600 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <Droplet className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-700">Our Approach</h3>
            </div>
            
            <p className="mb-4 text-gray-700">
              We implement both traditional wisdom and innovative techniques for sustainable farming:
            </p>
            <ul className="space-y-3 mb-4">
              { [
                "Natural soil enrichment through composting and crop rotation",
                "Biological pest control using beneficial insects",
                "Water conservation through drip irrigation and rainwater harvesting",
                "Permaculture design principles for ecosystem resilience",
                "Seed saving to preserve local biodiversity"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center rounded-full bg-green-100 h-6 w-6 mr-3 flex-shrink-0 mt-0.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-green-600" />
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              )) }
            </ul>
          </div>

          {/* Goal Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-600 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-700">Our Goal</h3>
            </div>
            
            <p className="mb-4 text-gray-700">
              We aim to establish a reliable source of organically grown staple foods by:
            </p>
            <ul className="space-y-3 mb-4">
              { [
                "Making healthy food options accessible to all community members",
                "Promoting sustainable food systems within our region",
                "Training new farmers in organic methods",
                "Creating a local food network that reduces transportation emissions",
                "Building community resilience through food sovereignty"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center rounded-full bg-green-100 h-6 w-6 mr-3 flex-shrink-0 mt-0.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-green-600" />
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              )) }
            </ul>
          </div>
        </div>
      </div>

      {/* Benefits Section - Enhanced with more visual appeal */}
      <div className="bg-gray-50 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Benefits of Our Organic Farming</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            { [
              {
                icon: <Leaf className="h-8 w-8 text-green-600" />,
                title: "Healthier Food",
                description: "No chemicals means more nutritious produce for your family"
              },
              {
                icon: <Droplet className="h-8 w-8 text-green-600" />,
                title: "Environmental Protection",
                description: "Our methods preserve soil health and protect local water sources"
              },
              {
                icon: <Users className="h-8 w-8 text-green-600" />,
                title: "Community Support",
                description: "We create local jobs and strengthen food security"
              },
              {
                icon: <Sprout className="h-8 w-8 text-green-600" />,
                title: "Sustainable Future",
                description: "Building agricultural systems that can thrive for generations"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-center text-gray-600">{benefit.description}</p>
              </div>
            )) }
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Our Farming Practices</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          { [
            "/img/farming-1.png",
            "/img/farming-2.jpg", 
            "/img/farming-3.jpg",
            "/img/farming-4.jpg"
          ].map((src, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-48 md:h-64 relative group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              <Image
                src={src}
                alt={`Sustainable farming practice ${index + 1}`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          )) }
        </div>
      </div>

      {/* CTA Section - Enhanced with gradient and better layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="px-6 py-12 md:py-16 md:px-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Sustainable Agriculture Movement</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Whether you're looking to source organic produce, learn farming techniques, or partner with us,
              we welcome your interest in building a more sustainable food system.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-white text-green-700 hover:bg-green-50 px-8 py-3 rounded-full font-medium transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                Contact Us
              </Link>
              <Link href="/services" className="bg-transparent text-white border border-white hover:bg-white/10 px-8 py-3 rounded-full font-medium transition duration-300">
                Explore Other Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainableAgriculturePage;