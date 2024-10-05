import React, { useState } from 'react';
import './DonatePage.css';
import { FaArrowLeft } from "react-icons/fa6";

import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SummaryApi from '../common';

const DonatePage = ({
    onClose, 
    callFunc,
    amount,
    userId,
    campaign,
}) => {
    const user =useSelector(state => state?.user?.user)

    const navigate = useNavigate();
    const [data, setData] = useState({
        cardemail: user?.email,
        cardnumber:"",
        cardname:"",
        cardexp:"",
        cardcvv:""
        
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
        const dataResponse = await fetch(SummaryApi.createCampaign.url,{
            method: SummaryApi.createCampaign.method,
            headers: {
                "content-type":"application/json"
            },
            credentials : 'include',
            body : JSON.stringify(data)
        })

        const dataApi = await dataResponse.json();

        if(dataApi.success){
            navigate('/Donate');
        }
        if(dataApi.error){
            toast.error(dataApi?.message);
        }
    };

return (
    <div className='donatepage'>
        <div className="donatepagediv">
            
        
        <div className='donatecontainer'>
            <div className="donateleft">
                <div className="donatecloseicon">
                    <Link to={'/Failed'}><FaArrowLeft size={30} /></Link>
                </div>
                <div className="donatecampaigndetail">
                    <h2>{campaign?.title}</h2>
                </div>
                <div className="donatecampaignamount">
                    <h4>₹ {campaign?.amount}</h4>
                </div>
                <div className="">
                    <img className='donatecampaignimage' src={campaign?.image} alt="" />
                </div>
            </div>
            <div className="payment-container">
                <div className="donaterighttitle">Pay By Card</div>
                <form className="payment-form" onSubmit={handleSubmit}>
                    <div className="donate-form-group">
                    <label htmlFor="email">Email
                    <input
                        type="text"
                        name='cardemail'
                        value={data.cardemail}
                        onChange={handleChange}
                        required
                    />
                    </label>
                    </div>
                    <div className="donate-form-group">
                    <label htmlFor="cardNumber">Card Number
                    <input
                        type="text"
                        name='cardnumber'
                        value={data.cardnumber}
                        onChange={handleChange}
                        placeholder='1234 1234 1234 1234'
                        required
                    />
                    </label>
                    </div>
                    <div className="donate-form-group">
                    <label htmlFor="cardHolder">Card Holder Name</label>
                    <input
                        type="text"
                        name='cardname'
                        value={data.cardname}
                        onChange={handleChange}
                        placeholder='Apsit Jain'
                        required
                    />
                    </div>
                    <div className="donate-form-group">
                    <label htmlFor="expiryDate">Expiry Date </label>
                    <input
                        type="text"
                        name='cardexp'
                        value={data.cardexp}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        required
                    />
                    </div>
                    <div className="donate-form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                        type="text"
                        name='cardcvv'
                        value={data.cardcvv}
                        onChange={handleChange}
                        placeholder='123'
                        required
                    />
                    </div>
                    <button type="submit">Pay Now</button>
                </form>
                </div>
            </div>
        </div>
    </div>
)
}

export default DonatePage;

