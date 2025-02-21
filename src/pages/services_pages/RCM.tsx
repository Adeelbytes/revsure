import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  CheckCircle,
  Phone,
  ArrowRight,
  Calendar,
  FileText,
  DollarSign,
  ClipboardList,
  PieChart,
  ChartBar,
  Mail,
  Users,
  Clock,
  FileCheck
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

  const RCMServices = () => {
    const [getAnimationClass] = useState(() => (id) => ''); // Animation helper

    const features = [
      {
        icon: <Calendar className="w-8 h-8" />,
        title: "Patient Scheduling",
        description: "Streamlined appointment management system that minimizes wait times and optimizes clinic workflow efficiency."
      },
      {
        icon: <Shield className="w-8 h-8" />,
        title: "Eligibility Verification",
        description: "Comprehensive insurance verification including co-pays, deductibles, and coverage eligibility checks."
      },
      {
        icon: <FileText className="w-8 h-8" />,
        title: "Medical Coding",
        description: "Expert certified coders ensure compliance with ICD-10 & CPT guidelines for maximum reimbursement."
      },
      {
        icon: <DollarSign className="w-8 h-8" />,
        title: "Payment Processing",
        description: "Quick ERA/EOB payment posting within 24-48 hours with dual-level quality auditing."
      },
      {
        icon: <PieChart className="w-8 h-8" />,
        title: "Performance Analytics",
        description: "Detailed financial reporting and analytics for data-driven decision making."
      },
      {
        icon: <Clock className="w-8 h-8" />,
        title: "24/7 Support",
        description: "Round-the-clock access to dedicated account managers for continuous assistance."
      }
    ];

    const process = [
      {
        title: "Initial Documentation",
        description: "Collect and verify all patient demographics and insurance information for accurate processing."
      },
      {
        title: "Verification Process",
        description: "Thorough insurance eligibility verification and benefits check before service delivery."
      },
      {
        title: "Claim Submission",
        description: "Clean claim submission with 99% accuracy rate to ensure quick reimbursement."
      },
      {
        title: "Payment Processing",
        description: "Efficient payment posting and reconciliation within 48 hours of receipt."
      },
      {
        title: "Follow-up Management",
        description: "Proactive claim follow-up and denial management to maximize collections."
      }
    ];

      const benefits = [
        "Reduced claim denials and rejections",
        "Faster reimbursement cycles",
        "Improved cash flow management",
        "Enhanced patient satisfaction",
        "Regulatory compliance assurance",
        "Detailed financial reporting",
        "Quality Control & Auditing (Mention of audits & compliance is covered)",
        "Accounts Receivable (AR) Follow-Up (Focus on outstanding claims)",
        "Monthly Patient Statements & Collections (Handling patient payments directly)",
        "24/7 Support with Dedicated Account Managers"
      ];

    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative overflow-hidden min-h-[90vh] flex items-center">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-servicesPrimary/5 via-white to-servicesSecondary/5" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          
          {/* Floating Shapes */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-servicesPrimary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-servicesSecondary/10 rounded-full blur-3xl" />
          
          {/* Main Content */}
          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mt-10 mb-10 mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <div className="space-y-8">
                  <div className="inline-flex items-center px-4 py-2 bg-servicesPrimary/10 rounded-full">
                    <Shield className="w-5 h-5 text-servicesPrimary mr-2" />
                    <span className="text-servicesPrimary font-medium">Trusted Healthcare RCM Partner</span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-7xl font-bold">
                    <span className="text-servicesPrimary">Revenue</span>{" "}
                    <span className="text-servicesSecondary">Cycle</span>{" "}
                    <span className="text-servicesPrimary">Management</span>
                  </h1>

                  <p className="text-xl text-gray-600 leading-relaxed">
                    Maximize your revenue and improve reimbursement efficiency with our comprehensive RCM services. We handle the complete revenue cycle so you can focus on patient care.
                  </p>

                  <div className="space-y-4">
                    {[
                      "99% Clean claim rate for faster payments",
                      "Comprehensive eligibility verification",
                      "Expert medical coding and documentation"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link
                      to="/contact"
                      className="flex items-center px-8 py-4 bg-servicesPrimary text-white rounded-xl 
                              hover:bg-servicesSecondary transition-all duration-300 hover:scale-105
                              shadow-lg shadow-servicesPrimary/20 group"
                    >
                      <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                      Contact Us Today
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Right Column */}
                <div className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-xl relative z-10">
                    <h3 className="text-2xl font-semibold text-servicesSecondary mb-6">
                      Comprehensive RCM Services
                    </h3>
                    <div className="space-y-6">
                      <p className="text-gray-600">
                        Our end-to-end revenue cycle management services ensure maximum reimbursement while maintaining compliance and improving patient satisfaction.
                      </p>
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h4 className="font-medium text-servicesPrimary mb-4">Key Services Include:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span>Complete claims management</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span>Denial management & appeals</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span>AR follow-up & reconciliation</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-full h-full bg-servicesPrimary/10 rounded-2xl -z-10" />
                  <div className="absolute -bottom-4 -left-4 w-full h-full bg-servicesSecondary/10 rounded-2xl -z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-servicesPrimary">
            Comprehensive RCM Solutions
          </h2>
          <div id="features" data-animate className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 transition-all duration-700 ${getAnimationClass('features')}`}>
            {features.map((feature, index) => (
              <Card key={index} className="group hover:bg-blue-50/50 bg-white transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="text-servicesPrimary group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl text-servicesSecondary">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-center mb-12 text-servicesPrimary">
              Our RCM Process
            </h2>
            <div id="process" data-animate className={`space-y-4 transition-all duration-700 ${getAnimationClass('process')}`}>
              {process.map((step, index) => (
                <div 
                  key={index}
                  className="group flex items-center space-x-6 p-6 bg-white rounded-xl shadow-md
                          hover:shadow-xl transition-all duration-300 hover:scale-102"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-servicesPrimary to-servicesSecondary 
                                text-white rounded-xl flex items-center justify-center
                                group-hover:scale-110 transition-transform duration-300 font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-servicesSecondary">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <Card id="benefits" data-animate className={`mb-24 bg-white shadow-grey-800 shadow-lg transition-all duration-700 ${getAnimationClass('benefits')}`}>
            <CardHeader>
              <CardTitle className="text-3xl text-center text-servicesPrimary">
                Benefits of Our RCM Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                    <CheckCircle className="text-green-500 w-6 h-6" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="flex flex-col items-center text-center py-16 bg-gradient-to-b from-transparent to-blue-50 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-servicesPrimary">
              Transform Your Revenue Cycle Management Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Partner with RevSure to optimize your revenue cycle and improve your financial performance.
            </p>
            <Link to="/contact"
              className="flex bg-servicesPrimary hover:bg-servicesSecondary text-white px-10 py-4 items-center rounded-xl text-lg
              shadow-lg shadow-servicesPrimary/20 hover:shadow-servicesSecondary/30
              transform transition-all duration-300 hover:scale-105"
            >
              Get Started with RevSure
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
        
      </div>
      
    );
  };

export default RCMServices;