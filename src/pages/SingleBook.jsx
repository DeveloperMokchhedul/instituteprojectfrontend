// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Loading from "./Loading";
// import { useDispatch } from "react-redux";
// import {addToCart} from '../redux/slice/cartSlice'

// function SingleBook() {
//   const dispatch = useDispatch()
//   const [singleBook, setSingleBook] = useState();
//   const [loading,setLoading] = useState(false)
//   const { id } = useParams();
//   useEffect(() => {
//     const singlebook = async () => {
//       setLoading(true)
//       const res = await axios.get(
//         `https://instituteprojectbackend.onrender.com/api/product/singleproduct/${id}`
//       );
//       setSingleBook(res.data.data);
//       setLoading(false)
//     };
//     singlebook();
//   }, []);

//   if(loading){
//     return <Loading />
//   }



  
// const handleCart = (product) => {
//   console.log("product added in cart");
  
//   dispatch(addToCart(product));
// };

//   return (
//     <>
//       <h1 className="text-5xl font-bold uppercase text-center mt-[40px] font-onest">
//         <span className="">"{singleBook?.bookname}" </span>Book Details
//       </h1>
//       <div className="w-3/4 mx-auto grid grid-cols-12 gap-5 my-[100px] items-center">
//         <div className="col-span-12 md:col-span-6">
//           <img className="w-[300px] hover:scale-110 transition-all duration-500 hover:rounded-2xl" src={singleBook?.productImage} />
//         </div>
//         <div className="col-span-12 md:col-span-6">
//           <h1 className="text-[50px] uppercase font-bold font-oswald">
//             {singleBook?.bookname}
//           </h1>
//           <p>{singleBook?.description}</p>

//           <button onClick={()=>handleCart(singleBook)} className="bg-red-400 px-2 py-1 rounded-md text-white mt-[20px] w-full hover:bg-black hover:text-white transition-all duration-500 font-oswald font-bold">
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       <div className="w-2/4 mx-auto ">
//         <h1 className="text-3xl">Book Posted by:</h1>
//         <div className="flex gap-10 items-center mt-[30px] justify-center">
//           <div className="font-onest font-semibold">
//             <p className="">{singleBook?.productOwner?.name}</p>
//             <p>{singleBook?.productOwner?.email}</p>
//             <p>{singleBook?.productOwner?.phone}</p>
//           </div>
//           <div>
//             <img
//               className="w-[130px] h-[120px] rounded-full "
//               src={singleBook?.productOwner?.image}
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SingleBook;


import React from 'react'

function SingleBook() {
  return (
    <div>SingleBook</div>
  )
}

export default SingleBook