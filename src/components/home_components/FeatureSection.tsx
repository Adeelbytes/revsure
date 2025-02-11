import { useEffect, useState, useRef } from "react";
import {Link} from "react-router-dom";
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
    <section ref={sectionRef} className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side: Analytics Section */}
        <div className="bg-white shadow-lg rounded-lg px-8 py-12 text-center w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800">Our Success Metrics</h2>
          <div className="mt-6 grid grid-cols-1 gap-6">
            <div>
              <p className="text-5xl font-extrabold text-primary">{firstPassRate}%</p>
              <p className="text-lg text-primary">First Pass Claim Acceptance</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold text-primary">{revenueIncrease}%</p>
              <p className="text-lg text-primary">Increase in Revenue</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold text-primary">{claimTurnaround}</p>
              <p className="text-lg text-primary">Hour Claim Turnaround</p>
            </div>
          </div>
        </div>

        {/* Right Side: Description */}
        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-4xl font-bold">
            Why Choose <span className="text-primary">RevSure Medical Billing?</span>
          </h2>
          <p className="mt-4 text-lg">
            At RevSure Medical Billing, we don’t just manage claims—we become an extension of your practice,
            ensuring a seamless and efficient revenue cycle. While you focus on delivering exceptional patient care,
            our expert team handles the complexities of insurance claims, patient billing, and revenue collection.
          </p>
          <p className="mt-4 mb-4 text-lg">
            Healthcare is a fast-paced environment with many moving parts, and a reliable billing partner is crucial
            to keeping things running smoothly. At RevSure, we optimize financial workflows, reduce denials, and
            ensure steady cash flow so you can focus on what matters most—your patients.
          </p>
          <Link to="/contact" className="mt-10 bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-lg text-lg">
            Schedule a Discovery Call
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
