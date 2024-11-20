import axios from 'axios';
import React, { useEffect, useState } from 'react';

function OrderProduct() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]); // Stores all products

  // Fetch orders on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "http://localhost:5050/api/order/findbyowner",
          { withCredentials: true }
        );
        setProduct(res.data.myOrders);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  // Handle status change
  const handleChange = async (id, event) => {
    const selectedValue = event.target.value; // Get the selected status
    console.log("Changing status for ID:", id, "to:", selectedValue);

    try {
      // Send the updated status to the backend
      const response = await axios.put(
        `http://localhost:5050/api/order/orders/${id}/status`,
        { status: selectedValue },
        { withCredentials: true }
      );

      console.log("Status updated successfully:", response.data);

      // Fetch the updated status from the backend to avoid local inconsistency
      const updatedProduct = await axios.get(
        "http://localhost:5050/api/order/findbyowner",
        { withCredentials: true }
      );

      // Update the state with fresh data
      setProduct(updatedProduct.data.myOrders);

      alert("Status updated successfully!");
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status. Please try again.");
    }
  };

  return (
    <div>
      <table className="border border-collapse w-4/5 mx-auto mt-[30px]">
        <thead>
          <tr className="border">
            <th className="border px-4 py-2">Ordered By</th>
            <th className="border px-4 py-2">Product Name & Quantity</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => (
            <tr key={item._id}>
              <td className="border px-4 py-2">
                <p>Name: {item.firstname} {item.lastname}</p>
                <p>Phone: {item.phone}</p>
                <p>District: {item.district}</p>
                <p>City: {item.city}</p>
                <p>ZipCode: {item.zip}</p>
              </td>
              <td className="border px-4 py-2 text-center text-2xl">
                {item.book}
              </td>
              <td className="border px-4 py-2 text-2xl text-center">
                {item.totalprice}
              </td>
              <td className="border px-4 py-2">
                <select
                  onChange={(e) => handleChange(item._id, e)} // Pass ID and event
                  value={item.status} // Use item.status to reflect the backend value
                  className="outline-none bg-gray-500 w-full"
                >
                  <option value="pending">Pending</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderProduct;
