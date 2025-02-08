import React from "react";

const MedicalBilling = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: "url('/images/medical-billing-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-white text-4xl font-bold text-center">
          Medical Billing Services
        </h1>
      </section>

      {/* About Section */}
      <section className="container mx-auto py-16 px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            End-to-End Revenue Cycle Management
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At RevSure Medical Billing, we streamline the revenue cycle process, acting as a bridge between
            healthcare providers and insurance payers. Our expert coders and billing specialists ensure accuracy
            and compliance, maximizing your revenue potential while minimizing errors.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            By integrating seamlessly with leading EHR/EMR systems, we help healthcare providers increase
            efficiency, reduce operational costs, and enhance cash flow.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src="/images/medical-billing-about.jpg" alt="Medical Billing" className="rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-primary py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Who We Serve</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Private & Group Practices", icon: "🏥" },
            { title: "Hospitals & Urgent Care Centers", icon: "🏨" },
            { title: "Imaging & Specialty Clinics", icon: "🩺" },
          ].map((service, index) => (
            <div key={index} className="p-6 bg-white text-gray-800 rounded-lg shadow-lg">
              <span className="text-5xl">{service.icon}</span>
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Why Choose RevSure?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Cost-Effective Solutions", description: "Optimize your revenue cycle with affordable, high-quality services tailored to your practice." },
            { title: "HIPAA-Compliant & Secure", description: "We prioritize data security, ensuring full compliance with industry regulations." },
            { title: "24/7 Availability", description: "Our team works around the clock to keep your revenue cycle running smoothly." },
            { title: "Personalized Services", description: "Customized solutions to fit the unique needs of your practice." },
            { title: "Audit & Consultation Support", description: "We help identify inefficiencies, improve billing workflows, and maximize reimbursements." },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-lg mt-4">Let RevSure handle your medical billing so you can focus on patient care.</p>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600">
          Schedule a Free Consultation
        </button>
      </section>
    </div>
  );
};

export default MedicalBilling;
