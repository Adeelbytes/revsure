import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, AlertCircle, DollarSign, FileText, BarChart4, Zap, ClipboardCheck, Clock } from 'lucide-react';

const EmergencyRoom = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Enhanced with more sophisticated gradient and animations */}
      <div className="relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-white to-red-500/5" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-15" />
        
        {/* Floating Shapes - More subtle and refined */}
        <div className="absolute top-20 -right-48 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-blue-500/30 rounded-full animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-red-500/30 rounded-full animate-float" />
        
        {/* Main Content */}
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 animate-fade-in-up">
              Specialized Emergency Billing Solutions
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-red-500 bg-clip-text text-transparent mb-6 animate-fade-in-up">
              Emergency Room
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed animate-fade-in-up delay-100">
              RevSure Medical Billing specializes in comprehensive emergency room billing services for healthcare facilities nationwide. Trusted by large healthcare systems, we provide tailored solutions for both freestanding and hospital emergency rooms, ensuring seamless revenue cycle management (RCM).
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white rounded-xl 
                       hover:from-red-500 hover:to-red-500/90 transition-all duration-300 hover:scale-105
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
                <span className="flex-shrink-0 bg-red-100 p-3 rounded-lg mr-4">
                  <AlertCircle className="h-6 w-6 text-red-500" />
                </span>
                <p className="text-lg leading-relaxed">
                  Our expertise in out-of-network billing sets us apart, allowing us to maximize reimbursements with precision. Our services include patient eligibility verification, medical coding and chart auditing, charge entry, claims submission, insurance negotiations, aggressive follow-ups, accounts receivable recovery, underpaid appeals, AR analysis, patient billing, and THCIC System 13 state data reporting.
                </p>
              </div>
              
              <div className="flex items-start animate-fade-in-up delay-400">
                <span className="flex-shrink-0 bg-blue-100 p-3 rounded-lg mr-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </span>
                <p className="text-lg leading-relaxed">
                  With proven strategies in out-of-network negotiations, we help healthcare providers optimize cash flow and minimize claim rejections through automated billing, proper coding, and adherence to payer regulations. Our emergency room RCM process is designed to enhance efficiency, from insurance eligibility verification and pre-authorizations to claims filing, reimbursement management, denial handling, and insurance appeals.
                </p>
              </div>
              
              <div className="flex items-start animate-fade-in-up delay-500">
                <span className="flex-shrink-0 bg-red-100 p-3 rounded-lg mr-4">
                  <FileText className="h-6 w-6 text-red-500" />
                </span>
                <p className="text-lg leading-relaxed">
                  We also leverage advanced EHR and billing software, such as ePowerDoc, Tsystems, CollaborateMD, Medisoft, Docutap-Experity, eClinicalWorks, NextGen, Kareo, and more, ensuring accuracy and efficiency in billing operations. RevSure stands out due to our deep experience in emergency room billing, working with healthcare facilities of all sizes, including hospital ERs, freestanding ERs, and specialty programs.
                </p>
              </div>
              
              <div className="flex items-start animate-fade-in-up delay-600">
                <span className="flex-shrink-0 bg-blue-100 p-3 rounded-lg mr-4">
                  <BarChart4 className="h-6 w-6 text-primary" />
                </span>
                <p className="text-lg leading-relaxed">
                  Our proven track record includes partnerships with leading healthcare systems and emergency rooms. We deliver HIPAA-compliant, technology-driven solutions designed to improve reimbursement rates, enhance coding accuracy, and streamline the revenue cycle. Our dedicated RCM team works tirelessly to reduce front-end denials to less than 5%, improve cash flow, optimize out-of-network negotiations, and ensure timely follow-ups for faster collections.
                </p>
              </div>
              
              <div className="flex items-start animate-fade-in-up delay-700">
                <span className="flex-shrink-0 bg-red-100 p-3 rounded-lg mr-4">
                  <Zap className="h-6 w-6 text-red-500" />
                </span>
                <p className="text-lg leading-relaxed">
                  Additionally, our services extend beyond emergency room billing to include urgent care and hospital medical billing, private practice billing, and specialty medical billing. By analyzing historical payment data specific to each region, we optimize pricing strategies to maximize reimbursements while maintaining competitive rates for patients.
                </p>
              </div>
              
              <div className="flex items-start animate-fade-in-up delay-800">
                <span className="flex-shrink-0 bg-blue-100 p-3 rounded-lg mr-4">
                  <ClipboardCheck className="h-6 w-6 text-primary" />
                </span>
                <p className="text-lg leading-relaxed">
                  Our expertise in out-of-network claims, coupled with strong industry connections, allows us to secure the best rates and improve financial outcomes for healthcare providers. When you choose RevSure Medical Billing, you gain access to a dedicated account manager, round-the-clock support, and a team committed to delivering efficient, error-free billing services.
                </p>
              </div>
              
              <div className="flex items-start animate-fade-in-up delay-900">
                <span className="flex-shrink-0 bg-red-100 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-red-500" />
                </span>
                <p className="text-lg leading-relaxed">
                  Our scalable solutions, advanced analytics, and structured billing processes ensure long-term success for your practice. Whether you need full RCM services, medical coding and billing, improved documentation, or enhanced data analytics, RevSure is here to help you streamline operations and achieve maximum revenue potential. Let us handle your billing challenges while you focus on delivering quality patient care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Enhanced with subtle pattern and better gradient */}
      <div className="relative bg-gradient-to-b from-white to-blue-50 py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-red-500/5" />
        
        <div className="container mx-auto px-6 text-center relative">
          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-10 border border-gray-100">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-red-500 bg-clip-text text-transparent mb-6 animate-fade-in-up">
              Ready to Optimize Your Emergency Room Billing?
            </h2>
            <p className="text-xl text-gray-600 mx-auto mb-8 animate-fade-in-up delay-100">
              Partner with RevSure to streamline your billing operations, improve cash flow, and focus on delivering exceptional patient care.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white rounded-xl 
                       hover:from-red-500 hover:to-red-500/90 transition-all duration-300 hover:scale-105
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

export default EmergencyRoom;