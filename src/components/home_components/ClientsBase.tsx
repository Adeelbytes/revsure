import React from "react";
import { motion } from "framer-motion";
const ClientBase = () => {
  const clients = [
    { icon: "📊", title: "Healthcare System" },
    { icon: "🏥", title: "Hospitals" },
    { icon: "🛏️", title: "Emergency Rooms" },
    { icon: "⛑️", title: "Urgent Care" },
    { icon: "👨‍⚕️", title: "Private Practices" },
    { icon: "🩺", title: "All Specialities" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-6 max-w-5xl mx-auto text-center">
      <div>
      <h2 className="text-3xl font-bold text-purple-900">Our Client Base</h2>
      <p className="text-gray-700 mt-4">
        Right Medical Billing offers comprehensive medical billing and revenue
        cycle management services to a diverse client base. We partner with
        healthcare providers of all sizes, from solo practitioners navigating
        complex healthcare landscapes to large healthcare systems managing
        bustling operations. Our commitment lies in delivering tailored
        solutions that drive revenue and efficiency.
      </p>
      <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg font-semibold shadow-md hover:bg-green-600">
        Let's Streamline Your Billing
      </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
      {clients.map((client, index) => (
        <motion.div
          key={index}
          className="bg-purple-50 p-6 rounded-lg shadow-md flex flex-col items-center cursor-pointer transition-colors"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-4xl">{client.icon}</span>
          <h3 className="mt-2 text-purple-900 font-semibold">{client.title}</h3>
        </motion.div>
      ))}
    </div>
    </div>
  );
};

export default ClientBase;
