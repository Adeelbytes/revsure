import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, CheckCircle, Building, FileText, Clock, Shield } from 'lucide-react';

const Hospitals = () => {
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
              Hospitals
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed animate-fade-in-up delay-100">
              RevSure Medical Billing provides comprehensive Hospital Billing Services, ensuring seamless revenue cycle management for hospitals and healthcare systems.
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

      {/* Content Section - Enhanced with cards and visual elements */}
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Visual separator */}
          <div className="flex items-center justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
          
          {/* Enhanced paragraphs with subtle card styling */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-300">
            <p className="text-lg leading-relaxed text-gray-700">
              Our expert team specializes in insurance eligibility verification, demographics and charge entry, claim filing, AR follow-ups, and denial management, significantly reducing claim rejections and revenue losses. We meticulously review patient records, assign accurate medical codes, and analyze claim denials to prevent revenue leakage.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-400">
            <p className="text-lg leading-relaxed text-gray-700">
              Our payment posting services ensure that all transactions are accurately recorded, identifying payer issues such as medical necessity denials or prior authorization discrepancies. RevSure also offers provider credentialing services, streamlining payer enrollments, reducing denials, and ensuring faster reimbursements.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-500">
            <p className="text-lg leading-relaxed text-gray-700">
              Additionally, we handle out-of-network negotiations, leveraging our advanced data-driven approach to maximize reimbursement for hospitals. Our team works with cutting-edge RCM software, seamlessly integrating with platforms like Kareo, eClinicalWorks, and Medisoft, allowing hospitals to enhance their billing operations efficiently.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-600">
            <p className="text-lg leading-relaxed text-gray-700">
              By outsourcing hospital billing services to RevSure, healthcare providers benefit from a 99.9% billing accuracy rate, reduced AR days, and increased revenue flow. Our structured processes, quality control measures, and HIPAA-compliant solutions ensure error-free billing and seamless financial operations.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-700">
            <p className="text-lg leading-relaxed text-gray-700">
              With 24/7 customer support and customized reporting schedules, hospitals can gain real-time insights into their financial health while focusing on delivering superior patient care.
            </p>
          </div>
        </div>
      </div>

      {/* Feature highlights section - New addition */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">99.9% Billing Accuracy</h3>
              <p className="text-gray-600">Minimize errors and maximize reimbursements with our precision billing services</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reduced AR Days</h3>
              <p className="text-gray-600">Accelerate your cash flow with optimized revenue cycle management</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">HIPAA Compliant</h3>
              <p className="text-gray-600">Your data security is our priority with fully compliant processes</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <FileText className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Custom Reporting</h3>
              <p className="text-gray-600">Gain actionable insights with tailored financial reporting</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Enhanced with more depth and texture */}
      <div className="relative py-24 overflow-hidden">
        {/* Enhanced background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-primary/10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        
        {/* Floating elements */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-2xl" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
        
        <div className="container mx-auto px-6 text-center relative">
          <div className="inline-block mb-6 p-2 bg-white/80 backdrop-blur-sm rounded-2xl">
            <Building className="h-16 w-16 text-primary mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            Ready to Optimize Your Hospital Billing?
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-100">
            Partner with RevSure to streamline your billing operations, improve cash flow, and focus on delivering exceptional patient care.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl 
                     hover:bg-secondary transition-all duration-300 hover:scale-105
                     shadow-xl shadow-primary/20 group animate-fade-in-up delay-200"
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