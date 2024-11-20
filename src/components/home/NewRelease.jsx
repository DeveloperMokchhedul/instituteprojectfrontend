import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/slice/cartSlice";

function NewRelease() {
  const [releaseProduct, setReleaseProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const ShowAllProduct = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5050/api/product/releaseproduct",{withCredentials:true}
        );
        console.log(res.data); // Debugging: Check the response structure
        setReleaseProduct(res.data?.AllProduct || []); // Use optional chaining with a default empty array
      } catch (error) {
        console.error("Failed to fetch products:", error.message);
      }
    };
    ShowAllProduct();
  }, []);

  const handleCart = (product) => {
    console.log("Product added to cart:", product);
    dispatch(addToCart(product));
  };

  return (
    <>
      <div>
        <h1 className="text-[45px] font-bold text-center pt-[20px]">
          New Release Book
        </h1>
        <div>
          <div className="grid grid-cols-12 gap-4 mt-[40px]">
            {releaseProduct?.length > 0 ? (
              releaseProduct
                .slice(-8)
                .reverse()
                .map((product) => (
                  <div
                    key={product._id}
                    className="col-span-12 md:col-span-3 p-5 rounded-md shadow-cardShadow hover:scale-95 transition-all duration-700 hover:text-white hover:bg-black"
                  >
                    <div className="flex justify-between pb-5">
                      <p className="text-[12px] font-bold rounded-sm pb-2">
                        {product.semister || "Unknown Semester"}
                      </p>
                      <p className="text-[14px] font-bold capitalize rounded-sm pb-2">
                        {product.department || "Unknown Department"}
                      </p>
                    </div>
                    <img
                      className="w-[150px] h-[150px] object-cover object-top mx-auto rounded-lg hover:scale-125 transition-all duration-300"
                      src={product.productImage || "/default-image.jpg"} // Fallback image
                      alt={product.bookname || "Book Image"}
                    />
                    <div className="flex flex-col gap-2">
                      <p className="mt-[5px] font-bold text-center text-[25px]">
                        {product.bookname || "Unknown Book"}
                      </p>
                      <p className="font-semibold text-center opacity-50">
                        {product.description?.slice(0, 50) || "No description"}...
                      </p>
                      <p className="text-3xl text-center">
                        {product.price || "N/A"}{" "}
                        <span className="text-4xl text-red-500">৳</span>
                      </p>
                    </div>
                    <div className="flex justify-between px-3 my-3 pt-4 w-full gap-1">
                      <Link
                        to={`/books/${product._id}`}
                        className="bg-green-400 px-2 py-1 rounded-md text-white w-[50%] font-bold text-[15px] text-center hover:bg-white hover:text-black transition-all duration-500"
                      >
                        Show details
                      </Link>
                      <button
                        onClick={() => handleCart(product)}
                        className="bg-red-400 px-2 py-1 rounded-md text-white w-[50%] font-bold text-[15px] text-center hover:bg-white hover:text-black transition-all duration-500"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))
            ) : (
              <p className="col-span-12 text-center text-gray-500">
                No new releases available.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewRelease;


