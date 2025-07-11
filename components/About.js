import React from 'react'
import { Target, Eye, Award, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';

function About() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        {/* About Content */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Image
              src="/img/organic-farm.jpg"
              alt="Organic Farm"
              width={600}
              height={400}
              className="rounded-xl shadow-lg duration-700 hover:scale-105 hover:shadow-lg hover:brightness-110 transition-transform"
            />
            <div className="space-y-6 transition-all duration-700">
              <div className="text-start">
                <h1 className="text-3xl md:text-3xl lg:text-4xl uppercase font-bold tracking-wide">
                  <span className="from-gray-900 via-green-700 to-emerald-500 bg-clip-text text-transparent bg-gradient-to-r relative">
                    About aquigrower
                  </span>
                </h1>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Based in Ahmedabad, Aqui Grower LLP was founded in January 2021
                with a mission to make sustainable and organic agriculture
                accessible to everyone. We are dedicated to serving humanitys
                basic needs through organic farming, hydroponics, and
                environmental activities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From Miyawaki Forests to hydroponic solutions and citizen
                awareness programs, our work spans food security, biodiversity,
                and education.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>GSTIN:</strong> 24ABTFA9566B1Z6
              </p>
            </div>
          </div>
        </section>

        {/* Out story */}
        <section>
          <div className="grid lg:grid-cols-2 gap-12 items-center my-14">
            <div>
              <div className="text-start mb-8">
                <h1 className="text-3xl md:text-3xl lg:text-4xl uppercase font-bold tracking-wide">
                  <span className="from-gray-900 via-green-700 to-emerald-500 bg-clip-text text-transparent bg-gradient-to-r relative">
                  our story
                  </span>
                </h1>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Founded by a team of agricultural scientists and technology
                experts, AgriTech Solutions emerged from a shared vision to
                bridge the gap between traditional farming wisdom and modern
                innovation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Starting with a small pilot project in rural communities, we
                have grown to serve thousands of farmers across multiple
                regions, providing them with tools and knowledge to thrive in
                todays challenging agricultural landscape.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
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
              <p className="text-gray-700  leading-relaxed mb-4">
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
              <p className="text-gray-700  leading-relaxed mb-4">
                To be the global leader in agricultural innovation, creating a
                world where smart farming technologies ensure food security,
                environmental sustainability, and prosperity for farming
                communities worldwide.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About
