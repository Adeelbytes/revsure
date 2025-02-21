import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, Clock, CheckCircle, Users, Phone, ArrowRight, TrendingUp, 
  BarChart3, Search, Settings, FileText, Check, AlertTriangle, LineChart 
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const DenialManagementPage = () => {
  const [isIntersecting, setIsIntersecting] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      title: "Resolution Time",
      value: "72hrs",
      icon: Clock,
      description: "Quick denial resolution"
    },
    {
      title: "Success Rate",
      value: "95%",
      icon: TrendingUp,
      description: "Claims recovered"
    },
    {
      title: "Revenue Impact",
      value: "+30%",
      icon: BarChart3,
      description: "Revenue improvement"
    },
    {
      title: "Support",
      value: "24/7",
      icon: Users,
      description: "Dedicated assistance"
    }
  ];

  const keyBenefits = [
    {
      title: "Root Cause Analysis",
      description: "Analyze patterns and identify underlying reasons for claim rejections",
      icon: Search,
      items: ["Pattern identification", "Error source detection", "Trend analysis"]
    },
    {
      title: "Revenue Protection",
      description: "Minimize revenue loss through proactive denial management",
      icon: Shield,
      items: ["Reduce costly denials", "Increase collections", "Improve financial stability"]
    },
    {
      title: "Workflow Optimization",
      description: "Streamline processes with cutting-edge billing technology",
      icon: Settings,
      items: ["Automated corrections", "Efficient processing", "Real-time updates"]
    }
  ];

  const whyChooseUs = [
    {
      icon: TrendingUp,
      title: "Proactive Approach",
      description: "Implementation of denial prevention strategies and real-time corrections"
    },
    {
      icon: LineChart,
      title: "Continuous Monitoring",
      description: "Track denial trends and provide detailed statistical insights"
    },
    {
      icon: Shield,
      title: "Payer Compliance",
      description: "Analysis of insurance policies and payment patterns"
    },
    {
      icon: Settings,
      title: "Advanced Technology",
      description: "Cutting-edge billing technology for improved accuracy"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance and regular status updates"
    },
    {
      icon: FileText,
      title: "Comprehensive Appeals",
      description: "Management of all appeal levels for maximum reimbursement"
    }
  ];

  const getAnimationClass = (id) => 
    isIntersecting[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';

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
                  <span className="text-servicesPrimary font-medium">Expert Denial Management</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold">
                  <span className="text-servicesPrimary">Denial</span>{" "}
                  <span className="text-servicesSecondary">Management</span>{" "}
                  <span className="text-servicesPrimary">Services</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  We understand that claim denials are one of the biggest challenges healthcare providers face, 
                  directly impacting cash flow and revenue. Our expert team ensures thorough analysis and swift resolution.
                </p>

                {/* Key Benefits */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Reduce claim denials & maximize reimbursements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Swift resolution within 72 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">95% success rate in claims recovery</span>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    to="/contact"
                    className="flex items-center px-8 py-4 bg-servicesPrimary text-white rounded-xl 
                             hover:bg-servicesSecondary transition-all duration-300 hover:scale-105
                             shadow-lg shadow-servicesPrimary/20 group"
                  >
                    <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl relative z-10">
                  <h3 className="text-2xl font-semibold text-servicesSecondary mb-6">
                    Comprehensive Denial Management
                  </h3>
                  <div className="space-y-6">
                    <p className="text-gray-600">
                      Our expert denial management team ensures that every denied claim is thoroughly analyzed, 
                      identified, corrected, and resubmitted for successful reimbursement.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="font-medium text-servicesPrimary mb-4">Common Denial Causes We Address:</h4>
                      <ul className="space-y-3">
                        {[
                          "Incorrect/missing data",
                          "Coding errors",
                          "Eligibility issues",
                          "Payer policy changes"
                        ].map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span>{item}</span>
                          </li>
                        ))}
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

      {/* Stats Grid */}
      <div className="container  mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 mt-20">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-servicesPrimary" />
                <div className="text-2xl font-bold text-servicesSecondary mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600">{stat.title}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction Section */}
        <div id="intro" data-animate className={`bg-white rounded-xl shadow-lg p-8 mb-12 transition-all duration-700 ${getAnimationClass('intro')}`}>
          <h2 className="text-2xl font-bold mb-6 text-servicesPrimary">Comprehensive Denial Management Solutions</h2>
          <p className="text-gray-600 mb-8">
            Denials can occur due to incorrect or missing data, coding errors, eligibility issues, or payer policy changes. 
            Our expert denial management team ensures that every denied claim is thoroughly analyzed, identified, corrected, 
            and resubmitted for successful reimbursement. By proactively addressing denials and implementing data-driven solutions, 
            we help minimize future claim rejections and streamline your revenue cycle management (RCM).
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-servicesSecondary">Our Approach:</h3>
              <ul className="space-y-3">
                {[
                  "Data-driven solutions",
                  "Proactive denial prevention",
                  "Swift resolution process",
                  "Continuous monitoring"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600 hover:scale-105 transition-transform">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-servicesSecondary">Key Features:</h3>
              <ul className="space-y-3">
                {[
                  "Real-time denial tracking",
                  "Root cause analysis",
                  "Appeals management",
                  "Performance analytics"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600 hover:scale-105 transition-transform">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Key Benefits Section */}
        <h2 className="text-3xl font-bold text-center mb-12 text-servicesPrimary">
          Our Comprehensive Solutions
        </h2>
        <div id="benefits" data-animate className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-all duration-700 ${getAnimationClass('benefits')}`}>
          {keyBenefits.map((benefit, index) => (
            <Card key={index} className="group hover:bg-blue-50/50 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="text-servicesPrimary group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl text-servicesSecondary">
                    {benefit.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-servicesPrimary rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div id="why-choose-us" data-animate className={`mb-12 transition-all duration-700 ${getAnimationClass('why-choose-us')}`}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center text-servicesPrimary">Why Choose RevSure?</CardTitle>
            </CardHeader>
            <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group hover:scale-105 transition-transform">
                    <item.icon className="h-6 w-6 text-servicesSecondary mt-1" />
                    <div>
                      <h3 className="font-semibold text-servicesPrimary mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA Section */}
        <div className="flex flex-col items-center text-center py-16 bg-gradient-to-b from-transparent to-blue-50 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-servicesPrimary">
            Ready to Recover Your Lost Revenue?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Let our experts handle your denial management while you focus on patient care. 
            Get in touch today and let's improve your revenue cycle!
          </p>
          <Link 
            to="/contact"
            className="flex items-center bg-servicesPrimary hover:bg-servicesSecondary text-white px-10 py-4 rounded-xl text-lg
                     shadow-lg shadow-servicesPrimary/20 hover:shadow-servicesSecondary/30
                     transform transition-all duration-300 hover:scale-105 group"
          >
            <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Partner with RevSure Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DenialManagementPage;