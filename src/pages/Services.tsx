import { Link } from "react-router-dom"; // Import Link for navigation
import { motion } from "framer-motion"; // Assuming you're using Framer Motion for animations
import {
  FileText,
  ClipboardCheck,
  Shield,
  AlertCircle,
  UserCheck,
  BarChart3,
} from "lucide-react"; // Import icons

const Services = () => {
  const services = [
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "Medical Billing Services",
      description:
        "Comprehensive medical billing solutions to maximize your revenue cycle.",
      path: "/MedicalBilling", // Add path for navigation
    },
    {
      icon: <ClipboardCheck className="w-12 h-12 text-primary" />,
      title: "Medical Coding Services",
      description:
        "Accurate and efficient medical coding to ensure proper reimbursement.",
      path: "/MedicalCoding", // Add path for navigation
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Credentialing Services",
      description:
        "Streamlined credentialing process for healthcare providers and facilities.",
      path: "/CredentialingPage", // Add path for navigation
    },
    {
      icon: <AlertCircle className="w-12 h-12 text-primary" />,
      title: "Denial Management",
      description:
        "Expert handling of claim denials to maximize revenue recovery.",
      path: "/DenialManagementPage", // Add path for navigation
    },
    {
      icon: <UserCheck className="w-12 h-12 text-primary" />,
      title: "Eligibility Verification",
      description:
        "Thorough verification of patient insurance eligibility and benefits.",
      path: "/EligibilityVerification", // Add path for navigation
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Revenue Cycle Management",
      description:
        "Complete revenue cycle management to optimize your financial performance.",
      path: "/RCMServices", // Add path for navigation
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
          <h1 className="text-4xl font-bold text-secondary mb-6">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive medical billing and revenue cycle management solutions
            tailored to your healthcare practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link to={service.path} key={index}> {/* Wrap with Link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer" // Add cursor-pointer for better UX
              >
                <div className="mb-4">{service.icon}</div>
                <h2 className="text-xl font-semibold text-secondary mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;