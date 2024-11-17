import React, { useState } from "react";
import AddBook from "./sellerdashboard/AddBook";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function DashBoardLayout({ children }) {
  const { currentUser, isAuthenticated } = useSelector((state) => state.user);
  const currentUserRole = currentUser.data.data.user.role;
  
  const [size, setSize] = useState(280);
  const navigate = useNavigate();
  return (
    <div className="flex">
      <div
        style={{ width: size }}
        className="absolute left-0 top-[81px] h-screen bg-slate-400 px-5 pt-3"
      >
        {currentUserRole==="user" ? (
          <div>
            <h1 className="text-white font-bold text-2xl">User Dashboard</h1>
            <button
              onClick={() => navigate("/dashboard/user/order")}
              className="px-3 py-1 rounded-lg bg-white mt-[20px] "
            >
              show order
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-white font-bold text-2xl">Seller Dashboard</h1>
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
          </div>
        )}
      </div>
      <div className="ml-[320px] w-full h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default DashBoardLayout;
