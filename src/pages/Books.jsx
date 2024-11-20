// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/slice/cartSlice";
// import Loading from "./Loading";

// function Books() {
//   const [releaseProduct, setReleaseProduct] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         const res = await axios.get(
//           "https://instituteprojectbackend.onrender.com/api/product/releaseproduct"
//         );
//         console.log("API Response:", res);
//         setReleaseProduct(res.data?.AllProduct || []);
//       } catch (error) {
//         console.error("Error fetching products:", error.message);
//         setReleaseProduct([]); // Prevent breaking UI
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   const filteredProducts = releaseProduct.filter(
//     (item) =>
//       item.bookname.toLowerCase().includes(search.toLowerCase()) ||
//       item.department.toLowerCase().includes(search.toLowerCase()) ||
//       item.semister.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleCart = (product) => {
//     dispatch(addToCart(product));
//   };

//   return (
//     <div className="mx-[20px]">
//       <h1 className="text-[45px] font-bold text-center py-[20px]">
//         Find Your Relevant Book
//       </h1>
//       <div className="w-1/2 mx-auto mb-[40px]">
//         <input
//           onChange={handleSearch}
//           value={search}
//           name="search"
//           type="text"
//           placeholder="Search your book"
//           className="w-full outline-none border-2 border-black rounded-md px-3 py-1"
//         />
//       </div>

//       {loading ? (
//         <Loading />
//       ) : filteredProducts.length > 0 ? (
//         <div className="grid grid-cols-12 gap-4">
//           {filteredProducts && filteredProducts.map((product) => (
//             <div
//               key={product._id}
//               className="col-span-12 md:col-span-3 p-5 rounded-md shadow-cardShadow hover:scale-95 transition-all duration-1000 hover:text-white hover:bg-black"
//             >
//               <img
//                 className="w-[150px] h-[150px] object-cover mx-auto rounded-lg"
//                 src={product.productImage || "/default-image.jpg"}
//                 alt={product.bookname || "Book"}
//               />
//               <p className="font-bold text-center">{product.bookname}</p>
//               <p className="text-center">{product.price}৳</p>
//               <button
//                 onClick={() => handleCart(product)}
//                 className="bg-red-400 px-2 py-1 rounded-md text-white w-full"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-center">No products found.</p>
//       )}
//     </div>
//   );
// }

// export default Books;


import React from 'react'

function Books() {
  return (
    <div>Books</div>
  )
}

export default Books