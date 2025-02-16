import React from "react";
import SocailLogin from "../../SocialLogin/SocailLogin";
import FindUs from "../../FindUs/FindUs";
import FaceWord from "../../FaceWork/FaceWord";

const RightNavbar = () => {
  return (
    <div className="ml-4">
      <SocailLogin></SocailLogin>
      <FindUs></FindUs>
      <FaceWord></FaceWord>
    </div>
  );
};

export default RightNavbar;
