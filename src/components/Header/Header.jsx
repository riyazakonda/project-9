import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <div className="logo">
        <img className="w-[300px]" src={logo} alt="" />
      </div>
      <h3 className="text-[#706F6F] text-sm pt-4 pb-1">
        Journalism Without Fear or Favour
      </h3>
      <p className="font-medium ">{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
