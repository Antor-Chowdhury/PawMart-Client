import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const RecentListing = () => {
  const [recentListing, setRecentListing] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/recent-listings")
      .then((res) => setRecentListing(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-[#f9f4f2]">
      <div className="py-10 max-w-[95%] md:max-w-[90%] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
          Recent Listings
        </h2>
        <p className="text-center mb-8">
          Freshly added pets and supplies for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[90%] mx-auto">
          {recentListing.map((item) => (
            <div
              key={item._id}
              className="card bg-white shadow-md p-2 md:p-4 rounded-lg"
            >
              <figure className="mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">Category: {item.category}</p>
                <p className="text-gray-600">
                  Price:{" "}
                  {item.price === 0 ? "Free for Adoption" : `${item.price}`}
                </p>
                <p className="text-gray-600">Location: {item.location}</p>
                <Link to={`/details/${item._id}`}>
                  <button className="btn bg-orange-500 text-white mt-3">
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentListing;
