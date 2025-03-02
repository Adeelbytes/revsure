import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, LineChart, Stethoscope, CreditCard, Hospital, ClipboardList } from 'lucide-react';

const HealthcareSystems = () => {
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
              Healthcare Systems
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed animate-fade-in-up delay-100">
              Streamline billing operations, accelerate AR recovery, and improve cash flow with RevSure's tailored medical billing solutions for healthcare systems.
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
                  In the past decade, hospitals have faced mounting financial pressures due to shrinking margins, escalating operational costs, a shortage of skilled coders, and the constant evolution of healthcare regulations. These challenges have made it more difficult for healthcare organizations to maintain optimal revenue flow and maximize collections. At RevSure Medical Billing, we understand the unique struggles hospitals face, and we position ourselves as a dedicated extension of your team, providing customized and effective solutions that help streamline billing operations, accelerate accounts receivable (AR) recovery, and improve cash flow.
                </p>
              </div>
              
              <div className="flex items-start animate-fade-in-up delay-400">
                <span className="flex-shrink-0 bg-teal-100 p-3 rounded-lg mr-4">
                  <Stethoscope className="h-6 w-6 text-secondary" />
                </span>
                <p className="text-lg leading-relaxed">
                  RevSure offers comprehensive and tailored medical billing services designed to meet the specific needs of healthcare systems. Our specialized approach ensures that the billing process is not only more efficient but also more accurate, minimizing costly errors that can delay reimbursements. With our deep industry knowledge and expertise, we help hospitals achieve faster, more reliable reimbursements while ensuring compliance with the latest regulations.
                </p>
              </div>
              
              <div className="flex items-start animate-fade-in-up delay-500">
                <span className="flex-shrink-0 bg-blue-100 p-3 rounded-lg mr-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </span>
                <p className="text-lg leading-relaxed">
                  An inefficient or outdated billing system can severely impact the financial health of your hospital, creating unnecessary delays and revenue losses. By outsourcing your revenue cycle management (RCM) to RevSure, you are making a smart, cost-effective decision to optimize your billing operations and AR recovery. We reduce administrative burdens, allowing your staff to focus on providing exceptional patient care while we take care of the business side.
                </p>
              </div>
              
              <div className="flex items-start animate-fade-in-up delay-600">
                <span className="flex-shrink-0 bg-teal-100 p-3 rounded-lg mr-4">
                  <LineChart className="h-6 w-6 text-secondary" />
                </span>
                <p className="text-lg leading-relaxed">
                  RevSure has built a strong reputation as a trusted provider of RCM services, offering specialized hospital billing solutions that enhance financial performance. Our partnership helps you streamline processes and improve outcomes, increasing reimbursement rates by over 20%. Our full suite of services includes accounts receivable recovery, medical records review, inpatient DRG review, credentialing, prior authorization support, and much more. These services are designed to reduce the complexity of managing your hospital's revenue cycle and ensure that you are operating at peak efficiency.
                </p>
              </div>
              
              <div className="flex items-start animate-fade-in-up delay-700">
                <span className="flex-shrink-0 bg-blue-100 p-3 rounded-lg mr-4">
                  <ClipboardList className="h-6 w-6 text-primary" />
                </span>
                <p className="text-lg leading-relaxed">
                  By letting RevSure Medical Billing handle your revenue cycle challenges, you can free up valuable time and resources, enabling you to focus on what matters most—delivering high-quality patient care. With RevSure, you gain access to cutting-edge solutions, industry-leading expertise, and a commitment to improving your bottom line. Together, we can navigate the complexities of healthcare billing, ensuring your hospital thrives financially while providing excellent care to your patients.
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
              Ready to Optimize Your Revenue Cycle?
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

export default HealthcareSystems;