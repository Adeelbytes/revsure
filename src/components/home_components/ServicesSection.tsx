import React from "react";

const services = [
  {
    title: "Medical Billing Services",
    description:
      "We are a leading Medical Billing Services provider with over 12 years of experience in Multi-Specialty Medical Billing and a trusted presence across the USA.",
    icon: "💰",
    color: "bg-primary",
  },
  {
    title: "Medical Coding Services",
    description:
      "Our certified medical coders ensure detailed, accurate and timely documentation to simplify claims processing.",
    icon: "📝",
    color: "bg-primary",
  },
  {
    title: "A/R Follow Up",
    description:
      "Our specialized A/R team reviews partial payments or denials, and corrects and re-submits them to the payer.",
    icon: "📋",
    color: "bg-primary",
  },
  {
    title: "Denial Management",
    description:
      "We analyze denied claims, correct errors, and resubmit them to maximize revenue recovery.",
    icon: "❌",
    color: "bg-primary",
  },
  {
    title: "Eligibility Verification",
    description:
      "Our team verifies patient eligibility and insurance coverage before appointments to reduce claim denials.",
    icon: "✅",
    color: "bg-primary",
  },
  {
    title: "Revenue Cycle Management",
    description:
      "We optimize the complete revenue cycle, from patient registration to final payment collection.",
    icon: "💹",
    color: "bg-primary",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-12">Our Services</h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, index) => {
          const rotationClass = index % 2 === 0 ? "rotate-6" : "-rotate-6"; // Alternating rotation

          return (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Dashed Border Wrapper */}
              <div className={`relative p-4 ${rotationClass}`}>
                <div className="absolute inset-0 border-2 border-dashed border-gray-400 rounded-xl"></div>

                {/* Rotating Inner Square */}
                <div
                  className={`w-24 h-24 flex justify-center items-center text-5xl text-white ${service.color} rounded-xl shadow-lg`}
                >
                  {service.icon}
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-lg font-bold text-gray-800 mt-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2 max-w-sm">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
