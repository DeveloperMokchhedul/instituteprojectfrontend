import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import Loading from "../../../pages/Loading";
import { toast } from "react-toastify";

function ShowProduct() {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ShowAllProduct = async () => {
      setLoading(true);
      try {
        setLoading(true);
        const res = await axios.get(
          "https://instituteprojectbackend.onrender.com/api/product/products/by-owner",
          { withCredentials: true }
        );
        setLoading(false);
        setProduct(res.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };
    ShowAllProduct();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://instituteprojectbackend.onrender.com/api/product/deleteproduct/${id}`,
        {
          withCredentials: true,
        }
      );
      window.location.reload();
      console.log("Delete successful:", res.data);
      toast.success("product delete successfully");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <table className="border border-collapse w-4/5 mx-auto mt-[30px]">
        <thead>
          <tr className="border">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">photo</th>
            <th className="border px-4 py-2">Product Name</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">status</th>
          </tr>
        </thead>
        <tbody>
          {product &&
            product?.reverse().map((item) => (
              <tr>
                <td className="border px-4 py-2">{item._id}</td>
                <td className="border px-4 py-2">
                  <img
                    className="w-[30px] "
                    src={item.productImage}
                    alt="image"
                  />
                </td>
                <td className="border px-4 py-2">{item.bookname}</td>
                <td className="border px-4 py-2">{item.price}</td>
                <td className="border px-4 py-2 ">
                  <div className="flex gap-4 items-center justify-center ">
                    <button className="">
                      <FiEdit className="text-2xl" />{" "}
                    </button>
                    <button onClick={() => handleDelete(item._id)}>
                      <MdDeleteForever className="text-2xl" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default ShowProduct;
