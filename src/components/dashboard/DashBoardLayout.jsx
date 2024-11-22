import React, { useState } from "react";
import AddBook from "./sellerdashboard/AddBook";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function DashBoardLayout({ children }) {
  const { currentUser, isAuthenticated } = useSelector((state) => state.user);
  const currentUserRole = currentUser.data.data.user.role;

  console.log("current user is ", currentUser.data.data.user.name);


  const [size, setSize] = useState(280);
  const navigate = useNavigate();

  return (
    <div className="flex ">
      <div
        // style={{ width: size }}
        className="fixed w-[120px] md:w-[280px] left-0 top-0 z-50 h-screen bg-black px-5 pt-3"
      >
        {currentUserRole === "user" ? (
          <div className="mt-[25px]">
            <h1 className="text-white font-bold font-oswald text-center shadow-cardShadow text-2xl">User Dashboard</h1>

            <div className="flex flex-col mt-[30px]">
              <button
                onClick={() => navigate("/dashboard/user/order")}
                className="px-3 py-1 rounded-lg bg-white mt-[20px] "
              >
                show order
              </button>

              <button
                onClick={() => navigate("/dashboard/user/order")}
                className="px-3 py-1 rounded-lg bg-white mt-[20px] "
              >
                UpdateProfile
              </button>
            </div>

            <div className="flex flex-col gap-1 justify-center items-center absolute bottom-5">
              <img className="w-[120px] h-[120px] rounded-full" src={currentUser?.data.data.user.image} alt="" />
              <p className="text-[16px] font-bold text-white font-onest ">{currentUser?.data.data.user.name}</p>
              <p className="text-[13px] font-bold text-white font-onest ">{currentUser?.data.data.user.email}</p>
              <p className="text-[16px] font-bold text-white font-onest ">{currentUser?.data.data.user.phone}</p>

            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-white font-bold font-onest text-2xl">Seller Dashboard</h1>
            <div className="flex flex-col  ">
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

            <div className="flex flex-col gap-1 justify-center items-center absolute bottom-10">
              <img className="w-[120px] h-[120px] object-cover rounded-full border-2 border-white " src={currentUser?.data.data.user.image} alt="" />
              <p className="text-[16px] font-bold text-white font-onest uppercase ">{currentUser?.data.data.user.name}</p>
              <p className="text-[13px] font-bold text-white font-onest ">{currentUser?.data.data.user.email}</p>
              <p className="text-[16px] font-bold text-white font-onest ">{currentUser?.data.data.user.phone}</p>
            </div>
          </div>
        )}
      </div>
      <div className="ml-[130px] md:ml-[320px] w-full h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default DashBoardLayout;
