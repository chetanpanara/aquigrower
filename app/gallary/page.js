"use client";

import React, { useState, useEffect } from "react";

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Gallery data with size variants for masonry layout
  const galleryData = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
      category: "organic-farming",
      title: "Organic Vegetable Garden",
      description:
        "Sustainable cultivation of organic vegetables using traditional farming methods",
      size: "large", // Will span 2 columns and 2 rows
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
      category: "hydroponics",
      title: "Modern Hydroponic System",
      description:
        "Advanced soilless cultivation technology for herbs and leafy greens",
      size: "medium", // Regular size
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&q=80",
      category: "afforestation",
      title: "Miyawaki Forest Initiative",
      description: "Dense native forest plantation for ecological restoration",
      size: "medium",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
      category: "extension",
      title: "Community Training Program",
      description: "Educating farmers on sustainable agricultural practices",
      size: "wide", // Will span 2 columns
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80",
      category: "organic-farming",
      title: "Traditional Crop Cultivation",
      description: "Growing essential food crops without chemical fertilizers",
      size: "medium",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
      category: "hydroponics",
      title: "Greenhouse Hydroponics",
      description:
        "Controlled environment agriculture for year-round production",
      size: "tall", // Will span 2 rows
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
      category: "afforestation",
      title: "Biodiversity Conservation",
      description: "Protecting and enhancing local ecosystem diversity",
      size: "medium",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80",
      category: "extension",
      title: "Field Demonstration",
      description: "Hands-on training for modern farming techniques",
      size: "medium",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
      category: "organic-farming",
      title: "Organic Herb Garden",
      description: "Medicinal and culinary herbs grown organically",
      size: "wide",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
      category: "hydroponics",
      title: "Vertical Growing Systems",
      description: "Space-efficient vertical hydroponic installations",
      size: "medium",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
      category: "afforestation",
      title: "Native Tree Plantation",
      description: "Restoring natural forest cover with indigenous species",
      size: "tall",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
      category: "extension",
      title: "Agricultural Workshop",
      description: "Knowledge sharing sessions with local farming community",
      size: "medium",
    },
  ];

  const filterCategories = [
    { key: "all", label: "All Projects", icon: "🌱" },
    { key: "organic-farming", label: "Organic Farming", icon: "🌾" },
    { key: "hydroponics", label: "Hydroponics", icon: "💧" },
    { key: "afforestation", label: "Afforestation", icon: "🌳" },
    { key: "extension", label: "Extension Programs", icon: "👥" },
  ];

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (activeFilter === "all") {
        setFilteredImages(galleryData);
      } else {
        setFilteredImages(
          galleryData.filter((img) => img.category === activeFilter)
        );
      }
      setIsLoading(false);
    }, 300);
  }, [activeFilter]);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const getSizeClasses = (size) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2";
      case "wide":
        return "col-span-2 row-span-1";
      case "tall":
        return "col-span-1 row-span-2";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <>
      {/* Filter Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Gallery</h2>
          <p className="text-md text-gray-600 mb-8">
            A visual journey through our agricultural practices, innovations,
            and green landscapes.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {filterCategories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              className={`px-3 py-2 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category.key
                  ? "bg-green-600 text-white shadow-sm"
                  : "bg-white text-gray-700 hover:bg-green-50 border border-green-200"
              }`}
            >
              <span className="mr-1">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Masonry Gallery Grid */}
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 auto-rows-[200px]">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-2xl animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 auto-rows-[200px]">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer animate-fade-in-up ${getSizeClasses(
                  image.size
                )}`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openModal(image)}
              >
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-sm lg:text-lg font-bold mb-1 lg:mb-2">
                      {image.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-200 line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </div>

                {/* View Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 lg:w-10 lg:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-4 h-4 lg:w-5 lg:h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredImages.length === 0 && !isLoading && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-4xl max-h-[90vh] m-4 animate-scale-in">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[60vh] object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out 0.3s both;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default GalleryPage;
