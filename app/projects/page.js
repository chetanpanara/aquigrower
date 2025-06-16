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
    img: "/img/project4.jpg",
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
    img: "/img/project5.jpg",
    category: "hydroponics",
  },
  {
    key: "urban",
    title: "Urban Farming Projects",
    desc: "Design and setup of custom urban agriculture spaces in various Indian cities.",
    img: "/img/project6.jpg",
    category: "urban",
  },
];

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "hydroponics", label: "Hydroponics" },
  { key: "afforestation", label: "Afforestation" },
  { key: "urban", label: "Urban Farming" },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const [modal, setModal] = useState(null);

  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <main className="bg-gray-50 text-gray-800 font-sans min-h-screen">
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-6">Our Key Projects</h1>
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              className={`px-4 py-2 rounded-full transition font-semibold ${
                filter === cat.key
                  ? "bg-green-600 text-white"
                  : "bg-white text-green-700 border border-green-600 hover:bg-green-100"
              }`}
              onClick={() => setFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(project => (
            <div
              key={project.key}
              className="bg-white shadow-lg rounded-xl p-6 cursor-pointer hover:shadow-2xl transition"
              onClick={() => setModal(project)}
            >
              <img src={project.img} className="w-full h-48 object-cover rounded-lg mb-4" alt={project.title} />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p>{project.desc.split(".")[0]}.</p>
            </div>
          ))}
        </div>
        <p className="mt-16 text-center text-sm text-gray-500">
          For custom project inquiries, email us at{" "}
          <a href="mailto:aquigrower@gmail.com" className="text-green-600 underline">
            aquigrower@gmail.com
          </a>
        </p>
      </section>
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
            <h2 className="text-2xl font-bold text-green-700 mb-2">{modal.title}</h2>
            <img src={modal.img} className="w-full h-56 object-cover rounded-lg mb-4" alt={modal.title} />
            <p className="text-gray-700">{modal.desc}</p>
          </div>
        </div>
      )}
    </main>
  );
}
