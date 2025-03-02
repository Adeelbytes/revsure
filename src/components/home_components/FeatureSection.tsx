import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaChartLine, FaClock } from "react-icons/fa";

// Counter Animation Hook
const useCounter = (target, duration = 2000, startAnimation) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const step = Math.ceil(target / (duration / 50));

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [target, duration, startAnimation]);

  return count;
};

const FeatureSection = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const firstPassRate = useCounter(99.9, 2000, startAnimation);
  const revenueIncrease = useCounter(30, 2000, startAnimation);
  const claimTurnaround = useCounter(24, 2000, startAnimation);

  return (
    <section ref={sectionRef} className="bg-bg py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side: Enhanced Analytics Section */}
        <div className="bg-gradient-to-br from-[#031716] to-[#0A7075] shadow-lg rounded-xl p-8 text-center w-full md:w-1/2 backdrop-blur-md bg-opacity-80">
          <h2 className="text-4xl font-bold text-white mb-6">Our Success Metrics</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-center gap-4 p-4 bg-white/20 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <FaCheckCircle className="text-white text-5xl" />
              <div>
                <p className="text-5xl font-extrabold text-white">{firstPassRate}%</p>
                <p className="text-lg text-white">First Pass Claim Acceptance</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/20 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <FaChartLine className="text-white text-5xl" />
              <div>
                <p className="text-5xl font-extrabold text-white">{revenueIncrease}%</p>
                <p className="text-lg text-white">Increase in Revenue</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/20 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <FaClock className="text-white text-5xl" />
              <div>
                <p className="text-5xl font-extrabold text-white">{claimTurnaround}</p>
                <p className="text-lg text-white">Hour Claim Turnaround</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Description */}
        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-4xl font-bold">
            Why Choose <span className="text-primary">RevSure Medical Billing?</span>
          </h2>
          <p className="mt-4 text-lg">
          At RevSure Medical Billing, we go beyond just managing claims—we integrate seamlessly with your practice 
          to optimize your revenue cycle from start to finish. While you focus on providing exceptional patient care, 
          our expert team handles the complexities of insurance claims, patient billing, and revenue collection with 
          precision and speed.
          </p>
          <p className="mt-4 text-lg">
          In the fast-paced world of healthcare, efficiency is key, and that’s where RevSure excels. By leveraging 
          cutting-edge technologies, including AI-driven solutions, we streamline your billing processes, minimize denials, 
          and ensure consistent cash flow. This results in faster reimbursements and fewer headaches, giving you more 
          time to focus on what matters most—your patients. Choose RevSure and experience a smarter, more efficient 
          way to manage your practice’s finances.
          </p>

          {/* Centering CTA Button */}
          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="bg-secondary hover:bg-primary/90 text-white py-3 px-6 rounded-lg text-lg shadow-md transition-all duration-300"
            >
              Schedule a Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
