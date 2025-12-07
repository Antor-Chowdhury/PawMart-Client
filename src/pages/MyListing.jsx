import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Loading from "../components/Loading";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyListing = () => {
  const { loading, setLoading, user } = useContext(AuthContext);
  const [myListings, setMyListings] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/my-listings?clientEmail=${user?.email}`)
      .then((res) => {
        setMyListings(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [setLoading, user]);

  // console.log(myListings);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/delete/${id}`)
          .then((res) => {
            res.data;

            if (res.data.deletedCount == 1) {
              const filterData = myListings.filter((list) => list._id != id);
              setMyListings(filterData);

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="max-w-[80%] mx-auto mt-10">
      <div className="hidden md:block overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myListings?.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item?.image} alt={item?.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item?.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <p>{item?.description}</p>
                </td>
                <td>{item?.price}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleDelete(item?._id)}
                      className="btn btn-error btn-xs"
                    >
                      Delete
                    </button>
                    <Link to={`/update-listings/${item?._id}`}>
                      <button className="btn btn-primary btn-xs">Update</button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* small devices  */}
      <div className="md:hidden grid grid-cols-1 gap-5">
        {myListings.map((item) => (
          <div key={item._id} className="bg-white p-4 shadow-md rounded-xl">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md mb-3"
            />

            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            <p className="mt-2 font-semibold">Price: {item.price}</p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => handleDelete(item?._id)}
                className="btn btn-error btn-sm flex-1"
              >
                Delete
              </button>
              <Link className="flex-1" to={`/update-listings/${item?._id}`}>
                <button className="btn btn-primary btn-sm w-full">
                  Update
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyListing;
