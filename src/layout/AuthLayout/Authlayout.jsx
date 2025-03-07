import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Authlayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>

      <Outlet></Outlet>
    </div>
  );
};

export default Authlayout;
