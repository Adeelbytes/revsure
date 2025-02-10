import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart3,
  AlertTriangle,
  Clock,
  TrendingUp,
  Phone,
  ArrowRight,
  ChevronDown,
  Shield,
  LineChart,
  Settings,
  RefreshCw,
  Search,
  Database
} from 'lucide-react';

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

const StatCard = ({ title, value, icon: Icon, description }) => (
  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <CardContent className="p-6">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-blue-100 rounded-lg">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-600">{title}</h3>
          <p className="text-2xl font-bold text-blue-600 mb-1">{value}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const DenialManagementPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    {
      title: "Average Resolution Time",
      value: "72hrs",
      icon: Clock,
      description: "Fast-track denial resolution"
    },
    {
      title: "Success Rate",
      value: "95%",
      icon: TrendingUp,
      description: "Claims successfully recovered"
    },
    {
      title: "Revenue Impact",
      value: "+30%",
      icon: BarChart3,
      description: "Average revenue improvement"
    },
    {
      title: "Prevention Rate",
      value: "85%",
      icon: Shield,
      description: "Future denials prevented"
    }
  ];

  const services = [
    {
      title: "Root Cause Analysis",
      description: "Comprehensive analysis of denial patterns and underlying causes",
      icon: Search
    },
    {
      title: "Real-Time Monitoring",
      description: "Continuous tracking and immediate response to claim denials",
      icon: LineChart
    },
    {
      title: "Automated Workflow",
      description: "Streamlined processes for faster denial resolution",
      icon: Settings
    },
    {
      title: "Appeal Management",
      description: "Expert handling of all appeal levels for maximum reimbursement",
      icon: RefreshCw
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Sticky Header */}
      <div className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">RevSure</span>
          <Button variant="outline" className="hover:scale-105 transition-transform">
            Get Started
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-blue-700 text-white pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6 animate-bounce-in">
              <AlertTriangle className="h-16 w-16 text-yellow-300" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Denial Management Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-slide-up">
              Reduce Claim Denials & Maximize Reimbursements with RevSure!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-bounce-in">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 transition-all w-full sm:w-auto">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us Today
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:scale-105 transition-all w-full sm:w-auto">
                View Success Stories
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
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedCard key={index} delay={200 + index * 100}>
              <StatCard {...stat} />
            </AnimatedCard>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <AnimatedCard delay={600}>
            <Card className="mb-16 border-none shadow-lg bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-800">Expert Denial Management Solutions</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We understand that claim denials are one of the biggest challenges healthcare providers face. 
                  Our expert team ensures that every denied claim is thoroughly analyzed, identified, corrected, 
                  and resubmitted for successful reimbursement.
                </p>
              </CardContent>
            </Card>
          </AnimatedCard>

          {/* Services Grid */}
          <div className="mb-16">
            <AnimatedCard delay={800}>
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
                Our Comprehensive Approach
              </h2>
            </AnimatedCard>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <AnimatedCard key={index} delay={900 + index * 100}>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <service.icon className="h-8 w-8 text-blue-500 group-hover:text-blue-600 transition-colors group-hover:scale-110 transform duration-300" />
                        <span className="text-xl">{service.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>

          {/* Process Timeline */}
          <AnimatedCard delay={1300}>
            <Card className="mb-16 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-1" />
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-8 text-center">Our Denial Management Process</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Database className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Initial Analysis</h3>
                      <p className="text-gray-600">Comprehensive review of denial patterns and root causes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Settings className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Strategy Development</h3>
                      <p className="text-gray-600">Creation of customized denial prevention and resolution plans</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <RefreshCw className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Implementation</h3>
                      <p className="text-gray-600">Execution of automated workflows and appeal processes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <LineChart className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Monitoring & Optimization</h3>
                      <p className="text-gray-600">Continuous tracking and improvement of denial management strategies</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedCard>

          {/* Call to Action */}
          <AnimatedCard delay={1500}>
            <div className="text-center py-12 bg-gradient-to-r from-blue-50 to-white rounded-2xl px-8 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Ready to Reduce Your Claim Denials?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let our experts handle your denial management while you focus on patient care.
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all hover:scale-105 transform"
              >
                <Phone className="mr-2 h-5 w-5" />
                Get Started Today
              </Button>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </div>
  );
};

export default DenialManagementPage;