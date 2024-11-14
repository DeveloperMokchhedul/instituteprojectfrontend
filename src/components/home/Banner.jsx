import React from "react";

import bannerImg from "/images/bookstore.jpg";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img className="rounded-2xl" src={bannerImg} alt="" />
      </div>

      <div className="md:w-1/2 w-full">
        <h1 className="md:text-3xl text-2xl font-medium">
          Welcome, Students! <br />{" "}
          <span className="text-[30px] pt-3">Explore Our Old Book Buy and Sell Platform"</span>
        </h1>
        <p className="my-7">
        We're thrilled to have you here! Whether you're buying or selling used books, you've come to the right place. Our platform connects students like you to valuable resources at affordable prices. Save money, find rare editions, and give your old books a new home. Happy exploring!
        </p>
        <button className="bg-green-500 px-4 py-2 rounded-md text-white">Find Your Book</button>
      </div>
    </div>
  );
};

export default Banner;
