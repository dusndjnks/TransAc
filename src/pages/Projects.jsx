import PreviousWorks from "../components/PreviousWorks";

import prjcts1 from "../assets/projects/prjcts (1).jpg";
import prjcts2 from "../assets/projects/prjcts (1).mp4";
import prjcts3 from "../assets/projects/prjcts (1).png";
import prjcts4 from "../assets/projects/prjcts (2).jpg";
import prjcts5 from "../assets/projects/prjcts (2).mp4";
import prjcts6 from "../assets/projects/prjcts (3).jpg";
import prjcts7 from "../assets/projects/prjcts (4).jpg";
import prjcts8 from "../assets/projects/prjcts (5).jpg";
import prjcts9 from "../assets/projects/projects6.jpg"
import prjcts10 from "../assets/res.jpg"

const projects = [
  {
    type: "image",
    src: prjcts10,
    alt: "Residential AC installation",
    title: "Skyline legends",
    description: " vrf 700-hp",
  },
  {
    type: "image",
    src: prjcts9,
    alt: "Residential AC installation",
    title: "Site reliant credits ",
    description: "VRF",
  },
  {
    type: "image",
    src: prjcts1,
    alt: "Residential AC installation",
    title: "Central pictures",
    description: "Chenganaserry , 70 Ton",
  },
  {
    type: "video",
    src: prjcts5,
    title: "St sebastin church hall",
    description: "Chelad , 90 Ton",
  },
  {
    type: "image",
    src: prjcts3,
    alt: "Residential AC installation",
    title: "Gokulam residency ",
    description: "VRF centralised",
  },
  {
    type: "image",
    src: prjcts6,
    alt: "Residential AC installation",
    title: "Silver tips kothamangalam",
    description: "Kothamangalam , 240 Ton",
  },
  {
    type: "image",
    src: prjcts7,
    alt: "Residential AC installation",
    title: "Cheriya pally convention centre",
    description: "Kothamangalam , 360 Ton",
  },
  {
    type: "image",
    src: prjcts8,
    alt: "Residential AC installation",
    title: "Architect lilly paul site",
    description: "Thrisur centralised",
  },
  {
    type: "image",
    src: prjcts4,
    alt: "Commercial HVAC unit setup",
    title: "Evm cinemas kothamangalam",
    description: "adimaly, kumily ,Muvatupuzha, mattanchery 450 ton",
  },
  {
    type: "video",
    src: prjcts2,
    title: "Gardenia convention centre",
    description: "Varkala , 110 Ton",
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

      {/* 🔹 Combined Masonry Layout */}
      <section className="bg-bg-light py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {projects.map((item, index) => (
              <div
                key={index}
                className="break-inside-avoid rounded-lg overflow-hidden shadow border border-gray-200 bg-white"
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full object-cover"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    className="w-full h-auto"
                  />
                )}
                <div className="p-3 text-center">
                  <h3 className="text-lg font-semibold text-text-base">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PreviousWorks/>
    </div>
  );
}
