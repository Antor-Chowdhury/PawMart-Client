import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import { AuthContext } from "../Provider/AuthProvider";
import { TiShoppingCart } from "react-icons/ti";
import { toast } from "react-toastify";
import axios from "axios";

const PetSuppliesDetails = () => {
  const { loading, setLoading, user } = useContext(AuthContext);
  const { id } = useParams();
  const [petSupplyDetail, setPetSupplyDetail] = useState([]);
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

                  <form className="space-y-4">
                    {/* Name */}
                    <label className="block mb-1 font-medium">Buyer Name</label>
                    <input
                      type="text"
                      defaultValue={user?.displayName}
                      readOnly
                      className="input w-full border rounded-lg bg-gray-100"
                    />

                    {/* Email */}
                    <label className="block mb-1 font-medium">
                      Buyer Email
                    </label>
                    <input
                      type="email"
                      defaultValue={user?.email}
                      readOnly
                      className="input w-full border rounded-lg bg-gray-100"
                    />

                    {/* Product/Listing ID */}
                    <label className="block mb-1 font-medium">
                      Product/Listing ID
                    </label>
                    <input
                      type="text"
                      defaultValue={petSupplyDetail._id}
                      readOnly
                      className="input w-full border rounded-lg bg-gray-100"
                    />

                    {/* product name */}
                    <label className="block mb-1 font-medium">
                      Product/Pet Name
                    </label>
                    <input
                      type="text"
                      defaultValue={petSupplyDetail.name}
                      readOnly
                      className="input w-full border rounded-lg bg-gray-100"
                    />

                    {/* Quantity (Pet = 1) */}
                    <label className="block mb-1 font-medium">Quantity</label>
                    <input
                      type="number"
                      defaultValue={
                        petSupplyDetail.category === "Pets" ? 1 : undefined
                      }
                      min="1"
                      readOnly={petSupplyDetail.category === "Pets"}
                      placeholder="Quantity"
                      className="input w-full border rounded-lg"
                    />

                    {/* Price */}
                    <label className="block mb-1 font-medium">Price</label>
                    <input
                      type="text"
                      defaultValue={petSupplyDetail.price}
                      readOnly
                      className="input w-full border rounded-lg bg-gray-100"
                    />

                    {/* Address */}
                    <label className="block mb-1 font-medium">Address</label>
                    <input
                      type="text"
                      placeholder="Your Address"
                      className="input w-full border rounded-lg"
                      required
                    />

                    {/* Pick Up Date */}
                    <label className="block mb-1 font-medium">Date</label>
                    <input
                      type="date"
                      className="input w-full border rounded-lg"
                      required
                    />

                    {/* Phone */}
                    <label className="block mb-1 font-medium">Phone</label>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="input w-full border rounded-lg"
                      required
                    />

                    {/* Additional Notes */}
                    <label className="block mb-1 font-medium">
                      Additional Notes
                    </label>
                    <textarea
                      placeholder="Additional Notes (optional)"
                      className="textarea textarea-bordered w-full h-24 rounded-lg"
                    ></textarea>

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
                        Submit Order
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
