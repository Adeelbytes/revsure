import React, { useState, useEffect } from 'react';
import { Hospital, Clock, Shield, Settings, Users, FileText, Phone, ChartBar, Heart, Building, Stethoscope, DollarSign } from 'lucide-react';

const MedicalBilling = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const specialties = [
    {
      title: "Private & Group Practices",
      icon: Building,
      description: "Tailored solutions for individual and group medical practices",
      color: "blue"
    },
    {
      title: "Hospitals & Urgent Care",
      icon: Hospital,
      description: "Comprehensive billing services for healthcare facilities",
      color: "green"
    },
    {
      title: "Specialty Clinics",
      icon: Stethoscope,
      description: "Specialized billing for various medical specialties",
      color: "purple"
    }
  ];

  const benefits = [
    {
      title: "Cost-Effective Solutions",
      icon: DollarSign,
      description: "Optimize your revenue cycle with affordable, high-quality services tailored to your practice.",
      color: "emerald"
    },
    {
      title: "HIPAA-Compliant & Secure",
      icon: Shield,
      description: "We prioritize data security, ensuring full compliance with industry regulations.",
      color: "blue"
    },
    {
      title: "24/7 Availability",
      icon: Clock,
      description: "Our team works around the clock to keep your revenue cycle running smoothly.",
      color: "indigo"
    },
    {
      title: "Personalized Services",
      icon: Settings,
      description: "Customized solutions to fit the unique needs of your practice.",
      color: "purple"
    },
    {
      title: "Audit Support",
      icon: FileText,
      description: "We help identify inefficiencies, improve billing workflows, and maximize reimbursements.",
      color: "rose"
    }
  ];

  const stats = [
    { value: "98%", label: "Collection Rate" },
    { value: "24/7", label: "Support Available" },
    { value: "15+", label: "Years Experience" },
    { value: "1000+", label: "Happy Clients" }
  ];

  const getColorClasses = (color) => ({
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    green: "bg-green-50 text-green-600 border-green-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
    rose: "bg-rose-50 text-rose-600 border-rose-100"
  })[color];

  return (
    <div className={`w-full transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">
            Medical Billing Services
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Streamline your revenue cycle and maximize reimbursements with RevSure's comprehensive medical billing solutions.
          </p>
          <button className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Phone className="w-5 h-5" />
            <span>Schedule Free Consultation</span>
          </button>
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
                <p className="text-gray-600">{specialty.description}</p>
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
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 py-16">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Revenue Cycle?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Let RevSure handle your medical billing so you can focus on what matters most—your patients.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Phone className="w-5 h-5" />
              <span>Contact Us</span>
            </button>
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