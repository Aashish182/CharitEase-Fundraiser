import React from 'react';
import './Navbar.css';
import { useState,useEffect } from 'react';
import { Link,NavLink,useNavigate } from 'react-router-dom';
import logo from '../asset/images/logo.png';
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuDisplay,setMenuDisplay] = useState(false);
  const dispatch = useDispatch();

  const user =useSelector(state => state?.user?.user)

  
  const handleLogout = async() => {
    const fetchData = await fetch (SummaryApi.logout_user.url,{
      method: SummaryApi.logout_user.method,
      credentials: 'include'
    })

    const data = await fetchData.json()

    if(data.success){
      toast.success(data.message);
      dispatch(setUserDetails(null));
      setMenuDisplay(false);
      navigate('/');
  }
  if(data.error){
      toast.error(data.message);
  }

  }

  return (
    <div className='navbar'>
      <NavLink className='' to='/Home'><img src={logo} alt='' className='logo'/></NavLink>
      {
        user?.name ? (
          <ul>
          <NavLink className={(e)=>{return e.isActive?"active":"non"}} to='/Home'><li>Home</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"active":"non"}} to='/MyCampaign'><li>My Campaign</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"active":"non"}} to='/Donate'><li>Donate</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"active":"non"}} to='/Contact'><li>Contact</li></NavLink>
          </ul>
        ) : (
          <ul>
          <NavLink className={(e)=>{return e.isActive?"active":"non"}} to='/Home'><li>Home</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"active":"non"}} to='/Donate'><li>Donate</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"active":"non"}} to='/Works'><li>How it works</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"active":"non"}} to='/Contact'><li>Contact</li></NavLink>
          </ul>
        )
      }

        <ul>
        <div className='search-box'>
          <input type='text' placeholder='Search' />
          <FaSearch className='search'/>
        </div>
        <div className="profile">
            {
              user?.name ? (
                <li className='username' onClick={() => setMenuDisplay(preve => !preve)}>{user?.name} <IoIosArrowDown className='arrow' /></li>
              ): (
              <NavLink className={(e)=>{return e.isActive?"active":"non"}} to='/Login'>
              <li>Login</li> 
              </NavLink>
              )
            }

            {
              menuDisplay &&(
                <div className='profile_hover'>
                <NavLink className='profile_link' to='/Profile'>
                  <div className='profile_link' onClick={() => setMenuDisplay(preve => !preve)}>Profile</div>
                </NavLink>
                <NavLink className='profile_link'>
                  <div className='Logout' onClick={handleLogout}>
                    LogOut
                  </div>
                </NavLink>
                </div>
              )
            }
          </div>
        </ul>
      
    </div>
  )
}

export default Navbar;
