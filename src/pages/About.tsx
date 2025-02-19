import { motion } from "framer-motion";
import { Shield, Award, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-24 pb-16"
    >
      <div className="max-w-7xl bg-[#C969C]  mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary mb-6">About RevSure</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            RevSure Medical Billing is dedicated to optimizing healthcare revenue
            cycles through innovative solutions and exceptional service.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              To empower healthcare providers with efficient billing solutions that
              maximize revenue and allow them to focus on what matters most –
              patient care.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To be the leading medical billing partner known for innovation,
              reliability, and exceptional service in the healthcare industry.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trusted Experience</h3>
              <p className="text-gray-600">
                Years of expertise in medical billing and revenue cycle management.
              </p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Industry Leaders</h3>
              <p className="text-gray-600">
                Recognized for excellence in medical billing services.
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Consistent track record of improving revenue cycles.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-muted p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center text-secondary mb-8">
            Certifications & Compliance
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">HIPAA Compliance</h3>
              <p className="text-gray-600">
                We maintain strict HIPAA compliance to ensure the security and
                privacy of all medical data.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Data Security</h3>
              <p className="text-gray-600">
                Advanced encryption and security measures to protect sensitive
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;