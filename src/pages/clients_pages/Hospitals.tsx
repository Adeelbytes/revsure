import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

const Hospitals = () => {
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
              Hospitals
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-up delay-100">
              RevSure Medical Billing provides comprehensive Hospital Billing Services, ensuring seamless revenue cycle management for hospitals and healthcare systems.
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
            Our expert team specializes in insurance eligibility verification, demographics and charge entry, claim filing, AR follow-ups, and denial management, significantly reducing claim rejections and revenue losses. We meticulously review patient records, assign accurate medical codes, and analyze claim denials to prevent revenue leakage.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-400">
            Our payment posting services ensure that all transactions are accurately recorded, identifying payer issues such as medical necessity denials or prior authorization discrepancies. RevSure also offers provider credentialing services, streamlining payer enrollments, reducing denials, and ensuring faster reimbursements.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-500">
            Additionally, we handle out-of-network negotiations, leveraging our advanced data-driven approach to maximize reimbursement for hospitals. Our team works with cutting-edge RCM software, seamlessly integrating with platforms like Kareo, eClinicalWorks, and Medisoft, allowing hospitals to enhance their billing operations efficiently.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-600">
            By outsourcing hospital billing services to RevSure, healthcare providers benefit from a 99.9% billing accuracy rate, reduced AR days, and increased revenue flow. Our structured processes, quality control measures, and HIPAA-compliant solutions ensure error-free billing and seamless financial operations.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-700">
            With 24/7 customer support and customized reporting schedules, hospitals can gain real-time insights into their financial health while focusing on delivering superior patient care.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-b from-transparent to-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6 animate-fade-in-up">
            Ready to Optimize Your Hospital Billing?
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

export default Hospitals;