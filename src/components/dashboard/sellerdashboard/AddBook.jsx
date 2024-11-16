import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AddBook() {
  const [inputData, setInputData] = useState({
    bookname: "",
    price: "",
    semister: "",
    department: "",
    description: ""
  });

  const [productImage, setProductImage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("bookname", inputData.bookname);
    formData.append("price", inputData.price);
    formData.append("semister", inputData.semister);
    formData.append("department", inputData.department);
    formData.append("description", inputData.description);
    if (productImage) {
      formData.append("productImage", productImage);
    }

    console.log(formData);

    try {
      const res = await axios.post("http://localhost:5173/api/product/addproduct", formData, {
        withCredentials: true,
      });

      if (res.status === 201) {
        toast.success(res.data.message);
        navigate('/'); // Redirect after success
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className='h-screen flex justify-center items-center mt-10'>
      <div className='w-2/4 bg-white mx-auto p-5 rounded-md flex flex-col gap-y-5'>
        <h1 className='text-4xl text-center mb-4 font-bold underline'>Add Your Book for Sales</h1>

        <div>
          <label htmlFor="name">Enter your BookName</label>
          <input
            type="text"
            name="bookname"
            placeholder="Enter your bookname"
            className="w-full py-1 px-3 outline-none border border-black rounded"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="price">Enter your Book Price</label>
          <input
            type="number"
            name="price"
            placeholder="Enter your price"
            className="w-full py-1 px-3 outline-none border border-black rounded"
            onChange={handleChange}
          />
        </div>

        <div>
          <select name="semister" id="semister" onChange={handleChange} className='w-full py-1 px-3 outline-none border border-black rounded'>
            <option value="">Enter Semister</option>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
            <option value="5th">5th</option>
            <option value="6th">6th</option>
            <option value="7th">7th</option>
          </select>
        </div>

        <div>
          <select name="department" id="department" onChange={handleChange} className='w-full py-1 px-3 outline-none border border-black rounded'>
            <option value="">Enter Department</option>
            <option value="Computer"> Computer</option>
            <option value="civil">Civil</option>
            <option value="electrical">Electrical</option>
            <option value="mechanical">Mechanical</option>
            <option value="electronix">Electronix</option>
            <option value="power">Power</option>
            <option value="electromedical">ElectroMedical</option>
          </select>
        </div>

        <div>
          <label htmlFor="description">Enter Book description</label>
          <textarea name='description' onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"></textarea>
        </div>

        <div>
          <label htmlFor="productImage">Upload your Book image</label>
          <input type="file" name="productImage" onChange={handleImageChange} />
        </div>

        <button onClick={handleSubmit} className="bg-green-600 w-full text-center text-white py-1 px-3 rounded-md">
          Add Book
        </button>
      </div>
    </div>
  );
}

export default AddBook;
