import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { Link } from "react-router-dom"; // Import Link from React Router

const services = [
  {
    title: "Medical Billing Services",
    description:
      "RevSure Medical Billing streamlines revenue cycles, reducing claim denials and accelerating reimbursements. Our expert coders ensure accuracy, compliance, and seamless EHR/EMR integration, helping healthcare providers maximize revenue and minimize errors.",
    icon: "💰",
    color: "bg-primary",
    path: "/MedicalBilling", // Add path for navigation
  },
  {
    title: "Medical Coding Services",
    description:
      "Accurate coding is crucial for timely reimbursements. RevSure’s certified medical coders ensure compliance with ICD, CPT, and HCPCS standards, reducing claim rejections and optimizing revenue collection.",
    icon: "📝",
    color: "bg-primary",
    path: "/MedicalCoding", // Add path for navigation
  },
  {
    title: "Insurance Credentialing Services",
    description:
      "RevSure simplifies insurance credentialing, ensuring providers gain recognition from top insurance networks without delays. We handle applications, compliance, and direct insurer collaboration for a smooth process.",
    icon: "📜",
    color: "bg-primary",
    path: "/CredentialingPage", // Add path for navigation
  },
  {
    title: "Denial Management",
    description:
      "We proactively analyze, correct, and resubmit denied claims to recover lost revenue. Our team tracks denial trends, prevents future claim issues, and enhances financial stability.",
    icon: "❌",
    color: "bg-primary",
    path: "/DenialManagementPage", // Add path for navigation
  },
  {
    title: "Revenue Cycle Management",
    description:
      "RevSure optimizes the entire revenue cycle, from patient registration to final claim reimbursement. Our end-to-end solutions enhance cash flow, reduce administrative burden, and ensure financial efficiency.",
    icon: "📈",
    color: "bg-primary",
    path: "/RCMServices", // Add path for navigation
  },
  {
    title: "Eligibility Verification",
    description:
      "We ensure accurate patient insurance verification before services are rendered, reducing claim denials and enhancing revenue cycle efficiency for healthcare providers.",
    icon: "✅",
    color: "bg-primary",
    path: "/EligibilityVerification", // Add path for navigation
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 bg-bg text-center">
      <h5 className="text-lg font-bold text-gray-600 uppercase tracking-wider mb-12">
        <span className="border-b-2 border-orange-500 pb-1">Our Services</span>
      </h5>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, index) => {
          const rotationClass = index % 2 === 0 ? "rotate-6" : "-rotate-6";

          return (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon Card - Clickable and Hoverable */}
              <Link to={service.path} className="cursor-pointer">
                <motion.div
                  className={`relative p-4 ${rotationClass}`}
                  initial={{ rotate: index % 2 === 0 ? 6 : -6 }} // Initial rotation
                  whileHover={{ rotate: 0 }} // Icon becomes straight on hover
                  transition={{ duration: 0.3 }} // Smooth transition
                >
                  <div className="absolute inset-0 border-2 border-dashed border-gray-400 rounded-xl"></div>
                  <div
                    className={`w-28 h-28 flex justify-center items-center text-5xl text-white ${service.color} rounded-xl shadow-lg`}
                  >
                    {service.icon}
                  </div>
                </motion.div>
              </Link>

              {/* Text - Not Clickable or Hoverable */}
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