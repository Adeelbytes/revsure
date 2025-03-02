import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, LineChart, Stethoscope, CreditCard, Hospital, ClipboardList } from 'lucide-react';

const PrivatePractices = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Enhanced with more sophisticated gradient and animations */}
      <div className="relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-white to-teal-500/10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-15" />
        
        {/* Floating Shapes - More subtle and refined */}
        <div className="absolute top-20 -right-48 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-blue-500/30 rounded-full animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-teal-500/30 rounded-full animate-float" />
        
        {/* Main Content */}
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 animate-fade-in-up">
              Revenue Cycle Management Solutions
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6 animate-fade-in-up">
              Private Practices
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed animate-fade-in-up delay-100">
              RevSure Medical Billing is committed to transforming the financial health of private practices by offering top-tier billing and coding services.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white rounded-xl 
                       hover:from-secondary hover:to-secondary/90 transition-all duration-300 hover:scale-105
                       shadow-lg shadow-primary/20 group animate-fade-in-up delay-200"
            >
              <Phone className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
              Contact Us Today
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Content Section - Enhanced with card-based design */}
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-10 mb-16">
            <div className="space-y-8 text-gray-700">
              <div className="flex items-start animate-fade-in-up delay-300">
                <span className="flex-shrink-0 bg-blue-100 p-3 rounded-lg mr-4">
                  <Hospital className="h-6 w-6 text-primary" />
                </span>
                <p className="text-lg leading-relaxed">
                  We know that managing the revenue cycle can be one of the most challenging aspects of running a medical practice, often leading to lost revenue due to errors in documentation and inefficient processes. At RevSure, we specialize in providing a comprehensive solution that ensures your claims are accurate and promptly processed.
                </p>
              </div>
              
              <div className="flex items-start animate-fade-in-up delay-400">
                <span className="flex-shrink-0 bg-teal-100 p-3 rounded-lg mr-4">
                  <Stethoscope className="h-6 w-6 text-secondary" />
                </span>
                <p className="text-lg leading-relaxed">
                  Our team prioritizes proper documentation, which is essential for successful claims acceptance. With a proven track record of 99.9% claim acceptance, we take the burden off your shoulders by addressing and correcting any denials and resubmitting claims within 24 hours.
                </p>
              </div>
              
              <div className="flex items-start animate-fade-in-up delay-500">
                <span className="flex-shrink-0 bg-blue-100 p-3 rounded-lg mr-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </span>
                <p className="text-lg leading-relaxed">
                  In addition to meticulous claim management, we assist with verifying insurance eligibility and benefits, ensuring that your practice doesn't overcharge patients due to missing or inaccurate information. We know that trust is essential in healthcare, and we work to maintain it by reducing errors that can lead to costly refunds and patient dissatisfaction.
                </p>
              </div>
              
              <div className="flex items-start animate-fade-in-up delay-600">
                <span className="flex-shrink-0 bg-teal-100 p-3 rounded-lg mr-4">
                  <LineChart className="h-6 w-6 text-secondary" />
                </span>
                <p className="text-lg leading-relaxed">
                  Our team is also well-versed in the latest codes and compliance standards, keeping your practice up to date and optimized for maximum revenue. We don't stop at claims – we handle patient statements, answer calls, and take on the time-consuming task of appealing denied claims, allowing your staff to focus more on patient care.
                </p>
              </div>
              
              <div className="flex items-start animate-fade-in-up delay-700">
                <span className="flex-shrink-0 bg-blue-100 p-3 rounded-lg mr-4">
                  <ClipboardList className="h-6 w-6 text-primary" />
                </span>
                <p className="text-lg leading-relaxed">
                  By partnering with RevSure, you can enhance your practice's financial performance, increase patient satisfaction, and improve overall operational efficiency. With more revenue and less administrative burden, your practice can thrive in today's complex healthcare environment. Let RevSure be the partner you can trust to handle the business side of your practice while you focus on delivering exceptional patient care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Enhanced with subtle pattern and better gradient */}
      <div className="relative bg-gradient-to-b from-white to-blue-50 py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
        
        <div className="container mx-auto px-6 text-center relative">
          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-10 border border-gray-100">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6 animate-fade-in-up">
              Ready to Optimize Your Private Practice Billing?
            </h2>
            <p className="text-xl text-gray-600 mx-auto mb-8 animate-fade-in-up delay-100">
              Partner with RevSure to streamline your billing operations, improve cash flow, and focus on delivering exceptional patient care.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white rounded-xl 
                       hover:from-secondary hover:to-secondary/90 transition-all duration-300 hover:scale-105
                       shadow-lg shadow-primary/20 group animate-fade-in-up delay-200"
            >
              <Phone className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
              Contact Us Today
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivatePractices;