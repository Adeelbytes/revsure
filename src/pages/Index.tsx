import bg from '/src/assets/bg.jpg';
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
import FeatureSection from "../components/home_components/FeatureSection"
import ServicesSection from "../components/home_components/ServicesSection";
import TestimonialSection from "../components/home_components/TestimonialSection";

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
      <section
        className="relative min-h-screen flex items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }} // Ensure bg is correctly imported
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 uppercase tracking-widest">
              Maximize Your Revenue, Minimize Your Hassles
            </h2>
            <h1 className="text-6xl md:text-8xl font-extrabold text-white">
              REVSURE
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Expert medical billing services tailored to your practice's needs.
              Focus on your patients while we handle the rest.
            </p>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-secondary rounded-lg hover:bg-primary/90 transition"
            >
              Get Free Consultation →
            </Link>
          </motion.div>
        </div>
      </section>



      {/* Stats Bar */}
      <section className="bg-primary text-white py-10 relative">
        {/* Arrow Effect */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 
            border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent 
            border-t-[25px] border-t-primary">
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold">1200+</p>
              <p className="text-lg">Providers Served</p>
            </div>
            <div>
              <p className="text-3xl font-bold">100+</p>
              <p className="text-lg">Medical Specialties</p>
            </div>
            <div>
              <p className="text-3xl font-bold">500+</p>
              <p className="text-lg">Certified Coders & Billers</p>
            </div>
            <div>
              <p className="text-3xl font-bold">50</p>
              <p className="text-lg">States Served</p>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <FeatureSection/>

      {/* Services Section */}
      <ServicesSection/>
      
      {/* Clients Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
          <h5 className="text-lg font-bold text-gray-600 uppercase tracking-wider">
            <span className="border-b-2 border-orange-500 pb-1">Our Clients</span>
          </h5>
            {/* <p className="mt-4 text-lg text-secondary/80">
              Trusted by healthcare providers across the country
            </p> */}
          </div>
          <ClientBase/>
        </div>
      </section>

      {/* Testimonial Section */}
      <TestimonialSection/>

    </div>
  );
};

export default Index;