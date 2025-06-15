"use client";

import React, { useState } from "react";
import {
  Calendar,
  User,
  ArrowRight,
  Leaf,
  Tractor,
  Sprout,
  Sun,
  CloudRain,
  TrendingUp,
} from "lucide-react";

const AgricultureBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", icon: Leaf },
    { id: "farming", name: "Farming", icon: Tractor },
    { id: "crops", name: "Crops", icon: Sprout },
    { id: "weather", name: "Weather", icon: CloudRain },
    { id: "technology", name: "AgTech", icon: TrendingUp },
    { id: "sustainability", name: "Sustainability", icon: Sun },
  ];

  const blogPosts = [
    {
      id: 2,
      title: "Sustainable Soil Management Practices for Long-term Productivity",
      excerpt:
        "Learn about cover cropping, composting, and crop rotation strategies that enhance soil health and boost agricultural sustainability.",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop&crop=center",
      author: "Michael Chen",
      date: "2024-03-12",
      readTime: "6 min read",
      category: "sustainability",
    },
    {
      id: 3,
      title:
        "Climate-Resilient Crop Varieties: Adapting to Changing Weather Patterns",
      excerpt:
        "Explore drought-resistant and heat-tolerant crop varieties that help farmers maintain productivity despite climate challenges.",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=250&fit=crop&crop=center",
      author: "Emma Thompson",
      date: "2024-03-10",
      readTime: "7 min read",
      category: "crops",
    },
    {
      id: 4,
      title: "Smart Irrigation Systems: Maximizing Water Efficiency",
      excerpt:
        "Discover how automated irrigation systems and moisture sensors can reduce water usage by up to 40% while improving crop yields.",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=250&fit=crop&crop=center",
      author: "James Rodriguez",
      date: "2024-03-08",
      readTime: "5 min read",
      category: "technology",
    },
    {
      id: 5,
      title: "Organic Pest Management: Natural Solutions for Healthy Crops",
      excerpt:
        "Learn about biological pest control methods and organic pesticides that protect crops without harming beneficial insects.",
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=250&fit=crop&crop=center",
      author: "Lisa Park",
      date: "2024-03-05",
      readTime: "6 min read",
      category: "farming",
    },
    {
      id: 6,
      title: "Understanding Weather Patterns for Better Crop Planning",
      excerpt:
        "How to interpret weather forecasts and seasonal patterns to optimize planting schedules and harvest timing.",
      image:
        "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?w=400&h=250&fit=crop&crop=center",
      author: "Robert Kim",
      date: "2024-03-03",
      readTime: "4 min read",
      category: "weather",
    },
    {
      id: 7,
      title: "Vertical Farming: The Future of Urban Agriculture",
      excerpt:
        "Explore how vertical farming technologies are making it possible to grow fresh produce in urban environments year-round.",
      image:
        "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=250&fit=crop&crop=center",
      author: "Anna Williams",
      date: "2024-03-01",
      readTime: "7 min read",
      category: "technology",
    },
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
   
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-3xl lg:text-4xl uppercase font-bold tracking-wide">
            <span className="text-gray-800">agriculture </span>
            <span className="text-green-500 relative">
              Blogs
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 rounded-full transform translate-y-2"></div>
            </span>
          </h1>
          <p className="text-md text-gray-600 mt-6">
            A digital platform sharing agriculture-related blogs, tips, and
            innovations to empower farmers and enthusiasts with the latest in
            smart and sustainable farming.
          </p>
        </div>

        {/* Category Filter */}
        <section className="bg-white">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? "bg-green-600 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-green-50 border border-green-200"
                  }`}
                >
                  <IconComponent className="h-3 w-3" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </section>

        <section>
          <div className="my-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h3>
            <p className="text-gray-600 text-md">
              Stay updated with the latest trends, techniques, and innovations
              in agriculture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-700 transition duration-200">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span className="text-sm text-green-600 font-medium">
                      {post.readTime}
                    </span>
                  </div>

                  <button className="mt-4 text-green-600 font-medium hover:text-green-700 flex items-center space-x-1 group-hover:underline">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default AgricultureBlog;
