import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

const ClinicsAndImagingCenters = () => {
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
              Clinics and Imaging Centers
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-up delay-100">
              At RevSure Medical Billing, we understand that every medical specialty has its unique billing challenges, and we tailor our services to meet the needs of a wide range of healthcare providers.
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
            Whether you specialize in family practice, internal medicine, pediatrics, cardiology, behavioral health, or any of the other diverse specialties, we’ve got you covered. We are committed to ensuring that your practice thrives, regardless of the complexities involved in billing for your specific field. From family practices to urology, pain management, ophthalmology, and physical therapy, our team is equipped with the expertise to streamline your revenue cycle and optimize your cash flow.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-400">
            Insurance networks have become increasingly complex and diverse, which allows you to offer better care at more affordable rates for your patients. However, getting accepted into these networks can be tricky. RevSure Medical Billing can help you navigate this process by leveraging our established relationships with a variety of insurance companies. We specialize in negotiating contracts that are beneficial to you, ensuring you secure the best rates for the services you provide.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-500">
            We also understand the intricacies of contracting and credentialing, and we handle these tasks as a full-time priority. Securing the right contract from the start is essential to your practice’s success. A poorly negotiated contract can hurt your revenue and be difficult to amend. With RevSure’s experience and strong network connections, we ensure that you get the best terms, so you can focus on delivering exceptional care to your patients while we manage the billing side of your business.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-600">
            From anesthesia and dermatology to neurology, oncology, and urgent care, RevSure Medical Billing offers specialized services that meet the unique needs of each practice. Our expertise spans across many specialties, including internal medicine, nephrology, musculoskeletal, OB/GYN, podiatry, and more. With RevSure by your side, you can rest assured that your billing processes are in expert hands, allowing you to concentrate on providing the best possible care to your patients.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-b from-transparent to-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6 animate-fade-in-up">
            Ready to Optimize Your Clinic or Imaging Center Billing?
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

export default ClinicsAndImagingCenters;