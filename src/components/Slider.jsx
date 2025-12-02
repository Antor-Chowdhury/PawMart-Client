import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "Find Your Furry\n Friend Today!",
      subtitle: "Connect with loving pets waiting for a forever home",
      icon: "https://i.ibb.co.com/tM9YTRtv/carousel-1.jpg",
    },
    {
      id: 2,
      title: "Adopt, Don’t Shop \nGive a Pet a Home.",
      subtitle: "Transform a life by choosing adoption and responsible care",
      icon: "https://i.ibb.co.com/n4d9KmX/carousel-2.webp",
    },
    {
      id: 3,
      title: "Because Every Pet\n Deserves Love and Care.",
      subtitle: "Provide warmth, safety, and happiness to your new best friend",
      icon: "https://i.ibb.co.com/sdjvLFn7/carousel-3.jpg",
    },
  ];

  return (
    <div className="w-full h-[50vh] md:h-[70vh] relative">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        modules={[Pagination, Autoplay]}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <img
              src={slide.icon}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/25">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-200 mb-3 mt-60 md:mt-80 whitespace-pre-line">
                {slide.title}
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-100 max-w-2xl">
                {slide.subtitle}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
