import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

const PrivatePractices = () => {
  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[70vh] flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-servicesPrimary/5 via-white to-servicesSecondary/5" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        {/* Floating Shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-reverse" />
        
        {/* Main Content */}
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-6 animate-fade-in-up">
              Private Practices
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-up delay-100">
              RevSure Medical Billing is committed to transforming the financial health of private practices by offering top-tier billing and coding services.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl 
                       hover:bg-secondary transition-all duration-300 hover:scale-105
                       shadow-lg shadow-primary/20 group animate-fade-in-up delay-200"
            >
              <Phone className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
              Contact Us Today
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-10 text-gray-700">
          <p className="text-lg leading-relaxed animate-fade-in-up delay-300">
            We know that managing the revenue cycle can be one of the most challenging aspects of running a medical practice, often leading to lost revenue due to errors in documentation and inefficient processes. At RevSure, we specialize in providing a comprehensive solution that ensures your claims are accurate and promptly processed.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-400">
            Our team prioritizes proper documentation, which is essential for successful claims acceptance. With a proven track record of 99.9% claim acceptance, we take the burden off your shoulders by addressing and correcting any denials and resubmitting claims within 24 hours.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-500">
            In addition to meticulous claim management, we assist with verifying insurance eligibility and benefits, ensuring that your practice doesn't overcharge patients due to missing or inaccurate information. We know that trust is essential in healthcare, and we work to maintain it by reducing errors that can lead to costly refunds and patient dissatisfaction.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-600">
            Our team is also well-versed in the latest codes and compliance standards, keeping your practice up to date and optimized for maximum revenue. We don’t stop at claims – we handle patient statements, answer calls, and take on the time-consuming task of appealing denied claims, allowing your staff to focus more on patient care.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-700">
            By partnering with RevSure, you can enhance your practice's financial performance, increase patient satisfaction, and improve overall operational efficiency. With more revenue and less administrative burden, your practice can thrive in today’s complex healthcare environment.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-800">
            Let RevSure be the partner you can trust to handle the business side of your practice while you focus on delivering exceptional patient care.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-b from-transparent to-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6 animate-fade-in-up">
            Ready to Optimize Your Private Practice Billing?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 animate-fade-in-up delay-100">
            Partner with RevSure to streamline your billing operations, improve cash flow, and focus on delivering exceptional patient care.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl 
                     hover:bg-secondary transition-all duration-300 hover:scale-105
                     shadow-lg shadow-primary/20 group animate-fade-in-up delay-200"
          >
            <Phone className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
            Contact Us Today
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivatePractices;