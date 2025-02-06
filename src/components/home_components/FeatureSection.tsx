import { useEffect, useState } from "react";

// Counter Animation Hook
const useCounter = (target, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [target, duration]);

  return count;
};

const FeatureSection = () => {
  const firstPassRate = useCounter(99.9);
  const revenueIncrease = useCounter(30);
  const claimTurnaround = useCounter(24);
  const daysInAR = useCounter(25);

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side: Analytics Section */}
        <div className="bg-white shadow-lg rounded-lg px-8 py-12 text-center w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800">Our Success Metrics</h2>
          <div className="mt-6 grid grid-cols-2 gap-6">
            <div>
              <p className="text-5xl font-extrabold text-primary">{firstPassRate}%</p>
              <p className="text-lg text-primary">First Pass Rate</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold text-primary">{revenueIncrease}%</p>
              <p className="text-lg text-primary">Increase in Revenue</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold text-primary">{claimTurnaround}</p>
              <p className="text-lg text-primary">Hours Claim Turnaround</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold text-primary">{">" + daysInAR}</p>
              <p className="text-lg text-primary">Days in A/R</p>
            </div>
          </div>
        </div>

        {/* Right Side: Description */}
        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-4xl font-bold">
            Why Choose <span className="text-primary">Right Medical Billing?</span>
          </h2>
          <p className="mt-4 text-lg">
            As your dedicated medical billing services provider, we extend your practice.
            While you focus on patient care, we handle the complex world of insurance claims, 
            billing, and revenue collection.
          </p>
          <p className="mt-4 text-lg">
            Our healthcare system has many moving parts. We help medical facilities with
            financial management so they can focus on what they do best – providing 
            compassionate care.
          </p>
          <button className="mt-6 bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-lg text-lg">
            Schedule a Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
