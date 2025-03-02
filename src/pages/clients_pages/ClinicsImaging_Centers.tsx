import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Building, FileText, Shield, Users } from 'lucide-react';

const ClinicsAndImagingCenters = () => {
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
              Specialized Medical Billing Solutions
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6 animate-fade-in-up">
              Clinics and Imaging Centers
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed animate-fade-in-up delay-100">
              At RevSure Medical Billing, we understand that every medical specialty has its unique billing challenges, and we tailor our services to meet the needs of a wide range of healthcare providers.
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
                  <Building className="h-6 w-6 text-primary" />
                </span>
                <p className="text-lg leading-relaxed">
                  Whether you specialize in family practice, internal medicine, pediatrics, cardiology, behavioral health, or any of the other diverse specialties, we've got you covered. We are committed to ensuring that your practice thrives, regardless of the complexities involved in billing for your specific field. From family practices to urology, pain management, ophthalmology, and physical therapy, our team is equipped with the expertise to streamline your revenue cycle and optimize your cash flow.
                </p>
              </div>
              
              <div className="flex items-start animate-fade-in-up delay-400">
                <span className="flex-shrink-0 bg-teal-100 p-3 rounded-lg mr-4">
                  <Shield className="h-6 w-6 text-secondary" />
                </span>
                <p className="text-lg leading-relaxed">
                  Insurance networks have become increasingly complex and diverse, which allows you to offer better care at more affordable rates for your patients. However, getting accepted into these networks can be tricky. RevSure Medical Billing can help you navigate this process by leveraging our established relationships with a variety of insurance companies. We specialize in negotiating contracts that are beneficial to you, ensuring you secure the best rates for the services you provide.
                </p>
              </div>
              
              <div className="flex items-start animate-fade-in-up delay-500">
                <span className="flex-shrink-0 bg-blue-100 p-3 rounded-lg mr-4">
                  <FileText className="h-6 w-6 text-primary" />
                </span>
                <p className="text-lg leading-relaxed">
                  We also understand the intricacies of contracting and credentialing, and we handle these tasks as a full-time priority. Securing the right contract from the start is essential to your practice's success. A poorly negotiated contract can hurt your revenue and be difficult to amend. With RevSure's experience and strong network connections, we ensure that you get the best terms, so you can focus on delivering exceptional care to your patients while we manage the billing side of your business.
                </p>
              </div>
              
              <div className="flex items-start animate-fade-in-up delay-600">
                <span className="flex-shrink-0 bg-teal-100 p-3 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-secondary" />
                </span>
                <p className="text-lg leading-relaxed">
                  From anesthesia and dermatology to neurology, oncology, and urgent care, RevSure Medical Billing offers specialized services that meet the unique needs of each practice. Our expertise spans across many specialties, including internal medicine, nephrology, musculoskeletal, OB/GYN, podiatry, and more. With RevSure by your side, you can rest assured that your billing processes are in expert hands, allowing you to concentrate on providing the best possible care to your patients.
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
              Ready to Optimize Your Clinic or Imaging Center Billing?
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

export default ClinicsAndImagingCenters;