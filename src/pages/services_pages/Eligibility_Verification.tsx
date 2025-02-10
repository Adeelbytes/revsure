import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, DollarSign, Users, Shield, Clock, Phone, ArrowRight } from 'lucide-react';

const EligibilityVerification = () => {
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
    { icon: <Shield className="w-8 h-8" />, title: "Prevents Claim Denials", description: "Eliminate rejections due to incorrect or outdated insurance information" },
    { icon: <DollarSign className="w-8 h-8" />, title: "Improves Cash Flow", description: "Ensure timely and full reimbursements with accurate verification" },
    { icon: <Clock className="w-8 h-8" />, title: "Reduces Administrative Burden", description: "Save staff time by avoiding errors and last-minute verifications" },
    { icon: <CheckCircle className="w-8 h-8" />, title: "Ensures Compliance", description: "Stay updated with insurance policy changes and avoid financial risks" },
    { icon: <Users className="w-8 h-8" />, title: "Enhances Patient Experience", description: "Provide clarity on costs upfront, reducing billing disputes" }
  ];

  const process = [
    { title: "Patient Data Collection & Review", description: "Gather patient details, insurance history, and payment records" },
    { title: "Insurance Verification", description: "Contact payers directly via phone and online portals" },
    { title: "Policy & Coverage Confirmation", description: "Verify member ID, group ID, co-pays, deductibles, and co-insurance" },
    { title: "Handle Expired Policies", description: "Resolve any expired or incorrect coverage issues" },
    { title: "Billing System Updates", description: "Update your billing system with verified information" }
  ];

  const getAnimationClass = (id) => 
    isIntersecting[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 backdrop-blur-xl" />
        <div className="container mx-auto px-4 py-24 relative">
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-900">
              Eligibility Verification Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
              Ensure Smooth Billing & Avoid Claim Denials with RevSure!
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl text-lg
                         shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30
                         transform transition-all duration-300 hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div id="features" data-animate className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 transition-all duration-700 ${getAnimationClass('features')}`}>
          {features.map((feature, index) => (
            <Card key={index} className="group hover:bg-blue-50/50 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-700 transition-colors">
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
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
            Our Verification Process
          </h2>
          <div id="process" data-animate className={`space-y-4 transition-all duration-700 ${getAnimationClass('process')}`}>
            {process.map((step, index) => (
              <div 
                key={index}
                className="group flex items-center space-x-6 p-6 bg-white rounded-xl shadow-md
                         hover:shadow-xl transition-all duration-300 hover:scale-102"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 
                              text-white rounded-xl flex items-center justify-center
                              group-hover:scale-110 transition-transform duration-300 font-bold text-lg">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-blue-900 group-hover:text-blue-700 transition-colors">
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
            <CardTitle className="text-3xl text-center text-blue-900">
              Your Savings with Our Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Eliminates payment delays",
                "Increases cash collections",
                "Minimizes staff workload",
                "Prevents bad debts"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                  <CheckCircle className="text-green-500 w-6 h-6" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center py-16 bg-gradient-to-b from-transparent to-blue-50 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
            Don't let eligibility errors impact your revenue
          </h2>
          <Button 
            className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
                     text-white px-8 py-6 rounded-xl text-lg shadow-lg shadow-blue-600/20 
                     transform transition-all duration-300 hover:scale-105"
          >
            Partner with RevSure Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EligibilityVerification;