import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";
import Loading from "./Loading";
import { Link } from "react-router-dom";

function Books() {
  const [releaseProduct, setReleaseProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://instituteprojectbackend.onrender.com/api/product/releaseproduct"
        );
        console.log("API Response:", res);
        setReleaseProduct(res.data?.AllProduct || []);
      } catch (error) {
        console.error("Error fetching products:", error.message);
        setReleaseProduct([]); // Prevent breaking UI
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredProducts = releaseProduct.filter(
    (item) =>
      item.bookname.toLowerCase().includes(search.toLowerCase()) ||
      item.department.toLowerCase().includes(search.toLowerCase()) ||
      item.semister.toLowerCase().includes(search.toLowerCase())
  );

  const handleCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="mx-[20px]">
      <h1 className="text-[45px] font-bold text-center py-[20px]">
        Find Your Relevant Book
      </h1>
      <div className="w-1/2 mx-auto mb-[40px]">
        <input
          onChange={handleSearch}
          value={search}
          name="search"
          type="text"
          placeholder="Search your book"
          className="w-full outline-none border-2 border-black rounded-md px-3 py-1"
        />
      </div>

      {loading ? (
        <Loading />
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-12 gap-4">
          {filteredProducts && filteredProducts?.map((product) => (
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
          ))}
        </div>
      ) : (
        <p className="text-center">No products found.</p>
      )}
    </div>
  );
}

export default Books;


