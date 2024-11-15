// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function NewRelease() {
//   const [releaseProduct, setReleaseProduct] = useState([])

//   useEffect(()=>{
//     const ShowAllProduct = async()=>{
//       const res = await axios.get("https://instituteprojectbackend.onrender.com/api/product/releaseproduct");
//       // setReleaseProduct(res.data.AllProduct)

//     }
//     ShowAllProduct()

//   },[])

  
// console.log(releaseProduct);


//   return (
//     <>
//       <div>
//         <div className="">
//           <p className="text-[12px] text-center">SOME QUALITY BOOK</p>
//           <h1 className="text-[45px] font-bold text-center ">New Release Book</h1>
//           <div>
//             <div className="grid grid-cols-12 gap-4 mt-[40px]">
//               {
//                 releaseProduct && releaseProduct?.slice(-8).reverse().map((product)=>(
//                   <div key={product._id} className="col-span-12 md:col-span-3 p-3 rounded-md border border-black">
//                     <div className="flex justify-between px-2">
//                     <p className="text-xl rounded-sm pb-2">{product.semister}</p>
//                     <p className="text-xl rounded-sm pb-2">{product.department}</p>
//                     </div>
//                     <img className="w-[320px] h-[360px] " src={product.productImage} alt="" />
//                     <p className="">BooKName:{product.bookname}</p>
//                     <p className="">Price:{product.price}৳</p>
//                     <p className="">{product.description.slice(0,60)}...</p>
//                     <div className="flex justify-between px-3 my-3">
//                     <Link to={`/books/${product._id}`} onClick={()=>handleSingleProduct(product._id)}  className="bg-green-400 px-2 py-1 rounded-md text-white">show details</Link>
//                       <button className="bg-red-400 px-2 py-1 rounded-md text-white">Add to Cart</button>
//                     </div>

//                   </div>

//                 ))
//               }

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default NewRelease;
