import React from "react";

const heroes = [
  {
    id: 1,
    name: "Sophia Rahman",
    role: "Rescued Bella the Golden Retriever",
    image: "https://i.ibb.co.com/0pVLFB7W/hero-1-1.webp",
  },
  {
    id: 2,
    name: "Emma Watson",
    role: "Adopted Max from a local shelter",
    image: "https://i.ibb.co.com/c0x585q/hero-2-1.jpg",
  },
  {
    id: 3,
    name: "Carla Mendes",
    role: "Fostered 12+ kittens & saved lives",
    image: "https://i.ibb.co.com/p6YkPwSM/hero-3-3.jpg",
  },
  {
    id: 4,
    name: "Ryan Carter",
    role: "Adopted Rocky, a senior rescue dog",
    image: "https://i.ibb.co.com/k2vyqdwf/hero-4-1.jpg",
  },
];

const MeetOurHeroes = () => {
  return (
    <div className="bg-[#f7f3f0] py-14">
      <div className="max-w-[90%] md:max-w-[80%] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            🐕 Meet Our Pet Heroes
          </h2>
          <p className="text-gray-600 mt-3 max-w-[600px] mx-auto">
            These amazing individuals adopted, rescued, or cared for pets -
            giving them a second chance at life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
          {heroes.map((hero) => (
            <div
              key={hero.id}
              className="bg-white rounded-2xl shadow-md p-3 hover:shadow-lg transition duration-300"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-full h-96 object-cover hover:scale-105 hover:cursor-pointer transition duration-300"
                />
              </div>

              <div className="text-center mt-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  {hero.name}
                </h3>
                <p className="text-gray-600 mt-1 mb-5">{hero.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetOurHeroes;
