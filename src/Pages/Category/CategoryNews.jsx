import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCart from "../NewsCart/NewsCart";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  console.log(news);

  return (
    <div className="ml-4">
      <h1 className="font-semibold text-xl text-[#403F3F] mb-5">
        Dragon News Home
      </h1>
      <div>
        {news.map((singleNews) => (
          <NewsCart key={singleNews._id} news={singleNews}></NewsCart>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
