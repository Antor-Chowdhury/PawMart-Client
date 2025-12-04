import React from "react";
import { motion } from "framer-motion";
import petAdoption from "../../src/assets/pet-adoption.png";
import petFood from "../../src/assets/pet-food.png";
import petAccessories from "../../src/assets/pet-accessories.png";
import petCare from "../../src/assets/pet-care-product.png";
import { Link } from "react-router";

const categories = [
  {
    id: 1,
    title: "Pets",
    image: petAdoption,
    route: "/category-filtered-product/pets",
  },
  {
    id: 2,
    title: "Pet Food",
    image: petFood,
    route: "/category-filtered-product/petFood",
  },
  {
    id: 3,
    title: "Accessories",
    image: petAccessories,
    route: "/category-filtered-product/accessories",
  },
  {
    id: 4,
    title: "Pet Care Products",
    image: petCare,
    route: "/category-filtered-product/petCareProducts",
  },
];

const Category = () => {
  return (
    <div className="bg-[#fff7f4]">
      <div className="max-w-[90%] md:max-w-[80%] mx-auto py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 mb-2">
          Browse by Category
        </h2>
        <p className="text-center mb-10">
          Find everything your pet needs in one place
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{
                scale: 1.07,
                backgroundColor: "#F37650",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="shadow-md rounded-xl"
            >
              <Link
                to={category.route}
                className="shadow-md rounded-xl px-3 py-5 md:px-6 md:py-10 flex flex-col items-center justify-center text-center border hover:border-none hover:shadow-xl transition-all duration-300 text-gray-500 hover:bg-[#f37650] hover:text-white"
              >
                <img
                  className="w-10 md:w-15 mb-3"
                  src={category.image}
                  alt=""
                />
                <h3 className="md:text-xl font-semibold mb-2">
                  {category.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
