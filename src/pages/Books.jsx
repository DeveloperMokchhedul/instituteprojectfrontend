import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";
import Loading from "./Loading"; // Ensure this is correctly imported

function Books() {
  const [releaseProduct, setReleaseProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const ShowAllProduct = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://instituteprojectbackend.onrender.com/api/product/releaseproduct"
        );
        setReleaseProduct(res.data.AllProduct);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };
    ShowAllProduct();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const SearchProduct = releaseProduct.filter((item) =>
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
      ) : (
        <div className="grid grid-cols-12 gap-4">
          {SearchProduct &&
            SearchProduct?.reverse()
              .map((product) => (
                <div
                  key={product._id}
                  className="col-span-12 md:col-span-3 p-3 rounded-md border border-black"
                >
                  <div className="flex justify-between px-2">
                    <p className="text-xl rounded-sm pb-2">
                      {product.semister}
                    </p>
                    <p className="text-xl rounded-sm pb-2">
                      {product.department}
                    </p>
                  </div>
                  <img
                    className="w-[320px] h-[360px]"
                    src={product.productImage}
                    alt=""
                  />
                  <p>BooKName: {product.bookname}</p>
                  <p>Price: {product.price}৳</p>
                  <p>{product.description.slice(0, 50)}...</p>
                  <div className="flex justify-between px-3 my-3">
                    <Link
                      to={`/books/${product._id}`}
                      className="bg-green-400 px-2 py-1 rounded-md text-white"
                    >
                      Show details
                    </Link>
                    <button
                      onClick={() => handleCart(product)}
                      className="bg-red-400 px-2 py-1 rounded-md text-white"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
        </div>
      )}
    </div>
  );
}

export default Books;
