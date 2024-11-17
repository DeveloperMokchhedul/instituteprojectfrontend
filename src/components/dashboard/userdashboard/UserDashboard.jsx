import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../../pages/Loading";

function UserDashboard() {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const findOrderByUser = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:5050/api/order/find", {
          withCredentials: true,
        });
        setOrder(res.data.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch orders. Please try again later.");
        setLoading(false);
      }
    };
    findOrderByUser();
  }, []);

  if (loading) {
    return <Loading />;
  }
  console.log(order);

  return (
    <div className="flex  flex-col gap-5 w-2/3 mx-auto mt-[20px] roounded-md">
      {order.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        order.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-slate-300 rounded-md  p-5"
          >
            <p c>
              {item.book.map((book) => (
                <div className="flex gap-12">{book}</div>
              ))}
            </p>

            <p>Total Price: {item.totalprice}</p>
            <div className="flex gap-3">
              <button className="bg-yellow-600 px-3 py-2 rounded-md">pending</button>
              <button className="bg-red-500 text-white rounded-md px-3 py-1">CancelOrder</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default UserDashboard;
