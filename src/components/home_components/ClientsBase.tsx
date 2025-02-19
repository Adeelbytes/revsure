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
    <div className="bg-gray-900 rounded-xl shadow-2xl shadow-grey-600 text-white py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-center">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold text-secondary">Our Client Base</h2>
          <p className="text-gray-300 mt-4">
            Right Medical Billing offers comprehensive medical billing and revenue
            cycle management services to a diverse client base. We partner with
            healthcare providers of all sizes, from solo practitioners navigating
            complex healthcare landscapes to large healthcare systems managing
            bustling operations. Our commitment lies in delivering tailored
            solutions that drive revenue and efficiency.
          </p>
          <button className="mt-6 bg-secondary text-gray-900 py-2 px-4 rounded-lg font-semibold shadow-md hover:bg-secondary/80 transition">
            Let's Streamline Your Billing
          </button>
        </div>

        {/* Right Section - Client Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-center cursor-pointer transition-transform w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-4xl">{client.icon}</span>
              <h3 className="mt-2 text-white font-semibold text-sm sm:text-base">
                {client.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientBase;
