import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileText, Clock, CheckCircle, Users, Phone, ArrowRight, ClipboardCheck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const CredentialingPage = () => {
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

  const features = [
    { icon: <Shield className="w-8 h-8" />, title: "Build Strong Reputation", description: "Establish credibility with insurance companies and ensure timely payments." },
    { icon: <FileText className="w-8 h-8" />, title: "Error-Free Applications", description: "We eliminate mistakes that could lead to delays or denials." },
    { icon: <ClipboardCheck className="w-8 h-8" />, title: "Compliance Assurance", description: "Ensure your practice meets all compliance standards, avoiding penalties." },
    { icon: <Users className="w-8 h-8" />, title: "Direct Collaboration", description: "Smooth communication with payers for a hassle-free credentialing experience." },
    { icon: <Clock className="w-8 h-8" />, title: "Seamless Transition", description: "Minimal disruptions so you can start billing payers without delays." }
  ];

  const process = [
    { title: "Application Preparation", description: "We gather and prepare all necessary documents for credentialing applications." },
    { title: "Submission & Follow-Ups", description: "We submit applications and maintain ongoing communication with insurers." },
    { title: "License & Certification Updates", description: "We ensure your credentials remain valid and up to date." },
    { title: "Contract Compliance", description: "We verify that all payer agreements align with your practice’s needs." },
    { title: "Approval & Onboarding", description: "We ensure a smooth transition to in-network status with minimal disruptions." }
  ];

  const benefits = [
    "Eliminate payment delays and ensure consistent revenue",
    "Get recognized by top insurance providers, increasing patient access",
    "Certify your authenticity as a trusted healthcare provider",
    "Streamline paperwork and reduce administrative burden",
    "Ensure compliance with all insurance payer requirements"
  ];

  const getAnimationClass = (id) => 
    isIntersecting[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';

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
                  <span className="text-servicesPrimary">Insurance</span>{" "}
                  <span className="text-servicesSecondary">Credentialing</span>{" "}
                  <span className="text-servicesPrimary">Services</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  At RevSure Medical Billing, we take the hassle out of insurance credentialing so you can focus on what truly matters—patient care. Credentialing is a time-consuming and complex process, requiring meticulous attention to detail and strict adherence to insurance payer requirements. A single mistake can result in delays, application rejections, and loss of revenue. That’s why we offer a seamless, end-to-end credentialing solution to ensure your practice is properly recognized by insurance networks without unnecessary delays.
                </p>

                {/* Key Benefits */}
                <div className="space-y-4">
                  {[
                    "Build a strong reputation with insurance companies",
                    "Eliminate payment delays and ensure consistent revenue",
                    "Get recognized by top insurance providers"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
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
                    Comprehensive Credentialing Services
                  </h3>
                  <div className="space-y-6">
                    <p className="text-gray-600">
                      Insurance credentialing is essential for building a strong reputation with payers and ensuring timely payments. Without proper credentialing, providers may face claim denials and payment bottlenecks that can impact cash flow.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="font-medium text-servicesPrimary mb-4">Our Expertise Includes:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>End-to-End Credentialing Assistance</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>Regular Follow-Ups with Insurers</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>License & Certification Updates</span>
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
          Why Choose RevSure for Credentialing?
        </h2>
        <div id="features" data-animate className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 transition-all duration-700 ${getAnimationClass('features')}`}>
          {features.map((feature, index) => (
            <Card key={index} className="group hover:bg-blue-50/50 bg-white transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="text-servicesPrimary group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
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
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-servicesPrimary">
            Our Credentialing Process
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
              Benefits of Insurance Credentialing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                  <CheckCircle className="text-green-500 w-6 h-6" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="flex flex-col items-center text-center py-16 bg-gradient-to-b from-transparent to-blue-50 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-servicesPrimary">
            Simplify Your Credentialing Process Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            With RevSure, you don’t have to waste time navigating complex credentialing requirements. Let our experts handle everything, ensuring your practice gains the recognition and network participation it deserves.
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

export default CredentialingPage;