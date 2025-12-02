import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router";
// import { AuthContext } from "../Provider/AuthProvider";
// import { signOut } from "firebase/auth";
// import auth from "../firebase/firebase.config";
import { toast } from "react-toastify";
const NavBar = () => {
  //   const { user } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("SignOut Successful!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const links = (
    <>
      <NavLink to="/">
        {({ isActive }) => (
          <span
            className={`nav-link font-medium border-[#ff8600] hover:border-b-2  hover:${
              isActive ? " active border-b-2" : " "
            }`}
          >
            Home
          </span>
        )}
      </NavLink>
      <NavLink to="/pets-supplies">
        {({ isActive }) => (
          <span
            className={`nav-link font-medium border-[#ff8600] hover:border-b-2  hover:${
              isActive ? " active border-b-2" : " "
            }`}
          >
            Pets & Supplies
          </span>
        )}
      </NavLink>
      <NavLink to="/add-listing">
        {({ isActive }) => (
          <span
            className={`nav-link font-medium border-[#ff8600] hover:border-b-2  hover:${
              isActive ? " active border-b-2" : " "
            }`}
          >
            Add Listing
          </span>
        )}
      </NavLink>
      <NavLink to="/my-listing">
        {({ isActive }) => (
          <span
            className={`nav-link font-medium border-[#ff8600] hover:border-b-2  hover:${
              isActive ? " active border-b-2" : " "
            }`}
          >
            My Listing
          </span>
        )}
      </NavLink>
      <NavLink to="/my-orders">
        {({ isActive }) => (
          <span
            className={`nav-link font-medium border-[#ff8600] hover:border-b-2  hover:${
              isActive ? " active border-b-2" : " "
            }`}
          >
            My Orders
          </span>
        )}
      </NavLink>
    </>
  );
  return (
    <div className="bg-[#edebec]">
      <div className="shadow-sm py-4">
        <div className="navbar max-w-[90%] mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="mr-2 btn-ghost lg:hidden"
              >
                <FaBars className="" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box z-[999] mt-3 w-52 p-2 shadow text-lg"
              >
                {links}
              </ul>
            </div>
            <Link to="/" className="flex items-center justify-center gap-1">
              <figure className="md:w-8 md:h-8"></figure>
              <h1 className="text-2xl md:text-3xl gradient-text font-bold text-black">
                🐾 Paw<span className="text-[#ff8c00]">Mart</span>
              </h1>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="space-x-10 menu-horizontal px-1 text-lg">{links}</ul>
          </div>

          {/* login / logout conditional rendering */}

          <div className="navbar-end">
            <Link
              to="/login"
              className="btn md:text-lg text-white bg-[#f3714b] border-none shadow-none"
            >
              SIGN IN / REGISTER
            </Link>
          </div>

          {/* {user ? (
            <div className="navbar-end flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                <img
                  src={user?.photoURL}
                  alt="user"
                  className="w-full h-full object-cover"
                />
              </div>

              <button
                onClick={handleSignOut}
                className="btn text-white bg-[#d5b60a] border-none shadow-none px-4 py-2"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="navbar-end">
              <Link
                to="/login"
                className="btn text-lg text-white bg-[#d5b60a] border-none shadow-none"
              >
                Login
              </Link>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
