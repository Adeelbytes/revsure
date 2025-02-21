

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChartBar, Shield, Clock, Award, Users, Check, Code, Zap, Building, Hospital, Stethoscope, DollarSign, Settings, FileText } from 'lucide-react';

const MedicalBilling = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { value: "98%", label: "Collection Rate" },
    { value: "24/7", label: "Support Available" },
    { value: "15+", label: "Years Experience" },
    { value: "1000+", label: "Happy Clients" }
  ];

  const combinedFeatures = [
    {
      title: "Comprehensive Medical Billing Solutions",
      icon: Code,
      description: "Our expert team provides end-to-end revenue cycle management, combining coding expertise with streamlined processes for maximum efficiency. We handle everything from claims processing to compliance management, ensuring optimal reimbursement rates while reducing administrative burden.",
      benefits: ["Expert coding & billing specialists", "Streamlined claim processing", "24/7 support & resolution", "HIPAA-compliant systems"]
    },
    {
      title: "Specialized Healthcare Solutions",
      icon: Hospital,
      description: "Whether you're a private practice, hospital, or specialty center, we offer tailored billing solutions to meet your unique needs. Our services adapt to various healthcare environments, ensuring optimal revenue cycle management for every specialty.",
      benefits: ["Custom practice solutions", "Multi-specialty support", "High-volume processing", "Specialty-specific coding"]
    },
    {
      title: "Revenue Optimization & Compliance",
      icon: ChartBar,
      description: "Maximize your practice's financial performance with our comprehensive revenue optimization services. We combine cutting-edge technology with expert knowledge to ensure compliance while maximizing reimbursements.",
      benefits: ["Increased collection rates", "Reduced denial rates", "Regular audits", "Compliance monitoring"]
    }
  ];

  return (
    <div className={`w-full transition-opacity bg-servicesPrimary duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section - Kept as is for strong visual impact */}
      <div className="relative bg-gradient-to-r from-[#0C969C] to-indigo-600 overflow-hidden">
        <div className="relative">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500 bg-opacity-20 rounded-full mb-6">
                <span className="w-2 h-2 bg-blue-200 rounded-full mr-2"></span>
                <span className="text-blue-100 text-sm font-medium">Trusted by 1000+ Healthcare Providers</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Medical Billing Services
                <span className="block text-xl md:text-2xl font-normal text-blue-200 mt-4">
                  Streamline Your Revenue Cycle Management
                </span>
              </h1>

              <p className="text-lg text-blue-100 mb-8">
                At RevSure Medical Billing, we streamline the revenue cycle process, acting as a bridge between healthcare providers and insurance payers. Our end-to-end solutions help eliminate administrative burdens, reduce claim denials, and accelerate reimbursements.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 ">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center space-x-3 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto justify-center transition-transform transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 " />
                  <span>Get Free Consultation</span>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="p-4 rounded-xl bg-white shadow-lg text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Combined Features Section */}
      <div className="bg-servicesPrimary py-12">
        <div className="container  mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {combinedFeatures.map((feature, index) => (
              <div key={index} className="p-6 transition-transform transform hover:scale-105 rounded-xl bg-white shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 p-3 mb-4">
                  <feature.icon className="w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-12">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Focus on What Matters Most—Your Patients</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-6">
            Let RevSure take care of the financial side of healthcare while you focus on providing exceptional patient care.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/contact" className="flex items-center transition-transform transform hover:scale-105 space-x-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300">
              <Phone className="w-5 h-5" />
              <span>Contact Us</span>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};



export default MedicalBilling;