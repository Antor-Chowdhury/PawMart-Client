import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const PetSupplies = () => {
  const [petSupplies, setPetSupplies] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3000/listings")
      .then((res) => res.json())
      .then((data) => setPetSupplies(data))
      .catch((err) => console.log(err));
  }, []);

  const filteredData = petSupplies.filter((item) => {
    const matchedCategory = category === "All" || item.category === category;
    const matchedSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchedCategory && matchedSearch;
  });

  return (
    <div className="bg-[#fff7f4] py-10">
      <div>
        <title>Pets & Supplies</title>
      </div>

      <div className="w-full md:w-[80%] mx-auto flex flex-col justify-center px-4">
        <h2 className="font-bold text-3xl text-center mb-8">
          All Available Pets & Supplies
        </h2>

        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          <input
            type="text"
            placeholder="Search by name..."
            className="input input-bordered w-full md:w-1/2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="select select-bordered w-full md:w-1/3"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Pets">Pets</option>
            <option value="Food">Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Care Products">Care Products</option>
          </select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filteredData.map((item) => (
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

                <p className="font-medium">Category: {item.category}</p>
                <p className="font-medium">Location: {item.location}</p>
                <p className="font-medium">
                  Price: {item.price === 0 ? "0" : `$${item.price}`}
                </p>

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

        <Link to="/" className="flex justify-center items-center mt-5">
          <button className="btn btn-primary">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default PetSupplies;
