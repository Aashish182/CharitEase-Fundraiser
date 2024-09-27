import React, { useEffect, useState } from 'react';
import './LoggedUserCampaignCard.css';
import { Link } from 'react-router-dom';
import { GiUpgrade } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import WarningPopup from '../components/WarningPopup';

const LoggedUserCampaignCard = ({ popupVisible, setPopupVisible, campaign, index }) => {
    
    

    return (
        <div className='card-container' key={index}>
            <div className='card-image-container'>
            <Link to={`/Campaign/${campaign?._id}`}>
                <img className='campaign-image' src={campaign?.image} alt="" />
            </Link>
            </div>
            <div className='details-container'>
                <Link to={`/Campaign/${campaign?._id}`}>
                    <h1 className='title'>{campaign?.title}</h1>
                </Link>
                <div className='actions'>
                    <Link to={`/ManageCampaign/${campaign._id}`} className='manage-button'>
                        Manage Campaign
                    </Link>
                    <div
                        onClick={() => setPopupVisible(true)}
                        className='complete-button'>
                        Mark Completed
                    </div>
                    {
                        popupVisible && <WarningPopup setPopupVisible={setPopupVisible} id={campaign?._id} />
                    }
                </div>
                <div className='stats'>
                    <div className='stat-item'>
                        <p className='stat-label'>Raised</p>
                        <h1 className='stat-value'>₹ {campaign?.raisedAmount}</h1>
                    </div>
                    <div className='stat-item'>
                        <p className='stat-label'>Goals</p>
                        <h1 className='stat-value'>₹ {campaign?.amount}</h1>
                    </div>
                    <div className='stat-item'>
                        <p className='stat-label'>Left</p>
                        <h1 className='stat-value'>₹ {campaign?.amount - campaign?.raisedAmount < 0 ? 0 : campaign?.amount - campaign?.raisedAmount}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoggedUserCampaignCard;
