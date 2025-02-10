import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Clock, DollarSign, HeartPulse, Phone, Shield, Users, FileText, ChartBar, Calendar, BadgeCheck } from 'lucide-react';

const RCMServices = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { 
      title: "Patient Appointments & Scheduling",
      description: "Streamlined patient scheduling to minimize wait times and maintain efficient clinic workflow.",
      icon: Calendar,
      color: "blue"
    },
    {
      title: "Medical Eligibility Verification",
      description: "Insurance verification including co-pays, deductibles, coinsurance, and coverage eligibility.",
      icon: BadgeCheck,
      color: "green"
    },
    {
      title: "Medical Coding & Documentation",
      description: "Certified coders ensure compliance with ICD-10 & CPT coding guidelines.",
      icon: FileText,
      color: "purple"
    },
    {
      title: "Payment Processing",
      description: "ERA/EOB payments posted within 24-48 hours with two levels of quality auditing.",
      icon: DollarSign,
      color: "yellow"
    },
    {
      title: "Quality Control & Auditing",
      description: "Multi-level quality checks ensure accuracy at every stage of the revenue cycle.",
      icon: Shield,
      color: "red"
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive reports and analytics for informed decision-making.",
      icon: ChartBar,
      color: "indigo"
    }
  ];

  const stats = [
    { value: "99%", label: "Clean Claim Rate" },
    { value: "24/7", label: "Support Available" },
    { value: "48hrs", label: "Max Processing Time" },
    { value: "30+", label: "Years Experience" }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "bg-blue-50 text-blue-600 hover:bg-blue-100",
      green: "bg-green-50 text-green-600 hover:bg-green-100",
      purple: "bg-purple-50 text-purple-600 hover:bg-purple-100",
      yellow: "bg-yellow-50 text-yellow-600 hover:bg-yellow-100",
      red: "bg-red-50 text-red-600 hover:bg-red-100",
      indigo: "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
    };
    return colorMap[color];
  };

  return (
    <div className={`w-full max-w-7xl mx-auto p-6 space-y-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white"><div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h24v24H0z\' fill=\'none\'/%3E%3Cpath d=\'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\' stroke=\'rgba(255,255,255,0.1)\' fill=\'none\'/%3E%3C/svg%3E')] bg-opacity-30">
      </div>
        <div className="relative p-12 text-center space-y-6">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">
            Revenue Cycle Management
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Maximize Revenue & Improve Reimbursement Efficiency with RevSure!
          </p>
          <button className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Stats Section */}
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

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`group p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
              hoveredStep === index ? 'scale-105' : ''
            }`}
            onMouseEnter={() => setHoveredStep(index)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            <div className="flex flex-col space-y-4">
              <div className={`w-12 h-12 rounded-lg ${getColorClasses(service.color)} p-3 transition-all duration-300 group-hover:scale-110`}>
                <service.icon className="w-full h-full" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white"><div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h24v24H0z\' fill=\'none\'/%3E%3Cpath d=\'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\' stroke=\'rgba(255,255,255,0.1)\' fill=\'none\'/%3E%3C/svg%3E')] bg-opacity-30">
      </div>
        <div className="relative p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Optimize Your Revenue Cycle?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Connect with our experts and discover how RevSure can transform your healthcare revenue management.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Phone className="w-5 h-5" />
              <span>Schedule a Demo</span>
            </button>
            <button className="flex items-center space-x-2 bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Users className="w-5 h-5" />
              <span>Contact Sales</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RCMServices;