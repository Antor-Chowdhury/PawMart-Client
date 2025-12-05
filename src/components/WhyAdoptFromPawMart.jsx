import React from "react";

const WhyAdoptFromPawMart = () => {
  return (
    <section className="bg-[#fffaf4] py-16">
      <div className="max-w-5xl mx-auto text-center px-4">
        <div className="flex justify-center mb-3">
          <span className="text-5xl   md:text-7xl absolute right-82 -bottom-777 md:-bottom-334 md:right-196 -rotate-13">
            🐾
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#2d2b4c] mb-3">
          Why you should <br /> Adopt from PawMart?
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          Every pet deserves a loving home. When you adopt, you save a life,
          support rescue shelters, and bring unconditional love into your home.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-4">
          <div className="flex flex-col items-center">
            <div className="bg-[#d9f7be] p-4 rounded-full text-4xl">❤️</div>
            <h4 className="font-semibold mt-3 text-[#2d2b4c]">Save a Life</h4>
            <p className="text-sm text-gray-600 mt-1">
              Give homeless pets a second chance.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-[#d9f7be] p-4 rounded-full text-4xl">🏡</div>
            <h4 className="font-semibold mt-3 text-[#2d2b4c]">
              Ethical Choice
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Stop supporting harmful breeding mills.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-[#d9f7be] p-4 rounded-full text-4xl">💰</div>
            <h4 className="font-semibold mt-3 text-[#2d2b4c]">Affordable</h4>
            <p className="text-sm text-gray-600 mt-1">
              Lower costs than buying from breeders.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-[#d9f7be] p-4 rounded-full text-4xl">🤝</div>
            <h4 className="font-semibold mt-3 text-[#2d2b4c]">
              Support Shelters
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Your adoption helps rescue more animals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAdoptFromPawMart;
