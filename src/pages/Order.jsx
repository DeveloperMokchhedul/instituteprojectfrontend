import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import UserDetails from "../components/Checkout/UserDetails";
import OrderSamary from "../components/Checkout/OrderSamary";

function Order() {
  const { totalPrice, cartItem, totalQuantity } = useSelector((state) => state.cart);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const orderData = {
    firstname: userData.firstname,
    lastname: userData.lastname,
    district: userData.district,
    city: userData.city,
    zip: userData.zip,
    village: userData.village,
    book: cartItem.map((item) => `${item.bookname} × ${item.quantity}`),
    totalprice: totalPrice,
  };

  const placeOrderHandle = async () => {
    // Validate input
    if (!userData.firstname || !userData.lastname || !userData.district) {
      return toast.error("Please fill in all required fields!");
    }

    try {
      const res = await axios.post("http://localhost:5050/api/order/addorder", orderData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.status === 201) {
        toast.success("Order placed successfully!");
        navigate("/order-confirmation"); 
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="my-10 mx-[20px]">
      <h1 className="text-2xl font-bold">Enter your details to complete this order</h1>
      <div className="flex gap-[50px]">
        <UserDetails handleChange={handleChange} />
        <OrderSamary placeOrderHandle={placeOrderHandle} />
      </div>
    </div>
  );
}

export default Order;
