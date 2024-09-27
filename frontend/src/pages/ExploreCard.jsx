import React, { useContext } from 'react';
import './ExploreCard.css';
import {Link, NavLink, useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import Context from '../context';




const ExploreCard = ({data}) => {

    const calculateGoalPercent = () => {
        const datanum = Math.round((data.raisedAmount/  data?.amount) * 100);
        if (datanum > 100) {
            return 100
        }
        return datanum
    }

    return (

        <div className='card-container'>
            <Link className='' to={`/Campaign/${data?._id}`} >
                <div className='card-header'>
                    {
                        // /*campaign.featured && */<div>
                        //     <div className='featured-corner'></div>
                        //     <div className='featured-badge'><BsLightningCharge /> <span>Featured</span></div>
                        // </div>
                    }
                    <div className='progress-circle'>
                        <p className='relative'>{calculateGoalPercent()}<span>%</span></p>
                    </div>
                    
                    <img src={data?.image} alt='Campaign Image' />
                    

                    
                        
                        
                </div>
                <div className='card-content'>
                    <h1 className='title'>{data?.title}</h1>
                    <h1 className='raised_text'><b>${data?.raisedAmount}</b> raised of ${data?.amount}</h1>
                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{ width: `${calculateGoalPercent()}%` }}></div>
                    </div>
                    <p className='supporters'><FaHeart /> <span>{/*donations.length*/}0 Supporters</span></p>
                </div>
            </Link>
            
        </div>
    );
}

export { ExploreCard };
