import React, { useState } from "react";
import AddBook from "./sellerdashboard/AddBook";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiSlideshow4Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaFirstOrder } from "react-icons/fa";
function DashBoardLayout({ children }) {
  const { currentUser, isAuthenticated } = useSelector((state) => state.user);
  const currentUserRole = currentUser.data.data.user.role;

  console.log("current user is ", currentUser.data.data.user.name);


  const [size, setSize] = useState(280);
  const navigate = useNavigate();

  return (
    <div className="flex  ">
      <div
        // style={{ width: size }}
        className="md:fixed w-[100px] relative md:w-[280px] left-0 top-0  z-50 h-screen bg-black p-5 pt-3"
      >
        {currentUserRole === "user" ? (
          <div className="mt-[25px]">
            <h1 className="text-[10px] text-center text-white font-bold font-oswald shadow-cardShadow md:text-2xl">User Dashboard</h1>


            <div className="mt-[30px] flex flex-col gap-10">
              <RiSlideshow4Fill onClick={() => navigate("/dashboard/user/order")} className="text-white text-2xl text-center md:hidden" />
              <RiSlideshow4Fill onClick={() => navigate("/dashboard")} className="text-white text-2xl text-center md:hidden" />
              <RiSlideshow4Fill onClick={() => navigate("/dashboard")} className="text-white text-2xl text-center md:hidden" />

            </div>

            
            <div className=" flex-col hidden md:flex  ">
              <button
                 onClick={() => navigate("/dashboard/user/order")}
                className="px-3 py-1 rounded-lg bg-white mt-[20px] "
              >
                Show Order
              </button>
              <button
                onClick={() => navigate("/dashboard")}
                className="px-3 py-1 rounded-lg bg-white mt-[20px] "
              >
                Update Profile
              </button>
            </div>

            <div className="flex flex-col gap-1 justify-center items-center absolute bottom-5 ">
              <img className="w-[40px] h-[40px] md:w-[120px] md:h-[120px] rounded-full" src={currentUser?.data.data.user.image} alt="" />
              <p className="text-[12px] text-center md:text-[16px] font-bold text-white font-onest ">{currentUser?.data.data.user.name}</p>
              <p className="hidden md:flex md:text-[13px] font-bold text-white font-onest ">{currentUser?.data.data.user.email}</p>
              <p className=" text-[10px] md:text-[16px] font-bold text-white font-onest ">{currentUser?.data.data.user.phone}</p>

            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-[10px] text-center text-white font-bold font-oswald shadow-cardShadow md:text-2xl">Seller Dashboard</h1>

            <div className="mt-[30px] flex flex-col gap-10 items-center">
              <IoIosAddCircleOutline onClick={() => navigate("/dashboard/seller/addproduct")} className="text-white text-2xl text-center md:hidden" />
              <IoIosAddCircleOutline onClick={() => navigate("/dashboard/seller/product")} className="text-white text-2xl text-center md:hidden" />
              <FaFirstOrder onClick={() => navigate("/dashboard/seller/order")} className="text-white text-2xl text-center md:hidden" />
        

            </div>


            <div className=" flex-col hidden md:flex  ">
              <button
                onClick={() => navigate("/dashboard/seller/addproduct")}
                className="px-3 py-1 rounded-lg bg-white mt-[20px] "
              >
                AddProduct
              </button>
              <button
                onClick={() => navigate("/dashboard/seller/product")}
                className="px-3 py-1 rounded-lg bg-white mt-[20px] "
              >
                Product
              </button>
              <button
                onClick={() => navigate("/dashboard/seller/order")}
                className="px-3 py-1 rounded-lg bg-white mt-[20px] "
              >
                Order
              </button>
            </div>

            <div className="flex flex-col gap-1 justify-center items-center absolute bottom-5 ">
              <img className="w-[40px] h-[40px] md:w-[120px] md:h-[120px] rounded-full" src={currentUser?.data.data.user.image} alt="" />
              <p className="text-[12px] text-center md:text-[16px] font-bold text-white font-onest ">{currentUser?.data.data.user.name}</p>
              <p className="hidden md:flex md:text-[13px] font-bold text-white font-onest ">{currentUser?.data.data.user.email}</p>
              <p className=" text-[10px] md:text-[16px] font-bold text-white font-onest ">{currentUser?.data.data.user.phone}</p>

            </div>
          </div>
        )}
      </div>
      <div className="ml-[10px] md:ml-[320px] w-full h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default DashBoardLayout;
