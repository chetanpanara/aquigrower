import React from "react";
import Image from "next/image";

const Teams = () => {
  const teamData = [
    {
      id: 1,
      name: "Dr. Nalin K Pagi",
      image: "/img/gallery1.jpg", // Replace with actual image path
      description:
        "I am currently serving as an Assistant Professor at V.P. & R.P.T.P. Science College, VVNagar. I initiated a 45x45 meter Miyawaki Forest with over 2,200 trees from 70+ species and coordinate the “Hydroponics and Urban Farming” course in the Botany Department, promoting sustainable practices among students and the community.",
      position: "left",
      work: "CEO Of AquiGrower",
    },
    {
      id: 2,
      name: "Pooja Pagi",
      image: "/img/gallery4.jpg", // Replace with actual image path
      description:
        "While we were not the first home cleaning company in the UK, we take pride in being market leaders in introducing an instant online booking system plus. Image from Freepik",
      position: "right",
      work: "Co-Founder Of AquiGrower",
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-10">
   

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-3xl lg:text-4xl uppercase font-bold tracking-wide">
            <span className="from-gray-900 via-green-700 to-emerald-500 bg-clip-text text-transparent bg-gradient-to-r relative">
              AquiGrower Team
            </span>
          </h1>
         
        </div>

        <div className="space-y-8">
          {teamData.map((member) => (
            <div
              key={member.id}
              className={`flex flex-col ${
                member.position === "right"
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row"
              } items-center justify-center gap-8 lg:gap-16`}
            >
              {/* Profile Image Section */}
              <div className="flex-shrink-0 relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg bg-white">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
              </div>

              {/* Content Section */}
              <div
                className={`flex-1 max-w-2xl ${
                  member.position === "right"
                    ? "lg:text-right lg:pr-8"
                    : "lg:text-left lg:pl-8"
                } text-center lg:text-left`}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  {member.name}
                </h3>
                <p className="text-green-600 tracking-wide font-medium mb-1">
                  {member.work}
                </p>
                <p className="text-gray-600  leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Teams;
