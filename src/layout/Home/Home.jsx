import React from "react";
import Header from "../../components/Header/Header";
import LetestNews from "../../components/LetestNews/LetestNews";
import Navbar from "../../components/Navbar/Navbar";
import LeftNavbar from "../../components/Layout-navbar/LeftNavbar/LeftNavbar";
import RightNavbar from "../../components/Layout-navbar/RightNavbar/RightNavbar";
import { Outlet } from "react-router-dom";
import FaceWork2 from "../../components/FaceWork/FaceWork2";

const Home = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="max-w-7xl mx-auto">
          <LetestNews></LetestNews>
        </section>
      </header>
      <nav className="max-w-7xl mx-auto">
        <Navbar></Navbar>
      </nav>
      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 mt-10">
        <aside className="col-span-3">
          <LeftNavbar></LeftNavbar>
          <FaceWork2></FaceWork2>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default Home;
