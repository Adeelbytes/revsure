import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

const EmergencyRoom = () => {
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
              Emergency Room
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-up delay-100">
              RevSure Medical Billing specializes in comprehensive emergency room billing services for healthcare facilities nationwide. Trusted by large healthcare systems, we provide tailored solutions for both freestanding and hospital emergency rooms, ensuring seamless revenue cycle management (RCM).
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
            Our expertise in out-of-network billing sets us apart, allowing us to maximize reimbursements with precision. Our services include patient eligibility verification, medical coding and chart auditing, charge entry, claims submission, insurance negotiations, aggressive follow-ups, accounts receivable recovery, underpaid appeals, AR analysis, patient billing, and THCIC System 13 state data reporting.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-400">
            With proven strategies in out-of-network negotiations, we help healthcare providers optimize cash flow and minimize claim rejections through automated billing, proper coding, and adherence to payer regulations. Our emergency room RCM process is designed to enhance efficiency, from insurance eligibility verification and pre-authorizations to claims filing, reimbursement management, denial handling, and insurance appeals.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-500">
            We also leverage advanced EHR and billing software, such as ePowerDoc, Tsystems, CollaborateMD, Medisoft, Docutap-Experity, eClinicalWorks, NextGen, Kareo, and more, ensuring accuracy and efficiency in billing operations. RevSure stands out due to our deep experience in emergency room billing, working with healthcare facilities of all sizes, including hospital ERs, freestanding ERs, and specialty programs.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-600">
            Our proven track record includes partnerships with leading healthcare systems and emergency rooms. We deliver HIPAA-compliant, technology-driven solutions designed to improve reimbursement rates, enhance coding accuracy, and streamline the revenue cycle. Our dedicated RCM team works tirelessly to reduce front-end denials to less than 5%, improve cash flow, optimize out-of-network negotiations, and ensure timely follow-ups for faster collections.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-700">
            Additionally, our services extend beyond emergency room billing to include urgent care and hospital medical billing, private practice billing, and specialty medical billing. By analyzing historical payment data specific to each region, we optimize pricing strategies to maximize reimbursements while maintaining competitive rates for patients.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-800">
            Our expertise in out-of-network claims, coupled with strong industry connections, allows us to secure the best rates and improve financial outcomes for healthcare providers. When you choose RevSure Medical Billing, you gain access to a dedicated account manager, round-the-clock support, and a team committed to delivering efficient, error-free billing services.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-900">
            Our scalable solutions, advanced analytics, and structured billing processes ensure long-term success for your practice. Whether you need full RCM services, medical coding and billing, improved documentation, or enhanced data analytics, RevSure is here to help you streamline operations and achieve maximum revenue potential. Let us handle your billing challenges while you focus on delivering quality patient care.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-b from-transparent to-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6 animate-fade-in-up">
            Ready to Optimize Your Emergency Room Billing?
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

export default EmergencyRoom;