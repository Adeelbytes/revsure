import { motion } from "framer-motion";
import {
  Building2,
  Stethoscope,
  Timer,
  Hospital,
  User,
  Camera,
} from "lucide-react";

const Clients = () => {
  const clientTypes = [
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "Healthcare Systems",
      description:
        "Comprehensive billing solutions for large healthcare networks.",
    },
    {
      icon: <Timer className="w-12 h-12 text-primary" />,
      title: "Emergency Rooms",
      description: "Specialized billing services for emergency care facilities.",
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-primary" />,
      title: "Urgent Cares",
      description: "Efficient billing management for urgent care centers.",
    },
    {
      icon: <Hospital className="w-12 h-12 text-primary" />,
      title: "Hospitals",
      description: "Complete revenue cycle management for hospitals.",
    },
    {
      icon: <User className="w-12 h-12 text-primary" />,
      title: "Private Practices",
      description: "Tailored billing solutions for private medical practices.",
    },
    {
      icon: <Camera className="w-12 h-12 text-primary" />,
      title: "Clinics & Imaging Centers",
      description:
        "Specialized billing services for clinics and diagnostic centers.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary mb-6">Our Clients</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We serve a diverse range of healthcare providers, delivering
            exceptional billing services tailored to each specialty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientTypes.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{client.icon}</div>
              <h2 className="text-xl font-semibold text-secondary mb-3">
                {client.title}
              </h2>
              <p className="text-gray-600">{client.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Clients;