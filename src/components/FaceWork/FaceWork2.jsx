import React from "react";
import pic1 from "../../assets/book-4.png";
import pic2 from "../../assets/young-bucks.png";
import pic3 from "../../assets/ride-lifetime.png";
import { FiShoppingBag } from "react-icons/fi";

const FaceWork2 = () => {
  return (
    <div className="mt-6 space-y-6">
      <div className="shadow-lg rounded-lg p-4">
        <img className="w-full" src={pic1} alt="" />
        <h2 className="text-xl font-bold mb-4">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <div className="flex gap-10  ">
          <p>Sports</p>
          <FiShoppingBag />
          <p className="ml-4">Jan 4, 2022</p>
        </div>
      </div>
      <div className="shadow-lg rounded-lg p-4">
        <img className="w-full" src={pic2} alt="" />
        <h2 className="text-xl font-bold mb-4">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <div className="flex gap-10 ">
          <p>Sports</p>
          <FiShoppingBag />
          <p className="ml-4">Jan 4, 2022</p>
        </div>
      </div>
      <div className="shadow-lg rounded-lg p-4">
        <img className="w-full" src={pic3} alt="" />
        <h2 className="text-xl font-bold mb-4">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <div className="flex gap-10">
          <p>Sports</p>
          <FiShoppingBag />
          <p className="ml-4">Jan 4, 2022</p>
        </div>
      </div>
    </div>
  );
};

export default FaceWork2;
