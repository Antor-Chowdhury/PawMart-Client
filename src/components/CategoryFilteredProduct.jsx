import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Loading from "./Loading";
import { Link, useParams } from "react-router";
import { motion } from "framer-motion";

const CategoryFilteredProduct = () => {
  const { categoryName } = useParams();

  const { loading, setLoading } = useContext(AuthContext);
  const [filteredCategory, setFilteredCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/listings`)
      .then((res) => {
        const filteredItem = res.data.filter(
          (item) => item.category.toLowerCase() === categoryName.toLowerCase()
        );
        setFilteredCategory(filteredItem);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [categoryName, setLoading]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-[#fff7f4] py-10">
      <div className="max-w-[90%] mx-auto">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-8">
          Showing Result For: {categoryName.toUpperCase()}
          <p className="font-medium text-lg mt-2">
            {filteredCategory.length} items found.
          </p>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filteredCategory.map((item) => (
            <motion.div
              key={item._id}
              className="card bg-base-100 w-full shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <figure className="px-3 md:px-10 pt-3 md:pt-10">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="rounded-xl w-40 h-40 object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{item.name}</h2>
                <p className="font-medium">
                  Price: {item.price === 0 ? "Free" : `${item.price}`}
                </p>
                <p className="font-medium">Location: {item.location}</p>
                <div className="card-actions">
                  <Link to={`/details/${item._id}`}>
                    <button className="btn bg-orange-500 text-white">
                      See Details
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilteredProduct;
