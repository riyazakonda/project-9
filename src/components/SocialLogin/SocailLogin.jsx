import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const SocailLogin = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold pb-6">Login With</h1>
      <div className="space-y-2">
        <button className="btn w-full border text-blue-600 hover:text-white hover:bg-blue-600 rounded-md border-blue-600">
          <FaGoogle /> Login With Google
        </button>
        <button className="btn w-full border hover:text-white hover:bg-gray-800 rounded-md border-gray-800">
          <FaGithub /> Login With GitHub
        </button>
      </div>
    </div>
  );
};

export default SocailLogin;
