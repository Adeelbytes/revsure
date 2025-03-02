import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  Building2,
  Stethoscope,
  Timer,
  Hospital,
  User,
  Camera,
} from "lucide-react";

const Clients = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const clientTypes = [
    {
      icon: <Building2 className="w-12 h-12 text-teal-400" />,
      title: "Healthcare Systems",
      description: "Comprehensive billing solutions for large healthcare networks.",
      path: "/HealthcareSystems", // Add path for navigation
    },
    {
      icon: <Timer className="w-12 h-12 text-teal-400" />,
      title: "Emergency Rooms",
      description: "Specialized billing services for emergency care facilities.",
      path: "/EmergencyRoom", // Add path for navigation
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-teal-400" />,
      title: "Urgent Cares",
      description: "Efficient billing management for urgent care centers.",
      path: "/UrgentCares", // Add path for navigation
    },
    {
      icon: <Hospital className="w-12 h-12 text-teal-400" />,
      title: "Hospitals",
      description: "Complete revenue cycle management for hospitals.",
      path: "/Hospitals", // Add path for navigation
    },
    {
      icon: <User className="w-12 h-12 text-teal-400" />,
      title: "Private Practices",
      description: "Tailored billing solutions for private medical practices.",
      path: "/PrivatePractices", // Add path for navigation
    },
    {
      icon: <Camera className="w-12 h-12 text-teal-400" />,
      title: "Clinics & Imaging Centers",
      description: "Specialized billing services for clinics and diagnostic centers.",
      path: "/ClinicsAndImagingCenters", // Add path for navigation
    },
  ];

  // Function to handle navigation
  const handleClientClick = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Our Clients
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            We serve a diverse range of healthcare providers, delivering
            exceptional billing services tailored to each specialty.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {clientTypes.map((client, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-900 p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center border border-gray-700 cursor-pointer" // Add cursor-pointer
              onClick={() => handleClientClick(client.path)} // Add onClick handler
            >
              <motion.div
                initial={{ rotate: -10 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-4"
              >
                {client.icon}
              </motion.div>
              <h2 className="text-xl font-semibold text-white mb-3">
                {client.title}
              </h2>
              <p className="text-gray-400">{client.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Clients;