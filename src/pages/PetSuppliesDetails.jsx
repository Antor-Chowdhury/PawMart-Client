import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import { AuthContext } from "../Provider/AuthProvider";
import { TiShoppingCart } from "react-icons/ti";
import { toast } from "react-toastify";
import axios from "axios";

const PetSuppliesDetails = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const { id } = useParams();
  const [petSupplyDetail, setPetSupplyDetail] = useState({});
  const [modal, setModal] = useState(false);

  //   console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/listings/${id}`)
      .then((res) => {
        setPetSupplyDetail(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id, setLoading]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-5xl mx-auto py-10">
      <div className="bg-white rounded-lg p-5 md:p-10 shadow-md">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Image */}
          <figure className="shrink-0">
            <img
              src={petSupplyDetail.image}
              alt={petSupplyDetail.name}
              className="rounded-xl w-72 md:w-96 object-contain"
            />
          </figure>

          {/* Details */}
          <div className="space-y-4 w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
              {petSupplyDetail.name}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-orange-800 text-lg">
                Description:
              </span>{" "}
              {petSupplyDetail.description}
            </p>

            <div className="space-y-2 text-lg">
              <p className="font-semibold text-orange-700">
                Category:{" "}
                <span className="text-gray-800">
                  {petSupplyDetail.category}
                </span>
              </p>
              <p className="font-semibold text-orange-700">
                Owner's Email:{" "}
                <span className="text-gray-800">{petSupplyDetail.email}</span>
              </p>
              <p className="font-semibold text-orange-700">
                Price:{" "}
                <span className="text-gray-800">
                  {petSupplyDetail.price === 0
                    ? "0"
                    : `${petSupplyDetail.price}`}
                </span>
              </p>
              <p className="font-semibold text-orange-700">
                Location:{" "}
                <span className="text-gray-800">
                  {petSupplyDetail.location}
                </span>
              </p>
            </div>

            {/* Adopt / Order */}
            <button
              className="btn bg-[#f3714b] text-white mt-4"
              onClick={() => setModal(true)}
            >
              <TiShoppingCart size={25} /> Adopt / Order Now
            </button>

            {/* modal */}
            {modal && (
              <div className="modal modal-open">
                <div className="modal-box relative">
                  <h3 className="text-lg font-bold mb-4">
                    Adopt / Order {petSupplyDetail.name}
                  </h3>
                  <p className="mb-4">
                    Please fill in your details to proceed with adoption/order.
                  </p>

                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="input w-full border rounded-lg"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="input w-full border rounded-lg"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="input w-full border rounded-lg"
                      required
                    />
                    <div className="modal-action">
                      <button
                        type="submit"
                        className="btn bg-[#f3714b] text-white"
                        onClick={(e) => {
                          e.preventDefault();
                          toast.success("Order Submitted!");
                          setModal(false);
                        }}
                      >
                        Submit
                      </button>
                      <button
                        className="btn btn-outline"
                        onClick={() => setModal(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetSuppliesDetails;
