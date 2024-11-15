import React, { useState } from "react";

function UserDetails() {
  const [orderData, setOrderData] = useState();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setOrderData({
      ...orderData,
      [name]: value,
    });
  };
  return (
    <div className="w-[70%] ">
      <div className="mt-[30px] w-full">
        <div className="flex gap-5">
          <div className="w-1/2">
            <label htmlFor="firstname">Enter your firstName</label>
            <input
              type="text"
              name="firstname"
              placeholder="Enter your FirstName"
              className="w-full py-1 px-3 outline-none border border-black rounded"
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="lastName">Enter your LastName</label>
            <input
              type="text"
              name="LastName"
              placeholder="Enter your name"
              className="w-full py-1 px-3 outline-none border border-black rounded"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="mt-[30px] w-full">
        <div className="flex gap-5">
          <div className="w-1/2">
            <label htmlFor="district">Enter your District </label>
            <input
              type="text"
              name="District"
              placeholder="Enter your District"
              className="w-full py-1 px-3 outline-none border border-black rounded"
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="city">Enter your City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter your City"
              className="w-full py-1 px-3 outline-none border border-black rounded"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="mt-[30px] w-full">
        <div className="flex gap-5">
          <div className="w-1/2">
            <label htmlFor="zip">Enter your Zipcode</label>
            <input
              type="text"
              name="zip"
              placeholder="Enter your Zipcode"
              className="w-full py-1 px-3 outline-none border border-black rounded"
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="email">Enter your village</label>
            <input
              type="text"
              name="village"
              placeholder="Enter your Village"
              className="w-full py-1 px-3 outline-none border border-black rounded"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
