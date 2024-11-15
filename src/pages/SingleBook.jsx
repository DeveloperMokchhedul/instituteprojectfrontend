import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleBook() {
  const [singleBook, setSingleBook] = useState();
  const { id } = useParams();
  useEffect(() => {
    const singlebook = async () => {
      const res = await axios.get(
        `http://localhost:5050/api/product/singleproduct/${id}`
      );
      setSingleBook(res.data.data);
    };
    singlebook();
  }, []);

  console.log(singleBook);

  return (
    <div className="w-3/4 mx-auto grid grid-cols-12 gap-5 my-[100px] items-center">
      <div className="col-span-12 md:col-span-6">
        <img className="w-[300px]" src={singleBook?.productImage} />
      </div>
      <div className="col-span-12 md:col-span-6">
        <h1 className="text-[50px] uppercase font-bold">{singleBook?.bookname}</h1>
        <p>{singleBook?.description}</p>

        <button className="bg-red-400 px-2 py-1 rounded-md text-white mt-[20px] w-full">Add to Cart</button>
      </div>
   
    </div>
  );
}

export default SingleBook;
