import React, { useEffect, useState } from 'react';
import './DonatePage.css';
import { FaArrowLeft, FaSpinner } from "react-icons/fa6";

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
    const [isSubmitting,setIsSubmitting] = useState(false);
    const user =useSelector(state => state?.user?.user)

    const navigate = useNavigate();
    const [data, setData] = useState({
        campaignId:campaign?._id,
        userId:user?._id,
        cardemail: user?.email,
        cardnumber:"",
        cardname:"",
        cardexp:"",
        cardcvv:"",
        amount: amount,
        campaignimage:campaign?.image,
        
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
        setIsSubmitting(true);
        setTimeout(async() => {
        const dataResponse = await fetch(SummaryApi.makeDonation.url,{
            method: SummaryApi.makeDonation.method,
            headers: {
                "content-type":"application/json"
            },
            credentials : 'include',
            body : JSON.stringify(data)
        })

        const dataApi = await dataResponse.json();
        
        if(dataApi.success){
            toast.success("Your Donation is Successful!");
            handleUpdateSubmit(e);
            setIsSubmitting(false);
            navigate('/Success');
        }
        if(dataApi.error){
            toast.error(dataApi?.message);
        }
    },3000);
    
    };

const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const updatedRaisedAmount = (campaign.raisedAmount || 0)+ (data.amount || 0);

    const updateData = {
        ...campaign,
        raisedAmount: updatedRaisedAmount,
    };

    const dataResponse = await fetch(SummaryApi.updateCampaign.url,{
        method: SummaryApi.updateCampaign.method,
        headers: {
            "content-type":"application/json"
        },
        credentials : 'include',
        body : JSON.stringify(updateData)
    })

    const dataApi = await dataResponse.json();
};



return (
    <div className='donatepage'>
        <div className="donatepagediv">
            
        
        <div className='donatecontainer'>
            <div className="donateleft">
                <div className="donatecloseicon">
                    <Link to={'/Failed'}><FaArrowLeft size={30} /> </Link>
                        <>Donate Your Money For Someone Heart</>
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
                    <button type="submit" onClick={handleSubmit}>
                        {
                            isSubmitting?(
                                <span><FaSpinner className="spinner" />  Processing...</span>
                            ):(
                                <>Pay Now</>
                            )
                        }
                        </button>
                </form>
                </div>
            </div>
        </div>
    </div>
)
}

export default DonatePage;

