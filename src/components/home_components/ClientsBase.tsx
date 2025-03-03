import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from React Router

const ClientBase = () => {
  const clients = [
    { icon: "📊", title: "Healthcare System", path: "/HealthcareSystems" },
    { icon: "🏥", title: "Hospitals", path: "/Hospitals" },
    { icon: "🛏️", title: "Emergency Rooms", path: "/EmergencyRoom" },
    { icon: "⛑️", title: "Urgent Care", path: "/UrgentCares" },
    { icon: "👨‍⚕️", title: "Private Practices", path: "/PrivatePractices" },
    { icon: "🩺", title: "All Specialities", path: "/ClinicsAndImagingCenters" },
  ];

  return (
    <div className="bg-black rounded-xl shadow-2xl shadow-grey-600 text-gray-100 py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-center">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold text-white">Client Base</h2>
          <p className="text-gray-200 mt-4">
            RevSure Medical Billing offers comprehensive medical billing and revenue cycle management services
            tailored to meet the needs of healthcare providers across the spectrum. Whether you're a solo practitioner
            navigating the complexities of today’s healthcare landscape or a large healthcare system managing a high
            volume of operations, we are here to help. Our commitment is to deliver personalized solutions that not
            only drive revenue but also enhance operational efficiency. By partnering with RevSure, you gain a dedicated
            team focused on optimizing your billing processes, ensuring faster reimbursements, and freeing up your time
            to focus on what truly matters—providing exceptional patient care.
          </p>
          <button className="mt-6 bg-secondary text-white py-2 px-4 rounded-lg font-semibold shadow-md hover:bg-secondary/80 transition">
            Let's Streamline Your Billing
          </button>
        </div>

        {/* Right Section - Client Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-center cursor-pointer transition-transform w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Wrap the icon in a Link */}
              <Link to={client.path} className="w-full">
                <span className="text-4xl">{client.icon}</span>
                <h3 className="mt-2 text-gray-900 font-semibold text-sm sm:text-base">
                  {client.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientBase;