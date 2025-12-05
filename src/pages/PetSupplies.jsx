import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../components/Loading";

const PetSupplies = () => {
  const { loading, setLoading } = useContext(AuthContext);

  const [petSupplies, setPetSupplies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/listings")
      .then((res) => res.json())
      .then((data) => {
        setPetSupplies(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [setLoading]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-[#fff7f4] py-10">
      <div>
        <title>Pets & Supplies</title>
      </div>

      <div className="w-full md:w-[80%] mx-auto flex flex-col justify-center px-4">
        <h2 className="font-bold text-3xl text-center mb-8">
          All Available Pets & Supplies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {petSupplies.map((item) => (
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
                    <button className="btn btn-primary">See Details</button>
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
