// import React, { useContext } from "react";
// import "./ForgetPassword.css";
// import { FaUserAlt, FaEye, FaEyeSlash } from "react-icons/fa";
// import { useState,useEffect } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import loginimg from "../asset/images/login.jpg";
// import { RiLockPasswordFill } from "react-icons/ri";
// import SummaryApi from "../common";
// import { toast } from "react-toastify";
// import Context from "../context";

// const ForgetPassword = () => {
//     // const navigate = useNavigate();
//     // const {fetchUserDetails} = useContext(Context);

    

//     // const [data, setData] = useState({
//     //     email: '',
//     //     password: ''
//     // });

//     // const handleChange = (e) => {
//     //     const { name , value } = e.target
//     //     setData((preve)=>{
//     //         return {
//     //             ...preve,
//     //             [name] : value
//     //         }
//     //     })
//     // };

//     // console.log("data login",data)

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     const dataResponse = await fetch(SummaryApi.login.url,{
//     //         method: SummaryApi.login.method,
//     //         credentials: 'include',
//     //         headers: {
//     //             "content-type":"application/json"
//     //         },
//     //         body : JSON.stringify(data)
//     //     })

//     //     const dataApi = await dataResponse.json()

//     //     if(dataApi.success){
//     //         toast.success(dataApi.message);
//     //         navigate('/Home');
//     //         fetchUserDetails()
//     //     }
//     //     if(dataApi.error){
//     //         toast.error(dataApi.message)
//     //     }
//     // };

//     // const [pstatus, setPstatus] = useState(false);

//     return (
    
//         <div className="container-3">
//         <img className="login-img" src={loginimg} alt="login-img" />
//         <div className="welcome">
//             <h4>Welcome</h4>
//         </div>
//         <div className="welcome-2">
//             <h1>Forgot Your Password</h1>
//         </div>
//         <div className="login-box">
//         <form >
//         <h1>Enter Your Email</h1>
//         <div className="input-box">
//             <input
//             type="text"
//             placeholder="Username or Gmail"
//             name='email' 
//             required
//             />
//             <FaUserAlt size={25} className="icon" />
//         </div>
//         <div className="input-box">
//             <input
//             type="text"
//             placeholder="Old Password"
//             name='o_password' 
//             required
//             />
//             <RiLockPasswordFill size={25} className="icon" />
//         </div>
//         <div className="input-box">
//             <input
//             type="text"
//             placeholder="New Password"
//             name='n_password' 
//             required
//             />
//             <RiLockPasswordFill size={25} className="icon" />
//         </div>
//         {/* <div className="input-box">
//             <input
//             type={pstatus ? "text" : "password"}
//             placeholder="Password"
//             name='password' value={data.password} onChange={handleChange}
//             required
//             />
//             {pstatus ? (
//             <FaEyeSlash className="icon" onClick={() => setPstatus(!pstatus)} />
//             ) : (
//             <FaEye className="icon" onClick={() => setPstatus(!pstatus)} />
//             )}
//         </div>
//         <div className="remember-forgot">
//             <label>
//             <input type="checkbox" />
//             Remeber Me
//             </label>
//             <a href="#">Forgot Password</a>
//         </div> */}
//         <button type="submit">Enter</button>
//         {/* <div className="register-link">
//             <p>
//             Don't have an account?{" "}
//             <Link className="" to="/Register">
//                 Register
//             </Link>
//             </p>
//         </div> */}
//         </form>
//     </div>
//     </div>
//     );
// }

// export { ForgetPassword };


import React, { useState } from "react";
import "./ForgetPassword.css"; // Ensure you have this CSS file
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import loginimg from "../asset/images/login.jpg"; // Ensure the image path is correct

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(SummaryApi.changePassword.url, {
                method: SummaryApi.changePassword.method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, oldPassword, newPassword })
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Password changed successfully!");
                navigate('/Login'); 
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        }
    };

    return (
        <div className="container-3">
            <img className="login-img" src={loginimg} alt="login-img" />
            <div className="welcome">
                <h4>Welcome</h4>
            </div>
            <div className="welcome-2">
                <h1>Change Your Password</h1>
            </div>
            <div className="login-box">
                <form onSubmit={handleSubmit}>
                    <h1>Enter Your Details</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <FaUserAlt size={25} className="icon" />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Old Password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            required
                        />
                        <RiLockPasswordFill size={25} className="icon" />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                        <RiLockPasswordFill size={25} className="icon" />
                    </div>

                    <button type="submit">Change Password</button>
                </form>
            </div>
        </div>
    );
};

export { ForgetPassword };
