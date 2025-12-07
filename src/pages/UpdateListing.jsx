import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import Loading from "../components/Loading";

const UpdateListing = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const { id } = useParams();
  const [list, setList] = useState([]);
  const [category, setCategory] = useState(list?.category);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://paw-mart-six.vercel.app/listings/${id}`)
      .then((res) => {
        setList(res.data);
        setCategory(res.data.category);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id, setLoading]);

  console.log(list);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const location = form.location.value;
    const description = form.description.value;
    const image = form.image.value;
    const date = form.date.value;
    const email = form.email.value;

    const formData = {
      name,
      category,
      price,
      location,
      description,
      image,
      date,
      email,
    };

    // e.target.reset();

    console.log(formData);

    axios
      .put(`https://paw-mart-six.vercel.app/update/${id}`, formData)
      .then((res) => {
        res.data;
        navigate("/my-listing");
      })
      .catch((err) => console.log(err));
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Update Product / Pet
      </h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">Product/Pet Name</label>
          <input
            defaultValue={list?.name}
            type="text"
            name="name"
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            name="category"
            className="w-full border border-gray-300 p-2 rounded"
            required
          >
            <option value="">Select Category</option>
            <option value="Pets">Pets</option>
            <option value="Food">Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Care Products">Care Products</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            defaultValue={list?.price}
            type="number"
            name="price"
            className={`w-full border border-gray-300 rounded p-2`}
            min="0"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input
            defaultValue={list?.location}
            type="text"
            name="location"
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            defaultValue={list?.description}
            name="description"
            className="w-full border border-gray-300 p-2 rounded"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            defaultValue={list?.image}
            type="url"
            name="image"
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label className="block mb-1 font-medium">Pick Up Date</label>
          <input
            defaultValue={list?.date}
            type="date"
            name="date"
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        {/* Email (readonly) */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            value={user?.email}
            type="email"
            name="email"
            readOnly
            className="w-full border border-gray-300 p-2 rounded bg-gray-100"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateListing;
