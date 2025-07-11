"use client";

import { useState } from "react";

const PROJECTS = [
  {
    key: "reliance",
    title: "Reliance LTD",
    desc: "Indoor and outdoor hydroponic demonstration units established to showcase modern soil-less cultivation.",
    img: "/img/project1.jpg",
    category: "hydroponics",
  },
  {
    key: "rsc",
    title: "Regional Science Centre, Patan",
    desc: "Installed six different hydroponic systems for educational demonstration purposes.",
    img: "/img/gallery1.jpg",
    category: "hydroponics",
  },
  {
    key: "rubamin",
    title: "Rubamin Pvt Ltd",
    desc: "Herbal plant landscaping and terrace fruit orchard farming for eco-green building.",
    img: "/img/project3.jpg",
    category: "urban",
  },
  {
    key: "nddb",
    title: "NDDB",
    desc: "Moringa plantation, tree & bird census, food forest and fodder farm for sustainable dairy farming.",
    img: "/img/project2.jpg",
    category: "afforestation",
  },
  {
    key: "folium",
    title: "Folium Pura",
    desc: "Hydroponic farming of microgreens and exotic herbs using NFT and A-frame systems.",
    img: "/img/gallery2.jpg",
    category: "hydroponics",
  },
  {
    key: "urban",
    title: "Urban Farming Projects",
    desc: "Design and setup of custom urban agriculture spaces in various Indian cities.",
    img: "/img/gallery4.jpg",
    category: "urban",
  },
];

const CATEGORIES = [
  { key: "all", label: "All Projects" },
  { key: "hydroponics", label: "Hydroponics" },
  { key: "afforestation", label: "Afforestation" },
  { key: "urban", label: "Urban Farming" },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const [modal, setModal] = useState(null);

  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
       

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-3xl lg:text-4xl uppercase font-bold tracking-wide">
            <span className="from-gray-900 via-green-700 to-emerald-500 bg-clip-text text-transparent bg-gradient-to-r relative">
              our featured Projects
            </span>
          </h1>
          <p className=" text-gray-600 mt-4">
            To showcase our completed and ongoing projects, demonstrating our
            capabilities and achievements
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              className={`px-3 py-2 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                filter === cat.key
                  ? "bg-green-600 text-white shadow-sm"
                  : "bg-white text-gray-700 hover:bg-green-50 border border-green-200"
              }`}
              onClick={() => setFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project) => (
            <div
              key={project.key}
              className="bg-white shadow-md rounded-xl p-4 cursor-pointer hover:shadow-lg transition"
              onClick={() => setModal(project)}
            >
              <img
                src={project.img}
                className="w-full h-48 object-cover  rounded-lg mb-4"
                alt={project.title}
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 text-md leading-relaxed">
                {project.desc.split(".")[0]}.
              </p>
            </div>
          ))}
        </div>
        <p className="mt-16 text-center text-sm text-gray-500">
          For custom project inquiries, email us at{" "}
          <a
            href="mailto:aquigrower@gmail.com"
            className="text-green-600 underline"
          >
            aquigrower@gmail.com
          </a>
        </p>
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 rounded-lg shadow-xl z-10 p-6 relative">
            <button
              onClick={() => setModal(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-green-700 text-2xl"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-green-700 mb-2">
              {modal.title}
            </h2>
            <img
              src={modal.img}
              className="w-full h-56 object-cover rounded-lg mb-4"
              alt={modal.title}
            />
            <p className="text-gray-700">{modal.desc}</p>
          </div>
        </div>
      )}
    </>
  );
}
