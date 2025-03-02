import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

const HealthcareSystems = () => {
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
              Healthcare Systems
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-up delay-100">
              Streamline billing operations, accelerate AR recovery, and improve cash flow with RevSure's tailored medical billing solutions for healthcare systems.
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
            In the past decade, hospitals have faced mounting financial pressures due to shrinking margins, escalating operational costs, a shortage of skilled coders, and the constant evolution of healthcare regulations. These challenges have made it more difficult for healthcare organizations to maintain optimal revenue flow and maximize collections. At RevSure Medical Billing, we understand the unique struggles hospitals face, and we position ourselves as a dedicated extension of your team, providing customized and effective solutions that help streamline billing operations, accelerate accounts receivable (AR) recovery, and improve cash flow.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-400">
            RevSure offers comprehensive and tailored medical billing services designed to meet the specific needs of healthcare systems. Our specialized approach ensures that the billing process is not only more efficient but also more accurate, minimizing costly errors that can delay reimbursements. With our deep industry knowledge and expertise, we help hospitals achieve faster, more reliable reimbursements while ensuring compliance with the latest regulations.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-500">
            An inefficient or outdated billing system can severely impact the financial health of your hospital, creating unnecessary delays and revenue losses. By outsourcing your revenue cycle management (RCM) to RevSure, you are making a smart, cost-effective decision to optimize your billing operations and AR recovery. We reduce administrative burdens, allowing your staff to focus on providing exceptional patient care while we take care of the business side.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-600">
            RevSure has built a strong reputation as a trusted provider of RCM services, offering specialized hospital billing solutions that enhance financial performance. Our partnership helps you streamline processes and improve outcomes, increasing reimbursement rates by over 20%. Our full suite of services includes accounts receivable recovery, medical records review, inpatient DRG review, credentialing, prior authorization support, and much more. These services are designed to reduce the complexity of managing your hospital’s revenue cycle and ensure that you are operating at peak efficiency.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-700">
            By letting RevSure Medical Billing handle your revenue cycle challenges, you can free up valuable time and resources, enabling you to focus on what matters most—delivering high-quality patient care. With RevSure, you gain access to cutting-edge solutions, industry-leading expertise, and a commitment to improving your bottom line. Together, we can navigate the complexities of healthcare billing, ensuring your hospital thrives financially while providing excellent care to your patients.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-b from-transparent to-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6 animate-fade-in-up">
            Ready to Optimize Your Revenue Cycle?
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

export default HealthcareSystems;