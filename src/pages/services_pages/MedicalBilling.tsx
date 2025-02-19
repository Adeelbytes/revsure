import React, { useState, useEffect } from 'react';
import { Hospital, Clock, Shield, Settings, Users, FileText, Phone, ChartBar, Heart, Building, Stethoscope, DollarSign, Check, Award, Code, Zap } from 'lucide-react';
import { Link } from "react-router-dom";

const MedicalBilling = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: "Expert Team",
      icon: Code,
      description: "Our expert coders and billing specialists ensure accuracy and compliance, maximizing your revenue potential while minimizing errors."
    },
    {
      title: "Streamlined Process",
      icon: Zap,
      description: "We act as a bridge between healthcare providers and insurance payers, eliminating administrative burdens and reducing claim denials."
    },
    {
      title: "Swift Resolution",
      icon: Clock,
      description: "Understanding the complexities of medical billing, we offer round-the-clock support to resolve coding and claim issues swiftly."
    }
  ];

  const specialties = [
    {
      title: "Private & Group Practices",
      icon: Building,
      description: "Tailored solutions for individual and group medical practices with dedicated support for practice-specific needs",
      color: "blue",
      features: ["Customized billing workflows", "Dedicated account management", "Practice-specific compliance support"]
    },
    {
      title: "Hospitals & Urgent Care",
      icon: Hospital,
      description: "Comprehensive billing services for healthcare facilities with streamlined solutions for high-volume environments",
      color: "green",
      features: ["High-volume claims processing", "Emergency billing expertise", "Multi-department support"]
    },
    {
      title: "Specialty & Imaging Centers",
      icon: Stethoscope,
      description: "Specialized billing for various medical specialties and imaging centers with custom solutions for specific requirements",
      color: "purple",
      features: ["Specialty-specific coding", "Complex procedure billing", "Insurance verification"]
    }
  ];

  const benefits = [
    {
      title: "Cost-Effective Solutions",
      icon: DollarSign,
      description: "Optimize your revenue cycle with affordable, high-quality services tailored to your practice.",
      color: "emerald",
      details: ["Reduce operational costs", "Maximize reimbursements", "Affordable pricing models"]
    },
    {
      title: "HIPAA-Compliant & Secure",
      icon: Shield,
      description: "We prioritize data security, ensuring full compliance with industry regulations.",
      color: "blue",
      details: ["Full HIPAA compliance", "Secure data handling", "Regular security audits"]
    },
    {
      title: "24/7 Availability",
      icon: Clock,
      description: "Our team works around the clock to keep your revenue cycle running smoothly.",
      color: "indigo",
      details: ["Round-the-clock support", "Swift issue resolution", "Immediate assistance"]
    },
    {
      title: "Personalized Services",
      icon: Settings,
      description: "Customized solutions to fit the unique needs of your practice.",
      color: "purple",
      details: ["Custom workflows", "Practice-specific solutions", "Flexible integration"]
    },
    {
      title: "Audit & Consultation Support",
      icon: FileText,
      description: "We help identify inefficiencies, improve billing workflows, and maximize reimbursements.",
      color: "rose",
      details: ["Regular audits", "Process optimization", "Compliance checks"]
    }
  ];

  const services = [
    {
      title: "Revenue Cycle Management",
      description: "End-to-end management to accelerate reimbursements",
      icon: ChartBar
    },
    {
      title: "Claims Processing",
      description: "Efficient handling of claims to reduce denials",
      icon: FileText
    },
    {
      title: "Coding & Compliance",
      description: "Expert coding to ensure accuracy and compliance",
      icon: Award
    },
    {
      title: "EHR/EMR Integration",
      description: "Seamless integration to enhance efficiency",
      icon: Settings
    }
  ];

  const stats = [
    { value: "98%", label: "Collection Rate" },
    { value: "24/7", label: "Support Available" },
    { value: "15+", label: "Years Experience" },
    { value: "1000+", label: "Happy Clients" }
  ];

  const getColorClasses = (color) => ({
    blue: "bg-#247D60 text-blue-600 border-blue-100",
    green: "bg-green-50 text-green-600 border-green-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
    rose: "bg-rose-50 text-rose-600 border-rose-100"
  })[color];

  return (
    <div className={`w-full transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      {/* Hero Section */}
<div className="relative bg-gradient-to-r from-[#0C969C] to-indigo-600 overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }} />
  </div>

  <div className="relative">
    {/* Main Content */}
    <div className="container mx-auto px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-500 bg-opacity-20 rounded-full mb-8">
            <span className="w-2 h-2 bg-blue-200 rounded-full mr-2"></span>
            <span className="text-blue-100 text-sm font-medium">Trusted by 1000+ Healthcare Providers</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Medical Billing Services
            <span className="block text-xl md:text-2xl font-normal text-blue-200 mt-4">
              Streamline Your Revenue Cycle Management
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            At RevSure Medical Billing, we streamline the revenue cycle process, acting as a bridge between healthcare providers and insurance payers. Our end-to-end medical billing solutions help practices eliminate administrative burdens, reduce claim denials, and accelerate reimbursements.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Consultation</span>
            </Link>
            
            <button className="inline-flex items-center space-x-3 bg-blue-500 bg-opacity-20 text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 border border-blue-400 border-opacity-20 w-full sm:w-auto justify-center">
              <ChartBar className="w-5 h-5" />
              <span>View Our Services</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-blue-400 border-opacity-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
              {[
                { icon: Shield, text: "HIPAA Compliant" },
                { icon: Clock, text: "24/7 Support" },
                { icon: Award, text: "98% Collection Rate" },
                { icon: Users, text: "Expert Team" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 text-blue-100">
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Key Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 p-3 mb-4">
                  <feature.icon className="w-full h-full" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Specialties Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Who We Serve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className={`group p-8 rounded-xl bg-white border shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  hoveredCard === index ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`w-16 h-16 rounded-xl ${getColorClasses(specialty.color)} p-4 mb-6 transition-all duration-300 group-hover:scale-110`}>
                  <specialty.icon className="w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{specialty.title}</h3>
                <p className="text-gray-600 mb-4">{specialty.description}</p>
                <ul className="space-y-2">
                  {specialty.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose RevSure?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-lg ${getColorClasses(benefit.color)} p-3 mb-4 transition-all duration-300 group-hover:scale-110`}>
                <benefit.icon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <ul className="space-y-1">
                {benefit.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 text-sm">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-200 bg-white hover:border-blue-500 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 p-3 mb-4">
                  <service.icon className="w-full h-full" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-gradient-to-r from-[#031716] to-[#0A7075] py-16">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Focus on What Matters Most—Your Patients</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Let RevSure take care of the financial side of healthcare while you focus on providing exceptional patient care.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/contact" className="flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Phone className="w-5 h-5" />
              <span>Contact Us</span>
            </Link>
            <button className="flex items-center space-x-2 bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <ChartBar className="w-5 h-5" />
              <span>View Pricing</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalBilling;