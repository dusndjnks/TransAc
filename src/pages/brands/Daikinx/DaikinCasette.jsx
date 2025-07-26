import React, { useState } from "react";
import cassette1 from "../Daikinx/daikin/cassette (1).png";
import cassette4 from "../Daikinx/daikin/cassette (2).jpg";
import cassette3 from "../Daikinx/daikin/cassette (2).png";
import cassette2 from "../Daikinx/daikin/cassette (1).jpg";

const categories = [
  {
    name: "Daikin Cassette AC Series",
    products: [
      {
        title: "Daikin FCVF71A (2 Ton, 4 Star Inverter)",
        image: cassette2,
        features: [
          "Uniform 360° Round Airflow",
          "Inverter Technology for energy savings",
          "Ultra long life & high efficiency filter",
          "Quiet operation and auto restart",
          "Transparent drain socket & auto grille panel",
        ],
      },
      {
        title: "Daikin FCMF100ARV16 (4-Way, 4 Star Inverter, 3 Ton)",
        image: cassette3,
        features: [
          "Powerful 4-way air distribution",
          "High CFM, wide airflow for large spaces",
          "Hermetically sealed swing compressor",
          "Stabilizer inside operation",
          "R32 eco refrigerant",
        ],
      },
      {
        title: "Daikin FCMF50ARV16 (1.5 Ton, Round Flow Cassette)",
        image: cassette1,
        features: [
          "Round flow for even cooling",
          "Wireless remote (optional)",
          "Low power consumption (1.27 kW typical)",
          "ISEER up to 5.2",
        ],
      },
      {
        title: "Daikin FKCA50RV16 (1-Way Cassette, 1.5 Ton)",
        image: cassette4,
        features: [
          "Slim, one-way cassette for narrow ceilings",
          "Energy-efficient inverter technology",
          "Compact, easy to install",
          "Quiet operation",
        ],
      },
      // Add more models as needed, following the site for up-to-date variants.
    ],
  },
];


const DaikinCasette = () => {
	const [modal, setModal] = useState({ open: false, product: null });
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [openFeatures, setOpenFeatures] = useState({});

	const toggleFeatures = (title) => {
		setOpenFeatures((prev) => ({ ...prev, [title]: !prev[title] }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const scriptURL =
			"https://script.google.com/macros/s/AKfycby8iYYpTB0-yQ4YiSJVyizcc14evLr9Zx0O5WONfzsdqNbC2fZd5ZhwFAqd8y8czuMw/exec";

		const formData = new FormData();
		formData.append("email", email);
		formData.append("phone", phone);
		formData.append("product", modal.product);

		try {
			await fetch(scriptURL, {
				method: "POST",
				body: formData,
			});
			alert("Enquiry sent successfully!");
		} catch (error) {
			console.error("Error!", error.message);
			alert("Something went wrong.");
		}

		setModal({ open: false, product: null });
		setEmail("");
		setPhone("");
	};

	return (
		<div className="font-sans">
			<section className="bg-bg-dark py-24 md:py-40 text-center text-white">
				<h1 className="text-4xl md:text-5xl font-bold text-primary font-display">
					Daikin – Cassette ACs
				</h1>
			</section>

			<div className="py-14 px-6 md:px-16 lg:px-40 bg-white text-center">
				<p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
					Discover Daikin’s cassette air conditioners, designed for seamless
					ceiling integration, 360° airflow, and efficient cooling for commercial
					and large residential spaces.
				</p>
			</div>

			<section className="bg-bg-light py-20 px-6 md:px-20 lg:px-40 space-y-16">
				{categories.map((cat, idx) => (
					<div key={idx} className="space-y-6">
						<h3 className="text-2xl font-heading font-semibold text-text-base">
							{cat.name}
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
							{cat.products.map((product, i) => (
								<div
									key={i}
									className="bg-white rounded-xl shadow-md p-6 text-center"
								>
									<img
										src={product.image}
										alt={product.title}
										className="w-full h-44 object-contain mb-4"
									/>
									<div className="text-text-base font-medium text-lg">
										{product.title}
									</div>

									<div className="mt-4 flex justify-center gap-4">
										<button
											onClick={() => toggleFeatures(product.title)}
											className="text-sm text-primary font-semibold hover:underline"
										>
											{openFeatures[product.title]
												? "Hide Features"
												: "Show Features"}
										</button>
										<button
											onClick={() =>
												setModal({ open: true, product: product.title })
											}
											className="text-sm text-white bg-primary px-3 py-1.5 rounded-md hover:bg-primary-dark transition"
										>
											Enquire Now
										</button>
									</div>

									{openFeatures[product.title] && (
										<ul className="mt-4 text-left text-sm text-gray-700 list-disc list-inside">
											{product.features.map((f, fi) => (
												<li key={fi}>{f}</li>
											))}
										</ul>
									)}
								</div>
							))}
						</div>
					</div>
				))}
			</section>

			{modal.open && (
				<div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
					<div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6">
						<h3 className="text-lg font-semibold mb-4 text-text-base">
							Enquire About: {modal.product}
						</h3>
						<form onSubmit={handleSubmit} className="space-y-4">
							<input
								type="email"
								required
								placeholder="Your Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
							/>
							<input
								type="tel"
								required
								placeholder="Your Phone Number"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
							/>
							<input
								type="text"
								readOnly
								value={modal.product}
								className="w-full bg-gray-100 border border-gray-200 rounded px-3 py-2 text-sm"
							/>
							<div className="flex justify-end gap-3">
								<button
									type="button"
									onClick={() => setModal({ open: false, product: null })}
									className="text-sm px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
								>
									Cancel
								</button>
								<button
									type="submit"
									className="text-sm px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default DaikinCasette;