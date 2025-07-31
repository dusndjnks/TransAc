import { useState, useRef } from 'react';
import enquiryBg from '../assets/enquire.jpg';

const Form = () => {
  const [open, setOpen] = useState(false);
  const formRef = useRef();

  const handleBackgroundClick = (e) => {
    if (e.target.id === 'modal-background') {
      setOpen(false);
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const form = formRef.current;
  const formData = new FormData(form);

  try {
    await fetch("https://script.google.com/macros/s/AKfycbymjekkFzEppObUKfIa7lvnUcECwLn8TUUFZb-2-FtJ58J5YnLpD2AeH3YvKiM6cWWh/exec" , {
      method: "POST",
      body: formData,
      mode: "no-cors", // 👈 this fixes the CORS issue
    });

    alert("Enquiry submitted successfully!");
    form.reset();
    setOpen(false);
  } catch (err) {
    console.error("Error submitting form:", err);
    alert("Something went wrong. Please try again later.");
  }
};


  return (
    <div className="font-sans bg-white">
      {/* Enquiry Section */}
      <div className="relative w-full h-[400px]">
        <img
          src={enquiryBg}
          alt="Enquiry Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-4">
            Smart Cooling Solutions by <br />
            <span className="underline underline-offset-4 decoration-primary-light">
              Trans India
            </span>
          </h2>
          <button
            onClick={() => setOpen(true)}
            className="mt-4 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-md transition"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          id="modal-background"
          onClick={handleBackgroundClick}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
        >
          <div className="bg-white rounded-lg w-full max-w-lg p-6 relative shadow-xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-2xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
              Enquiry Form
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="Name" placeholder="Name" required className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="email" name="Email" placeholder="Email" required className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="tel" name="Phone" placeholder="Phone Number" required className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="text" name="Location" placeholder="Location" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
              <textarea name="Message" placeholder="Message" rows="4" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
              <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded font-semibold transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
