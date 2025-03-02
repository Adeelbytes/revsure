import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChartBar, Shield, Clock, Award, Users, Check, Code, Zap, Building, Hospital, Stethoscope, DollarSign, Settings, FileText, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const MedicalBilling = () => {
  const [isIntersecting, setIsIntersecting] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const getAnimationClass = (id) => 
    isIntersecting[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';

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

  const process = [
    { title: "Claims Submission", description: "We handle the entire claims submission process, ensuring accuracy and timely filing." },
    { title: "Denial Management", description: "Our team proactively manages claim denials and resolves issues to maximize reimbursements." },
    { title: "Payment Posting", description: "We ensure accurate and timely posting of payments to your accounts." },
    { title: "Patient Billing", description: "We manage patient billing and follow-ups to ensure timely collections." },
    { title: "Reporting & Analytics", description: "We provide detailed reports and analytics to help you track your revenue cycle performance." }
  ];

  const benefits = [
    "Eliminate payment delays and ensure consistent revenue",
    "Get recognized by top insurance providers, increasing patient access",
    "Certify your authenticity as a trusted healthcare provider",
    "Streamline paperwork and reduce administrative burden",
    "Ensure compliance with all insurance payer requirements"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-servicesPrimary/5 via-white to-servicesSecondary/5" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        {/* Floating Shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-servicesPrimary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-servicesSecondary/10 rounded-full blur-3xl" />
        
        {/* Main Content */}
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mt-10 mb-10 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-servicesPrimary/10 rounded-full">
                  <Shield className="w-5 h-5 text-servicesPrimary mr-2" />
                  <span className="text-servicesPrimary font-medium">Trusted Healthcare RCM Partner</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold">
                  <span className="text-servicesPrimary">Medical</span>{" "}
                  <span className="text-servicesSecondary">Billing</span>{" "}
                  <span className="text-servicesPrimary">Services</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  At RevSure Medical Billing, we streamline the revenue cycle process, acting as a bridge between healthcare providers and insurance payers. Our end-to-end solutions help eliminate administrative burdens, reduce claim denials, and accelerate reimbursements.
                </p>

                {/* Key Benefits */}
                <div className="space-y-4">
                  {[
                    "Build a strong reputation with insurance companies",
                    "Eliminate payment delays and ensure consistent revenue",
                    "Get recognized by top insurance providers"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Section */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    to="/contact"
                    className="flex items-center px-8 py-4 bg-servicesPrimary text-white rounded-xl 
                             hover:bg-servicesSecondary transition-all duration-300 hover:scale-105
                             shadow-lg shadow-servicesPrimary/20 group"
                  >
                    <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Contact Us Today
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column - Additional Info Card */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl relative z-10">
                  <h3 className="text-2xl font-semibold text-servicesSecondary mb-6">
                    Comprehensive Medical Billing Services
                  </h3>
                  <div className="space-y-6">
                    <p className="text-gray-600">
                      Our expert team provides end-to-end revenue cycle management, combining coding expertise with streamlined processes for maximum efficiency.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="font-medium text-servicesPrimary mb-4">Our Expertise Includes:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-500" />
                          <span>End-to-End Revenue Cycle Management</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-500" />
                          <span>Claims Submission & Denial Management</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-500" />
                          <span>Payment Posting & Patient Billing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-full h-full bg-servicesPrimary/10 rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-full h-full bg-servicesSecondary/10 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-servicesPrimary">
          Why Choose RevSure for Medical Billing?
        </h2>
        <div id="features" data-animate className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 transition-all duration-700 ${getAnimationClass('features')}`}>
          {combinedFeatures.map((feature, index) => (
            <Card key={index} className="group hover:bg-blue-50/50 bg-white transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="text-servicesPrimary group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-servicesSecondary">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-servicesPrimary">
            Our Medical Billing Process
          </h2>
          <div id="process" data-animate className={`space-y-4 transition-all duration-700 ${getAnimationClass('process')}`}>
            {process.map((step, index) => (
              <div 
                key={index}
                className="group flex items-center space-x-6 p-6 bg-white rounded-xl shadow-md
                         hover:shadow-xl transition-all duration-300 hover:scale-102"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-servicesPrimary to-servicesSecondary 
                              text-white rounded-xl flex items-center justify-center
                              group-hover:scale-110 transition-transform duration-300 font-bold text-lg">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-servicesSecondary">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <Card id="benefits" data-animate className={`mb-24 transition-all duration-700 ${getAnimationClass('benefits')}`}>
          <CardHeader>
            <CardTitle className="text-3xl text-center text-servicesPrimary">
              Benefits of Medical Billing Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                  <Check className="text-green-500 w-6 h-6" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="flex flex-col items-center text-center py-16 bg-gradient-to-b from-transparent to-blue-50 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-servicesPrimary">
            Simplify Your Medical Billing Process Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            With RevSure, you don’t have to waste time navigating complex billing requirements. Let our experts handle everything, ensuring your practice gains the recognition and network participation it deserves.
          </p>
          <Link to="/contact"
            className="flex bg-servicesPrimary hover:bg-servicesSecondary text-white px-10 py-4 items-center rounded-xl text-lg
            shadow-lg shadow-servicesPrimary/20 hover:shadow-servicesSecondary/30
            transform transition-all duration-300 hover:scale-105"
          >
            Partner with RevSure Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MedicalBilling;