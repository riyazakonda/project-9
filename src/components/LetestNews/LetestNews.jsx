import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LetestNews = () => {
  return (
    <div className="flex space-x-2 mt-4 bg-gray-200 p-4">
      <p className=" text-white bg-[#D72050] px-3 py-1">Latest</p>
      <Marquee pauseOnHover={true} speed={75} className="space-x-10 ">
        <Link to="/news">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as Match Highlights: Germany vs Spain !
          Match Highlights...
        </Link>
        <Link to="/news">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as Match Highlights: Germany vs Spain !
          Match Highlights...
        </Link>
      </Marquee>
    </div>
  );
};

export default LetestNews;
