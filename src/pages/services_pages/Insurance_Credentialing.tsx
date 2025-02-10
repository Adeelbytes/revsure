import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  CheckCircle, 
  Clock, 
  FileCheck, 
  Users, 
  Phone,
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  Lock,
  Calendar,
  Network,
  ChevronRight,
  CircleDot,
  DollarSign
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FadeInSection = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${className}`}>
      {children}
    </div>
  );
};

const ProcessStep = ({ number, title, description, isLast = false }) => (
  <div className="relative flex gap-4">
    <div className="flex flex-col items-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
        {number}
      </div>
      {!isLast && <div className="h-full w-0.5 bg-blue-200" />}
    </div>
    <div className="pb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const CredentialingPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      title: "Build Strong Reputation",
      description: "Establish credibility with insurance companies and grow your network.",
      icon: Shield,
      color: "blue"
    },
    {
      title: "Eliminate Payment Delays",
      description: "Ensure consistent revenue with proper credentialing.",
      icon: Clock,
      color: "green"
    },
    {
      title: "Insurance Recognition",
      description: "Get recognized by top insurance providers to increase patient access.",
      icon: BadgeCheck,
      color: "purple"
    },
    {
      title: "Certify Authenticity",
      description: "Prove your legitimacy as a trusted healthcare provider.",
      icon: CheckCircle,
      color: "indigo"
    }
  ];

  const services = [
    {
      title: "Comprehensive Support",
      description: "End-to-end management of the credentialing process.",
      icon: Users,
      color: "rose"
    },
    {
      title: "Error-Free Applications",
      description: "Eliminate mistakes that could lead to delays or denials.",
      icon: ClipboardCheck,
      color: "emerald"
    },
    {
      title: "Compliance Assurance",
      description: "Ensure your practice meets all compliance standards.",
      icon: Lock,
      color: "blue"
    },
    {
      title: "Direct Insurer Collaboration",
      description: "Smooth communication with payers for hassle-free experience.",
      icon: Network,
      color: "violet"
    }
  ];

  const stats = [
    { value: "99%", label: "Success Rate" },
    { value: "24/7", label: "Support" },
    { value: "500+", label: "Providers" },
    { value: "15+", label: "Years Experience" }
  ];

  const getColorClasses = (color) => ({
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    green: "bg-green-50 text-green-600 border-green-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
    rose: "bg-rose-50 text-rose-600 border-rose-100",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
    violet: "bg-violet-50 text-violet-600 border-violet-100"
  })[color];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Insurance Credentialing Services
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Streamline Your Credentialing Process & Get Recognized by Top Insurance Payers
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 transition-all hover:scale-105">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-all hover:scale-105">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <FadeInSection key={index} delay={index * 100}>
              <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-6 py-16">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Credentialing Services?
          </h2>
        </FadeInSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <FadeInSection 
              key={index} 
              delay={index * 100}
            >
              <div
                className={`group p-6 rounded-xl bg-white border shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  hoveredCard === index ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`w-12 h-12 rounded-lg ${getColorClasses(benefit.color)} p-3 mb-4 transition-all duration-300 group-hover:scale-110`}>
                  <benefit.icon className="w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Comprehensive Services
            </h2>
          </FadeInSection>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="group p-6 rounded-xl bg-white border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-lg ${getColorClasses(service.color)} p-3 mb-4 transition-all duration-300 group-hover:scale-110`}>
                    <service.icon className="w-full h-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="container mx-auto px-6 py-16">
        <FadeInSection>
          <Card className="border-none shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardTitle className="text-2xl">Our Credentialing Process</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                <ProcessStep 
                  number="1"
                  title="Initial Assessment"
                  description="Comprehensive evaluation of your current credentialing status and requirements"
                />
                <ProcessStep 
                  number="2"
                  title="Documentation Collection"
                  description="Gathering and organizing all necessary credentials and certifications"
                />
                <ProcessStep 
                  number="3"
                  title="Application Submission"
                  description="Careful submission of applications to insurance providers with attention to detail"
                />
                <ProcessStep 
                  number="4"
                  title="Follow-up & Monitoring"
                  description="Continuous tracking and communication until final approval"
                  isLast
                />
              </div>
            </CardContent>
          </Card>
        </FadeInSection>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="container mx-auto px-6 text-center text-white">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Let our experts handle your credentialing process while you focus on patient care.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 transition-all hover:scale-105">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-all hover:scale-105">
                View Pricing
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default CredentialingPage;