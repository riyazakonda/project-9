import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-7 ">
      <h1 className="text-2xl font-bold mb-4">Find Us On</h1>
      <div className="flex flex-col justify-start">
        <button className="btn justify-start p-6">
          <FaFacebook className="text-blue-500"></FaFacebook> FaceBook
        </button>
        <button className="btn justify-start p-6">
          <FaTwitter className="text-blue-600"></FaTwitter>Twitter
        </button>
        <button className="btn justify-start p-6">
          <FaInstagram className="text-amber-600"></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
