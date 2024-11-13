import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Registration() {
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
      });
    
      const [image, setImage] = useState(null);
    
      const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    
        setInputData({
          ...inputData,
          [name]: value,
        });
      };
    
      const handleImageChange = (e) => {
        setImage(e.target.files[0]); // Get the selected file
      };
    
      const navigate = useNavigate();
    
      const handleSubmit = async () => {
        const form = new FormData();
        form.append("name", inputData.name);
        form.append("email", inputData.email);
        form.append("password", inputData.password);
        form.append("role", inputData.role); // Append role to FormData
        if (image) {
          form.append("image", image); // Append image if selected
        }
        
        axios.defaults.withCredentials = true;
        
        try {
          const res = await axios.post("http://localhost:3000/api/user/registration", form);
          console.log(res);
          
          if (res.status === 201) {
            navigate("/signin");
            
          
            toast.success(res.data.message);
          }
        } catch (error) {
          toast.error(error.response?.data?.message || error.message);
        }
      };
    
    
      
    
      return (
        <div className='h-screen flex justify-center items-center'>
          <div className='w-2/4 bg-white mx-auto p-5 rounded-md flex flex-col gap-y-5'>
            <h1 className='text-4xl text-center mb-4 font-bold underline'>Registration Form</h1>
    
            <div>
              <label htmlFor="name">Enter your name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full py-1 px-3 outline-none border border-black rounded"
                onChange={handleChange}
              />
            </div>
    
            <div>
              <label htmlFor="email">Enter your email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full py-1 px-3 outline-none border border-black rounded"
                onChange={handleChange}
              />
            </div>
    
            <div>
              <label htmlFor="role">Enter your role (admin/user)</label>
              <input
                type="text"
                name="role"
                placeholder="Enter your role: admin or user"
                className="w-full py-1 px-3 outline-none border border-black rounded"
                onChange={handleChange}
              />
            </div>
    
            <div>
              <label htmlFor="password">Enter your password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full py-1 px-3 outline-none border border-black rounded"
                onChange={handleChange}
              />
            </div>
    
            <div>
              <label htmlFor="image">Upload your image</label>
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
              />
            </div>
    
            <button
              onClick={handleSubmit}
              className="bg-green-600 w-full text-center text-white py-1 px-3 rounded-md"
            >
              Register
            </button>
    
            <p>
              Already have an account?{" "}
              <Link className="text-green-700 ml-5 bg-green-100 py-1 px-2 rounded-md" to={"/signin"}>
                Login
              </Link>
            </p>
          </div>
        </div>
      );
}

export default Registration
