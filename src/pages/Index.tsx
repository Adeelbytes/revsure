import { motion } from "framer-motion";
import {
  Shield,
  TrendingUp,
  Clock,
  Users,
  ChevronRight,
  Building,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import ClientBase from "../components/home_components/ClientsBase"
const Index = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "HIPAA Compliant",
      description: "Secure handling of all medical data",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Increased Revenue",
      description: "Optimize your billing process",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Fast Processing",
      description: "Quick turnaround on claims",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Certified billing specialists",
    },
  ];

  const clients = [
    {
      icon: <Building className="h-6 w-6" />,
      type: "Healthcare Systems",
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      type: "Private Practices",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8 text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-secondary leading-tight">
                Maximize Your Revenue,
                <br />
                Minimize Your Hassles
              </h1>
              <p className="text-lg md:text-xl text-secondary/80">
                Expert medical billing services tailored to your practice's needs.
                Focus on your patients while we handle the rest.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get Free Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="doctor.png"
                  alt="Medical Professional"
                  className="w-full h-auto max-w-lg mx-auto rounded-2xl shadow-xl"
                />
                {/* Decorative elements */}
                <div className="absolute -z-10 top-10 right-10 w-full h-full bg-primary/10 rounded-2xl transform translate-x-4 translate-y-4" />
                <div className="absolute -z-20 top-20 right-20 w-full h-full bg-secondary/5 rounded-2xl transform translate-x-8 translate-y-8" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary">Why Choose Us</h2>
            <p className="mt-4 text-lg text-secondary/80">
              We deliver excellence in medical billing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Clients Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary">Our Clients</h2>
            {/* <p className="mt-4 text-lg text-secondary/80">
              Trusted by healthcare providers across the country
            </p> */}
          </div>
          <ClientBase/>
        </div>
      </section>
    </div>
  );
};

export default Index;