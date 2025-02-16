import React from "react";
import pic1 from "../../assets/swimming.png";
import pic2 from "../../assets/class.png";
import pic3 from "../../assets/playground.png";
import pic4 from "../../assets/bg.png";

const FaceWord = () => {
  return (
    <div className="my-6">
      <div className="shadow p-4 rounded-lg my-6">
        <h1 className="text-2xl font-bold text-center">Q-Zone</h1>
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
        <img src={pic3} alt="" />
      </div>
      <img src={pic4} alt="" />
    </div>
  );
};

export default FaceWord;
