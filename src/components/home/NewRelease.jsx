import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from '../../redux/slice/cartSlice'
function NewRelease() {
  const [releaseProduct, setReleaseProduct] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const ShowAllProduct = async () => {
      const res = await axios.get("https://instituteprojectbackend.onrender.com/api/product/releaseproduct");
      setReleaseProduct(res.data.AllProduct)

    }
    ShowAllProduct()

  }, [])


  console.log(releaseProduct);

  const handleCart = (product) => {
    console.log("product added in cart");

    dispatch(addToCart(product));
  };


  return (
    <>
      <div>
        <div className="">
          {/* <p className="text-[12px] text-center">SOME QUALITY BOOK</p> */}
          <h1 className="text-[45px] font-bold text-center pt-[20px] ">New Release Book</h1>
          <div>
            <div className="grid grid-cols-12 gap-4 mt-[40px]">
              {
                releaseProduct && releaseProduct?.slice(-8).reverse().map((product) => (
                  <div
                    key={product._id}
                    className="col-span-12 md:col-span-3 p-5 rounded-md shadow-cardShadow hover:scale-95 transition-all duration-700 hover:text-white hover:bg-black  "
                  >
                    <div className="flex justify-between pb-5">
                      <p className="text-[12px] font-gamamli font-bold rounded-sm pb-2">
                        {product.semister}
                      </p>
                      <p className="text-[14px] font-gamamli font-bold  capitalize rounded-sm pb-2">
                        {product.department}
                      </p>
                    </div>
                    <img
                      className="w-[150px] h-[150px] object-cover object-top mx-auto rounded-lg hover:scale-125 transition-all duration-300 "
                      src={product.productImage}
                      alt=""
                    />
                    <div className=" flex flex-col gap-2">
                      <p className="mt-[5px] font-oswald capitalize text-center pt-[20px] font-bold text-[25px]">{product.bookname}</p>
                      <p className="font-onest font-semibold text-center opacity-50">{product.description.slice(0, 50)}...</p>
                      <p className="text-3xl text-center">{product.price} <span className="text-4xl text-red-500">৳</span></p>
                    </div>

                    <div className="flex justify-between px-3 my-3  pt-4 w-full gap-1 ">
                      <Link
                        to={`/books/${product._id}`}
                        className="bg-green-400 px-2 py-1 rounded-md text-white w-[50%] font-oswald font-bold text-[15px] text-center hover:bg-white hover:text-black transition-all duration-500"
                      >
                        Show details
                      </Link>
                      <button
                        onClick={() => handleCart(product)}
                        className="bg-red-400 px-2 py-1 rounded-md text-white w-[50%] font-oswald font-bold text-[15px] text-center hover:bg-white hover:text-black transition-all duration-500 "
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>

                ))
              }

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewRelease;
