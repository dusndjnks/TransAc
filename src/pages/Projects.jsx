import React from "react";

// Sample data — replace these with real media
const projects = [
  {
    type: "image",
    src: "/assets/projects/project1.jpg",
    alt: "Residential AC installation",
    title: "3 Ton Split Installation – Villa",
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/XhDflZzZNV8",
    title: "AC Service Time-lapse",
  },
  {
    type: "image",
    src: "/assets/projects/project2.jpg",
    alt: "Commercial HVAC unit setup",
    title: "HVAC Duct Setup – Mall",
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/2YBtspm8j8M",
    title: "Office AC Piping Walkthrough",
  },
];

export default function ProjectGallery() {
  return (
    <div className="font-sans">
      {/* 🔸 Hero Section */}
      <section className="bg-bg-dark text-white py-32 md:py-48 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-display text-primary">
          Our Projects
        </h1>
        <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
      </section>

      {/* 🔹 Media Showcase Section */}
      <section className="bg-bg-light py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-72 object-cover"
                  />
                ) : (
                  <div className="relative w-full h-72">
                    <iframe
                      src={item.src}
                      title={item.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-text-base">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
