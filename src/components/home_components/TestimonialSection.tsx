import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const testimonials = [
  {
    text: "We have used 24/7 for the past two years for the billing management of our practice and highly recommend their services. They were very professional and supportive in making the transition, taking over our accounts and understanding the special needs of billing for our specialty services, and keeping the reimbursements flowing.",
    name: "Dr. John Smith",
    role: "Healthcare Consultant",
  },
  {
    text: "They are a great team and were always very polite in answering our queries and giving us weekly updates of our accounts. They are an excellent group to work with and charges are below the market rates and therefore are a great value for money.",
    name: "Sarah Williams",
    role: "Clinic Manager",
  },
  {
    text: "The customer service is outstanding. They promptly address our concerns and ensure smooth operations. We appreciate their efforts and expertise in managing our accounts efficiently.",
    name: "Michael Brown",
    role: "Practice Administrator",
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#031716] to-[#0A7075] text-center text-white">
      <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">
        <span className="border-b-2 border-orange-500 pb-1">Testimonials</span>
      </h5>
      <h2 className="text-4xl font-extrabold text-white">What Clients Say</h2>

      <div className="container mx-auto mt-10 px-4 md:px-12 lg:px-20">
      <Swiper
  modules={[Pagination, Autoplay]} // Added Autoplay module
  pagination={{ clickable: true }}
  autoplay={{ delay: 2500, disableOnInteraction: false }} // Autoplay every 3 seconds
  spaceBetween={30}
  slidesPerView={1}
  loop={true} // Ensures continuous sliding
  className="max-w-3xl mx-auto"
>
  {testimonials.map((testimonial, index) => (
    <SwiperSlide key={index}>
      <div className="bg-gray-800 p-8 md:p-10 lg:p-12 rounded-lg shadow-lg border border-gray-700 transition-transform transform hover:scale-105">
        <p className="text-gray-300 text-lg italic">"{testimonial.text}"</p>
        <div className="mt-4">
          <h4 className="text-orange-400 text-xl font-semibold">{testimonial.name}</h4>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

        {/* Custom pagination styling */}
        <style>
          {`
          .swiper-pagination-bullet {
            background: #fff !important;
            opacity: 0.5 !important;
          }
          .swiper-pagination-bullet-active {
            background: #ff7e1b !important;
            opacity: 1 !important;
          }
          `}
        </style>
      </div>
    </section>
  );
};

export default TestimonialSection;
