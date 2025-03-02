import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

const UrgentCares = () => {
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
              Urgent Cares
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-up delay-100">
              RevSure Medical Billing brings extensive expertise in urgent care billing, delivering comprehensive solutions tailored to the unique challenges of urgent care facilities across the United States.
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
            Our skilled billing professionals understand the complexities of urgent care claims and reimbursement guidelines, ensuring maximum revenue collection in the shortest time possible. If your revenue is not meeting expectations, the root cause could be inefficiencies in your billing process—RevSure is here to optimize it.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-400">
            Our urgent care billing services cover accurate data entry, ensuring seamless claim completion with both electronic and paper filing in compliance with insurance carrier requirements. We provide regular reports customized to each practice’s needs and conduct timely payment audits to guarantee maximum reimbursements.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-500">
            Our appeals management process ensures that incorrect payments or denied claims are swiftly corrected and resubmitted for proper reimbursement. Additionally, we maintain up-to-date fee schedules that align with inflation and cost-of-living adjustments, ensuring optimal insurance reimbursements.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-600">
            RevSure’s revenue cycle management (RCM) process for urgent care centers is designed to enhance efficiency and financial stability. We conduct comprehensive chart reviews, verify patient demographics and insurance benefits, assign accurate CPT codes and modifiers, and ensure compliance with Medicare and HIPAA regulations.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-700">
            Our claim submission and denial management processes ensure swift resolution, with claims followed up within 30 days and outstanding medical claims actively monitored. Choosing RevSure for urgent care RCM means partnering with a company that prioritizes billing accuracy, revenue maximization, and claim efficiency.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-800">
            Our expertise in clinical documentation and workflow management allows us to implement best practices in coding, billing, and collections from the start. By outsourcing your urgent care billing to us, you benefit from a 99.9% billing accuracy rate, total collections of up to 98%, a significant reduction in claim denials, and a streamlined A/R process with a 30% decrease in outstanding payments.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-900">
            We also ensure complete data protection, transparency in fees, and personalized services with no unauthorized write-offs or modifications. RevSure integrates seamlessly with your existing billing software, eliminating downtime, training costs, and operational disruptions.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-1000">
            We support a range of industry-leading RCM and EHR software, including Kareo, Docutap, CollaborateMD, eClinicalWorks, AdvancedMD, and Medisoft, ensuring flexibility and efficiency. Our structured billing processes and strict quality control measures guarantee error-free revenue cycle management, helping you focus on patient care while we handle your financial health.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-1100">
            Let RevSure be your trusted partner in urgent care billing, maximizing your reimbursements and streamlining your practice’s operations.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-b from-transparent to-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6 animate-fade-in-up">
            Ready to Optimize Your Urgent Care Billing?
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

export default UrgentCares;