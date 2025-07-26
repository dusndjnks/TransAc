import pdf1 from "../assets/pdf1.pdf";
import pdf2 from "../assets/pdf2.pdf"; 
import pdf3 from "../assets/pdf3.pdf";

const pdfs = [
  {
    title: "Mitsubishi Product Catalogue",
    file: pdf1,
    desc: "Comprehensive catalogue of Mitsubishi Electric air conditioning products.",
  },
  {
    title: "Mitsubishi VRF Systems Brochure",
    file: pdf2,
    desc: "Detailed brochure for Mitsubishi VRF (Variable Refrigerant Flow) systems.",
  },
  {
    title: "Mitsubishi Wall-mounted AC Specs",
    file: pdf3,
    desc: "Technical specifications for wall-mounted Mitsubishi AC units.",
  },
];

const Mitsubishi = () => {
  return (
    <div className="font-sans bg-bg-light text-text-base">

      {/* Hero Section */}
      <section className="bg-bg-dark py-24 md:py-40 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-display px-4">
          Mitsubishi Electric Air Conditioners
        </h1>
        <p className="text-lg mt-4 text-gray-300 max-w-2xl mx-auto px-4">
          Explore high-performance, energy-efficient air conditioning solutions
          from Mitsubishi Electric — ideal for both residential and commercial needs.
        </p>
      </section>

      {/* Downloads Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-heading font-semibold mb-10">
          Download Brochures & Catalogues
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {pdfs.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg flex flex-col items-center justify-between p-8 min-h-[320px] transition-transform hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
            >
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-semibold mb-3 text-primary">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-6">{item.desc}</p>
              </div>
              <a
                href={item.file}
                download
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full font-medium shadow hover:bg-primary-dark transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4m-8 8h8" />
                </svg>
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default Mitsubishi;
