import React, { useEffect, useState } from 'react';
import { ExploreCard } from './ExploreCard';
import './Donate.css';
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import Footer from '../components/Footer';
import Banner from './Banner';


const Donate = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const[allCampaign,setAllCampaign] = useState([]);

    const fetchAllCampaign = async() =>{
        const response = await fetch(SummaryApi.campaigndetail.url,{
            method: SummaryApi.campaigndetail.method
        })
        const dataResponse = await response.json();
        
        setAllCampaign(dataResponse?.data || [])
    }

    useEffect(() => {
        fetchAllCampaign()
    },[])

  return (
    <div className='main-container'>
      <div className="header">
        <h1>
          Campaigns for Donation
        </h1>
      </div>
    <div className="maincontainer">
      <aside className='sidebar'>
        <div className="sidebar-1">
          <div className='filter'>
            <h4>Filter By</h4>
            <div className='button-filter'>
            <button className='filter-button'><h6>Reset<HiAdjustmentsHorizontal/></h6></button>
            </div>
          </div>
          <div className='filter'>
            <h4>Charity</h4>
          </div>
          <div className='filter'>
            <h4>Community</h4>
          </div>
          <div className='filter'>
            <h4>Health</h4>
          </div>
          <div className='filter'>
            <h4>Emergency</h4>
          </div>
        </div>
      </aside>

      <main className='main'>
        <div className="cards">
        {
          allCampaign.map((campaign,index)=>{
              return(
                <ExploreCard data = {campaign} key={index} />
              )
          })
        }
        
        </div>
        
      </main>
    
    </div>
    <Banner />
    <Footer />
    </div>
  )
}

export default Donate;
