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
      <section className="bg-bg-dark text-white py-20 lg:py-32 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-display text-primary">
          Our Projects
        </h1>
        <p className="text-white/70 mt-4 text-lg max-w-2xl mx-auto">
          A glimpse into our quality craftsmanship in AC installation, service, and HVAC engineering.
        </p>
      </section>

      {/* 🔹 Projects Grid */}
      <section className="bg-bg-light py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-base font-heading mb-4">
            Recent Work
          </h2>
          <p className="text-text-light mb-12 max-w-2xl mx-auto">
            From homes to commercial complexes, explore our cooling solutions in action.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={item.src}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-64"
                    ></iframe>
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-text-base">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
