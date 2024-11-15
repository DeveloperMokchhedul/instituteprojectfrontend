import React, { useState } from 'react';
import Button from '../common/Button';
import { CiSearch } from 'react-icons/ci';
import ButtonIcon from '../common/ButtonIcon';
import Container from '../common/Container';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { NavbarData } from '../../api/navbar';
import { GiCrossMark, GiHamburgerMenu } from 'react-icons/gi';
import { CgProfile } from "react-icons/cg";
import {useDispatch, useSelector}  from "react-redux"
import { signOut } from '../../redux/slice/userSlice';
import { CiShoppingCart } from "react-icons/ci";
function Navbar() {
  const {currentUser,isAuthenticated} = useSelector((state)=>state.user)
  const {cartItem} = useSelector((state)=>state.cart)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [ismenu, setIsMenu] = useState(false);
  const [profile,setProfile] = useState(false)
  const handleProfile=()=>{


  }


  const handleLogOut = ()=>{
    dispatch(signOut())
  }
  return (
    <>
      <header className='z-50 w-full bg-bgPrimary'>
        <Container className="pt-[23px] pb-[18px]">
          <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>BookCycle</h1>

               {/* mobile menu */}
               {ismenu ? (
              <GiCrossMark onClick={() => setIsMenu(false)} className='text-white text-2xl z-50 md:hidden' />
            ) : (
              <GiHamburgerMenu onClick={() => setIsMenu(true)} className='text-white text-2xl z-50 md:hidden' />
            )}

            <div
              className={`md:hidden absolute top-0 left-0 right-0 h-screen transition-all duration-500 transform ${ismenu ? 'translate-x-0 bg-black/25' : '-translate-x-full'
                } z-40 flex flex-col items-center gap-5`}
            >
              {ismenu && (
                <div className='flex flex-col items-center gap-8'>
                  <ul className='pt-[100px] flex flex-col gap-[30px] text-[14px] leading-[18px] text-gray'>
                    {NavbarData?.map((item) => (
                      <li key={item.id} onClick={() => setIsMenu(false)}>
                        <NavLink
                          to={item.path}
                          className="font-onest  text-white text-[14px] leading-[17px] transition-all duration-300 hover:scale-110 "
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                  {/* <NavbarProfileSection /> */}
                </div>
              )}
            </div>

            {/* desktop menu start */}
            <div className='hidden md:flex'>
              <ul className='flex md:gap-[15px] lg:gap-[35px] md:text-[12px] lg:text-[14px] leading-[18px] text-gray'>
                {NavbarData?.map((item) => (
                  <li key={item.id} className='transition-all duration-300 hover:scale-105 hover:text-titleColor'>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `font-onest text-secondary md:text-[12px] lg:text-[14px] leading-[17px]  ${isActive ? 'text-titleColor border-b-4 border-titleColor pb-[27.5px]' : 'text-black'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div  className='flex gap-5 items-center relative hidden md:flex'>
              <div className='flex gap-5 items-center'>
                <div className='relative'>

                <Link to={"/cart"}>  <CiShoppingCart  className='text-3xl'  /></Link>
                  <div className='w-[25px] h-[25px] bg-red-400 rounded-full absolute -top-3 -right-2'> 
                    <p className='flex items-center justify-center'>{cartItem.length}</p>
                  </div>
                  
                </div>
              {
                // currentUser?<img onClick={()=>setProfile(!profile)} className='w-[40px] h-[40px] border rounded-full' src={currentUser.data.data.user.image} alt="" />:<CgProfile />
              }
              </div>

              {
                !currentUser &&
                <div className='flex gap-3'>
                  <button className='bg-green-600 text-white px-3 py-1 rounded-md'><Link to={"/registration"}>SignUp</Link></button>
                  <button className='bg-green-600 text-white px-3 py-1 rounded-md'><Link to={"/signin"}>Login</Link></button>
                
                </div>
              }
              {
                profile &&        
                <div onClick={()=>setProfile(false)} className='w-[150px] h-[150px] absolute top-[52px] right-5 text-center flex flex-col gap-3'> 
                <Link to={"/profile"}>Profile</Link>
                <button onClick={handleLogOut}>Logout</button>
              </div>
              }
            </div>

          </div>
        </Container>
      </header>
    </>
  );
}

export default Navbar;

