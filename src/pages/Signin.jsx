import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import { signInSuccess } from "../redux/slice/userSlice";



function Signin() {


  const [input, setInput] = useState({
    email: '',
    role: "",
    password: ''
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({
      ...input,
      [name]: value
    });
  };

  console.log(input);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const handleSubmit = async () => {
    try {
        const res = await axios.post("http://localhost:5050/api/user/login",input,{
          headers:{
            "Content-Type":"application/json"
          },
          withCredentials:true
        })
        dispatch(signInSuccess(res))
  
        if (res.status === 200) {
          toast.success("Login successful!");
          navigate("/"); // Adjust navigation as needed
        }
        
        
    
      
    } catch (err) {
        console.log("i need to findout why login failed");
        console.log(err);
        
      toast.error(err.response?.message || "Login failed");
      console.error(err);
    }
  };

//   useEffect(() => {
//     if (currentUser) {
//       navigate("/");
//     }
//   }, [navigate, currentUser]);

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='w-2/4 bg-white mx-auto p-5 rounded-md flex flex-col gap-y-5'>
        <h1 className='text-4xl text-center mb-4 font-bold underline'>Login Form</h1>

        <div>
          <label htmlFor="email">Enter your email</label>
          <input
            type="email"
            name='email'
            placeholder='Enter your email'
            className='w-full py-1 px-3 outline-none border border-black rounded'
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Enter your password</label>
          <input
            type="password"
            name='password'
            placeholder='Enter your password'
            className='w-full py-1 px-3 outline-none border border-black rounded'
            onChange={handleChange}
          />
        </div>

        <div>
          <select name="role" id="role" onChange={handleChange} className='w-full py-1 px-3 outline-none border border-black rounded'>
            <option value="">Select your role</option>
            <option value="seller">Seller</option>
            <option value="user">User</option>
          </select>
        </div>

        <button onClick={handleSubmit} className='bg-green-600 w-full text-center text-white py-1 px-3 rounded-md'>
          Login
        </button>

        <p>Don't have an account? 
          <Link className="text-green-700 ml-5 bg-green-100 py-1 px-2 rounded-md" to={"/registration"}>
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
