import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "We have used 24/7 for the past two years for the billing management of our practice and highly recommend their services. They were very professional and supportive in making the transition, taking over our accounts and understanding the special needs of billing for our specialty services, and keeping the reimbursements flowing.",
  },
  {
    text: "They are a great team and were always very polite in answering our queries and giving us weekly updates of our accounts. They are an excellent group to work with and charges are below the market rates and therefore are a great value for money.",
  },
  {
    text: "The customer service is outstanding. They promptly address our concerns and ensure smooth operations. We appreciate their efforts and expertise in managing our accounts efficiently.",
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 bg-bg text-center">
      <h5 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-8">
        <span className="border-b-2 border-orange-500 pb-1">Testimonials</span>
      </h5>
      <h2 className="text-3xl font-bold text-gray-900 mt-2">What Clients Say</h2>

      <div className="container mx-auto mt-8 px-4 md:px-12 lg:px-20">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 p-6 md:p-8 lg:p-10 rounded-lg shadow-md max-w-3xl mx-auto">
                <p className="text-gray-700 italic">{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
