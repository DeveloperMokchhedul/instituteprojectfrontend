import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { department } from "../api/department";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";

function Books() {
  const [releaseProduct, setReleaseProduct] = useState([]);
  const [search, setSearch] = useState(releaseProduct);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    const ShowAllProduct = async () => {
      const res = await axios.get(
         "http://localhost:5050/api/product/releaseproduct"
      );
      
      setReleaseProduct(res.data.AllProduct);
    };
    ShowAllProduct();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const SearchProduct = releaseProduct.filter((item) =>
    item.bookname.toLowerCase().includes(search) ||
    item.department.toLowerCase().includes(search) ||
    item.semister.toLowerCase().includes(search)
  );



  // const handleDepartment = (department)=>{
  //   const filterDepartment = releaseProduct.filter((item)=>item.department==department)
  //   setReleaseProduct(filterDepartment)
  // }

  const handleCart = (product)=>{
    dispatch(addToCart(product))
    
  }










  return (
    <>
      <div>
        <div className="mx-[20px]">
          <h1 className="text-[45px] font-bold text-center py-[20px] ">
            Find Your Relevant Book
          </h1>
          <div className="w-1/2 mx-auto mb-[40px]">
            <input
              onChange={handleSearch}
              name="search"
              type="text"
              placeholder="Search your book"
              className="w-full outline-none border-2 border-black rounded-md px-3 py-1"
            />
          </div>
          {/* <div className="flex gap-5 items-center justify-center pb-[30px]">
            {department.map((item,index)=>(
              <button onClick={()=>handleDepartment(item.name)} key={index}>{item.name}</button>
            ))}

          </div> */}
          <div>
            <div className="grid grid-cols-12 gap-4">
              {SearchProduct &&
                SearchProduct?.slice(-8)
                  .reverse()
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
                        className="w-[320px] h-[360px] "
                        src={product.productImage}
                        alt=""
                      />
                      <p className="">BooKName:{product.bookname}</p>
                      <p className="">Price:{product.price}৳</p>
                      <p className="">{product.description.slice(0, 50)}...</p>
                      <div className="flex justify-between px-3 my-3">
                        <Link
                          to={`/books/${product._id}`}
                          onClick={() => handleSingleProduct(product._id)}
                          className="bg-green-400 px-2 py-1 rounded-md text-white"
                        >
                          show details
                        </Link>
                        <button onClick={()=>handleCart(product)} className="bg-red-400 px-2 py-1 rounded-md text-white">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Books;
