
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, DollarSign, Clock, CheckCircle, Users, Phone, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

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
    { icon: <Shield className="w-8 h-8" />, title: "Prevents Claim Denials", description: "Incorrect or outdated insurance information is a major cause of rejections. We ensure accurate verification to prevent denials." },
    { icon: <DollarSign className="w-8 h-8" />, title: "Improves Cash Flow", description: "Accurate verification ensures timely and full reimbursements, supporting efficient point-of-care collections." },
    { icon: <Clock className="w-8 h-8" />, title: "Reduces Administrative Burden", description: "Save staff time by avoiding errors and last-minute verifications, allowing your team to focus on patient care." },
    { icon: <CheckCircle className="w-8 h-8" />, title: "Ensures Compliance", description: "Stay updated with insurance policy changes and avoid financial risks, maintaining complete compliance." },
    { icon: <Users className="w-8 h-8" />, title: "Enhances Patient Experience", description: "Provide clarity on costs upfront, reducing billing disputes and improving patient satisfaction." }
  ];

  const process = [
    { title: "Patient Data Collection & Review", description: "We gather patient details, insurance history, and payment records for comprehensive verification." },
    { title: "Primary & Secondary Insurance Verification", description: "We contact payers directly via phone and online portals to verify coverage details." },
    { title: "Policy & Coverage Confirmation", description: "We verify member ID, group ID, co-pays, deductibles, co-insurance, and other benefits thoroughly." },
    { title: "Handle Expired Policies or Issues", description: "If a patient's coverage is expired or incorrect, we actively reach out to resolve it." },
    { title: "Billing System Updates", description: "We update your billing system with verified information for seamless claims processing." }
  ];

  const benefits = [
    "Eliminates payment delays and reduces denied claims",
    "Increases cash collections and improves reimbursement rates",
    "Minimizes staff workload, allowing focus on patient care",
    "Prevents bad debts and enhances financial stability",
    "Supports efficient point-of-care collections"
  ];

  const getAnimationClass = (id) => 
    isIntersecting[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';

  return (
    <div className="min-h-screen ">
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
              <span className="text-servicesPrimary">Eligibility</span>{" "}
              <span className="text-servicesSecondary">Verification</span>{" "}
              <span className="text-servicesPrimary">Services</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Medical billing is essential for healthcare revenue cycle management. Without proper eligibility verification, 
              your practice could face delayed payments, claim denials, and financial losses.
            </p>

            {/* Key Benefits */}
            <div className="space-y-4">
              {[
                "Prevent claim denials and reduce revenue loss",
                "Verify insurance coverage before treatment",
                "Streamline your revenue cycle management"
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
                Comprehensive Verification Services
              </h3>
              <div className="space-y-6">
                <p className="text-gray-600">
                  At RevSure, we offer comprehensive eligibility verification services to confirm insurance coverage, co-pays, 
                  deductibles, and patient financial obligations before treatment begins.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-medium text-servicesPrimary mb-4">Our Expertise Includes:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Insurance coverage verification</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Co-pay and deductible confirmation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Prior authorization management</span>
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
          Why Eligibility Verification is Crucial?
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
            Our Verification Process
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
              Your Savings with Our Services
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
            Don't let eligibility errors impact your revenue
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            At RevSure, we ensure that your practice is financially secure and fully prepared before rendering services.
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



export default EligibilityVerification;