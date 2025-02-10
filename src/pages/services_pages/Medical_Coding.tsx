import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Phone, ArrowRight, Building, Hospital, Stethoscope, Clock, Shield, DollarSign, ChevronDown } from 'lucide-react';

const AnimatedCard = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      {children}
    </div>
  );
};

const MedicalCodingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "Certified & Experienced Coders",
      description: "Our team is proficient in all major coding systems, ensuring accuracy and compliance.",
      icon: Shield
    },
    {
      title: "Error-Free & Compliant Coding",
      description: "We use a meticulous process to minimize claim rejections and denials.",
      icon: CheckCircle
    },
    {
      title: "Maximized Revenue Collection",
      description: "Our accurate coding directly translates to faster reimbursements and improved cash flow.",
      icon: DollarSign
    },
    {
      title: "Specialty-Specific Coding",
      description: "Whether it's cardiology, orthopedics, dermatology, or any other specialty, we apply precise coding techniques.",
      icon: Stethoscope
    },
    {
      title: "Real-Time Coding Updates",
      description: "Stay informed with regular updates and insights into coding changes affecting your practice.",
      icon: Clock
    },
    {
      title: "End-to-End Coding Support",
      description: "From claim preparation and submission to audits and compliance checks, we handle it all.",
      icon: Building
    }
  ];

  const stats = [
    { value: "99%", label: "Accuracy Rate" },
    { value: "24h", label: "Response Time" },
    { value: "50+", label: "Specialties Covered" },
    { value: "1M+", label: "Claims Processed" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Sticky Header */}
      

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Medical Coding Services
            </h1>
            <p className="text-2xl mb-8 text-blue-100 animate-slide-up">
              Accurate coding is the foundation of a successful revenue cycle!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-bounce-in">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all w-full sm:w-auto">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us Today
              </Button>
              <Button size="lg" variant="outline" className="border-white text-primary hover:bg-black hover:scale-105 transition-all w-full sm:w-auto">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-12 animate-bounce">
              <ChevronDown className="h-8 w-8 mx-auto text-white/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-12">
        <AnimatedCard>
          <Card className="bg-white shadow-xl">
            <CardContent className="p-0">
              <div className="grid grid-cols-2 md:grid-cols-4">
                {stats.map((stat, index) => (
                  <div key={index} className="p-8 text-center border-r last:border-r-0 border-gray-100 hover:bg-blue-50 transition-colors">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedCard>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedCard delay={200}>
            <Card className="mb-12 border-none shadow-lg bg-gradient-to-br from-blue-50 to-white overflow-hidden">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-800">Welcome to RevSure Medical Billing</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We recognize that precise medical coding is essential for healthcare providers to receive timely and maximum 
                  reimbursements. With constantly evolving regulations and payer policies, maintaining compliance and accuracy 
                  is a challenge that demands expertise.
                </p>
              </CardContent>
            </Card>
          </AnimatedCard>

          <div className="mb-16">
            <AnimatedCard delay={400}>
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
                Why Choose RevSure for Medical Coding?
              </h2>
            </AnimatedCard>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <AnimatedCard key={index} delay={500 + index * 100}>
                  <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <feature.icon className="h-8 w-8 text-blue-500 group-hover:text-blue-600 transition-colors group-hover:scale-110 transform duration-300" />
                        <span className="text-xl">{feature.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>

          <AnimatedCard delay={1000}>
            <Card className="mb-12 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-1" />
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <Hospital className="h-12 w-12 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Comprehensive Coding Solutions</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      We specialize in <span className="font-semibold">ICD, CPT, and HCPCS coding</span> and stay current 
                      with evolving regulations. Our expertise in <span className="font-semibold">HCPCS Level 1 & Level 2 
                      coding</span> ensures proper documentation for every procedure and service.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Whether you're a <span className="font-semibold">hospital, private practice, or specialty clinic</span>, 
                      our tailored coding solutions help you navigate complex structures with ease.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedCard>

          {/* Call to Action */}
          <AnimatedCard delay={1200}>
            <div className="text-center py-12 bg-gradient-to-r from-blue-50 to-white rounded-2xl px-8 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Ready to Optimize Your Revenue Cycle?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join countless healthcare providers who trust RevSure for their medical coding needs.
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all hover:scale-105 transform"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact RevSure for Expert Solutions
              </Button>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </div>
  );
};

export default MedicalCodingPage;