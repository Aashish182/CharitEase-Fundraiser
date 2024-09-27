import React from 'react';
import './Register.css';
import { FaUserAlt,FaEye,FaEyeSlash,FaPhoneAlt } from "react-icons/fa";
import { useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import { CgMail } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import loginimg from "../asset/images/login.jpg";
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        number:'',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name , value } = e.target
        setData((preve)=>{
            return {
                ...preve,
                [name] : value
            }
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataResponse = await fetch(SummaryApi.register.url,{
            method: SummaryApi.register.method,
            headers: {
                "content-type":"application/json"
            },
            body : JSON.stringify(data)
        })

        const dataApi =await dataResponse.json();

        if(dataApi.success){
            toast.success(dataApi.message);
            navigate('/Login');
        }
        if(dataApi.error){
            toast.error(dataApi.message)
        }

        console.log("data",dataApi);
    };

    const [pstatus,setPstatus]=useState(false);
    
    return (
    <div className="container-3">
        <img className="login-img" src={loginimg} alt="login-img" />
        <div className="welcome">
            <h4>Welcome To CharitEase</h4>
        </div>
        <div className="welcome-1">
            <h1>Create Account for CharitEase</h1>
        </div>
    <div className='Register-box'>
        <form onSubmit={handleSubmit} method='post'>
        <h1>Sign-Up</h1>
        <div className="input-box">
            <input type='text' name='name' value={data.name} onChange={handleChange} placeholder='Full Name' required />
            <FaUserAlt className='icon' />
        </div>
        <div className="input-box">
            <input type='text' name='number' value={data.number} onChange={handleChange} placeholder='Phone Number' required />
            <FaPhoneAlt className='icon' />
        </div>
        <div className="input-box">
            <input type='text' name='email' value={data.email} onChange={handleChange} placeholder='Gmail' required />
            <CgMail  className='icon' />
        </div>
        <div className="input-box">
            <input type={pstatus?'text':'password'} name='password' value={data.password} onChange={handleChange}  placeholder='Password' required />
            { pstatus?<FaEyeSlash className='icon' onClick={()=>setPstatus(!pstatus)} />:<FaEye className='icon' onClick={()=>setPstatus(!pstatus)}/>}   
        </div>
        <button type='submit' >Sign Up</button>
        <div className="login-link">
            <p>Already have an account? <NavLink className='' to='/Login'>Login</NavLink></p>
        </div>
        </form>
    </div>
    </div>
    )
}

export {Register};