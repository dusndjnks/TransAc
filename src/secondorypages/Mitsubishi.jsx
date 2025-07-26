import pdf1 from "../assets/pdf1.pdf";
import pdf2 from "../assets/pdf2.pdf"; 
import pdf3 from "../assets/pdf3.pdf";


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
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {[
            {
              title: "Mitsubishi Product Catalogue",
              file: pdf1,
            },
            {
              title: "Mitsubishi VRF Systems Brochure",
              file: pdf2,
            },
            {
              title: "Mitsubishi Wall-mounted AC Specs",
              file: pdf3,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center"
            >
              <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
              <a
                href={item.file}
                download
                className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition"
              >
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
