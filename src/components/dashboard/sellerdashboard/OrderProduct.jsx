import axios from 'axios';
import React, { useEffect, useState } from 'react'

function OrderProduct() {
  const [loading, setLoading] = useState(false)
  const [product,setProduct] = useState([])

  useEffect(() => {
    const ShowAllProduct = async () => {
      setLoading(true);
      try {
        setLoading(true);
        const res = await axios.get(
          "http://localhost:5050/api/order/findbyowner",
          { withCredentials: true }
        );
        
        setLoading(false);
        setProduct(res.data.myOrders);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };
    ShowAllProduct();
  }, []);





  return (
    <div>
        <table className="border border-collapse w-4/5 mx-auto mt-[30px]">
        <thead>
          <tr className="border">
            <th className="border px-4 py-2">Ordaredby</th>
            <th className="border px-4 py-2">Product Name & quantity</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">status</th>
          </tr>
        </thead>
        <tbody>

      
          {product &&
            product?.reverse().map((item) => (
              <tr>
                <td className="border px-4 py-2">
                  <p>Name: {item.firstname} {item.lastname}</p>
                  <p>Phone: {item.phone}</p>
                  <p>District: {item.district} </p>
                  <p>City: {item.city}</p>
                  <p>ZipCode: {item.zip}</p>
                  </td>
                <td className="border px-4 py-2 text-center text-2xl">{item.book}</td>
                <td className="border px-4 py-2 text-2xl text-center">{item.totalprice}</td>
                <td className="border flex justify-start items-center outline-none bg-transparent ">
                  <select name="status" id="status " className='outline-none bg-gray-500 w-full'>
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
  )
}

export default OrderProduct