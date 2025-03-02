import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const testimonials = [
  {
    text: "Working with RevSure Medical Billing has transformed our practice. Before, we struggled with denied claims and delayed reimbursements. Since partnering with them, our reimbursement rates have increased by 30%, and their proactive approach has reduced denials significantly. RevSure’s team is professional, efficient, and knowledgeable, allowing us to focus on patient care while they handle our billing seamlessly.",
    name: "Dr. Sarah Mitchell",
    role: "Family Practice",
  },
  {
    text: "RevSure Medical Billing has been a game-changer for our cardiology practice. They’ve increased our collections by 25% in just six months. Their expertise in reducing denials and improving billing efficiency, combined with their use of AI technology, has made a huge impact. RevSure is more than just a billing service—they’re a key partner in our success.",
    name: "Dr. James Peterson",
    role: "Cardiology Specialist",
  },
  {
    text: "Since switching to RevSure Medical Billing, we’ve seen a 40% decrease in AR recovery time and a 98% claim acceptance rate. Their team is skilled, and their innovative solutions have streamlined our billing process. RevSure has saved us time and resources, allowing us to focus more on patient care while ensuring fast, accurate payments.",
    name: "Maria Gonzalez",
    role: "Practice Manager, Pediatrics Group",
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
