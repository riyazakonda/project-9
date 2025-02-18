import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className=" shadow-2xl rounded-lg max-w-2xl mx-auto">
      <div className="p-20 ">
        <h2 className="text-center text-4xl font-bold">Login Your Account</h2>
        <hr className="my-10" />
        <form className=" mt-10 space-y-2">
          <label className="font-semibold text-xl">Your Name</label>
          <div className=" border-2   border-white">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="w-full   border-none bg-white "
            />
          </div>
          <label className="font-semibold text-xl">Email Address</label>
          <div className="my-2 border-2 rounded-md border-white">
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="w-full py-2  border-none bg-white p-2"
            />
          </div>
          <label className="font-semibold text-xl">Password</label>
          <div className="my-2 border-2 border-white">
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              className="w-full py-2 px-3 border-none"
            />
          </div>
        </form>
        <button className="btn w-full mt-4 bg-gray-800 text-white font-bold">
          Register
        </button>
        <p className="text-center pt-8 font-semibold">
          Don't Have an account pleace ?
          <Link className=" text-red-600 ml-1" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
