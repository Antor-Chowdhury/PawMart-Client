import React from "react";
import error from "../../src/assets/error-404.png";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20 text-center px-2.5">
      <figure>
        <img src={error} alt="Not Found" />
      </figure>
      <h2 className="text-5xl font-bold text-[#001931] mt-4">
        Oops, page not found!
      </h2>
      <p className="my-4 text-xl text-[#627382]">
        The page you are looking for is not available.
      </p>
      <Link to="/" className="w-max mx-auto ">
        <button className="cursor-pointer font-semibold bg-linear-to-r from-[#632ee3] to-[#9f62f2] py-3.5 px-10 text-white rounded-md">
          Go Back!
        </button>
      </Link>
    </div>
  );
};

export default Error;
