import './DonateCampaignHome.css';
import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { MdTune } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SummaryApi from '../common';
import { ExploreCard } from '../pages/ExploreCard';
import category from '../utils/categorydata';

const DonateCampaignHome = () => {
    // const campaignn = campaign.length && campaign.filter(campaign => campaign.featured === false);

    // const dispatch = useDispatch();



    // const handelFilter = (data) => {
    //     const filteredDataa = campaignn.filter(campaign => campaign.category === data);
    //     setFilteredData(filteredDataa);
    //     setSelectedCategory(data);
    // };
    const handleFilter = () =>{

    }

    const resetFilter = () => {
        setFilteredData(null);
        setSelectedCategory(null);
    };

    // useEffect(() => {
    //     dispatch(fetchCategory());
    //     dispatch(fetchCampaign());
    // }, [dispatch]);

    const[allCampaign,setAllCampaign] = useState([]);
    const [loading,setLoading] = useState(false)
    const fetchAllCampaign = async() =>{
        const response = await fetch(SummaryApi.campaigndetail.url,{
            method: SummaryApi.campaigndetail.method
        })
        const dataResponse = await response.json();
        
        setAllCampaign(dataResponse?.data || [])
    }

    useEffect(() => {
        fetchAllCampaign()
    },[]);

    const [filteredData, setFilteredData] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(allCampaign);

    return (
        <div className='campaign-main-container'>
            <div className='campaign-main-header'>
                <h1 className='donate-title'>Explore Campaigns</h1>
            </div>
            <div className='filter-section'>
                <div className='category-buttons'>
                    {/* {category && category.slice(0, 4).map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handelFilter(item.category)}
                            className={`category-button ${selectedCategory === item.category ? 'active' : ''}`}>
                            {item.category} <IoIosArrowDown />
                        </button>
                    ))} */}
                    {/* <div className='category-button'>
                        <h4>Charity<IoIosArrowDown /></h4>
                    </div>
                    <div className='category-button'>
                        <h4>Community<IoIosArrowDown /></h4>
                    </div>
                    <div className='category-button'>
                        <h4>Health<IoIosArrowDown /></h4>
                    </div>
                    <div className='category-button'>
                        <h4>Emergency<IoIosArrowDown /></h4>
                    </div> */}
                    {
                        category.map((el,index) => {
                            return(
                                <div onClick={() => handleFilter(el.category)}
                                className={`category-button ${selectedCategory === el.category ? 'active' : ''}`}
                                key={`filters-${index}`}
                                >
                                    {el.category} <IoIosArrowDown />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='reset-button'>
                    <button onClick={resetFilter} className='reset-btn'>
                        Reset <MdTune />
                    </button>
                </div>
            </div>
            {/* <div className='campaign-grid'>
                {filteredData ? filteredData.slice(0, 4).map((campaign, index) =>
                    <Card key={index} campaign={campaign} />
                ) :
                    campaignn && campaignn.length > 0 && campaignn.slice(0, 8).map((campaign, index) =>
                        <Card key={index} campaign={campaign} />
                    )}
                {filteredData && filteredData.length === 0 && <div>No Campaigns Found</div>}
            </div>
            {campaignn && campaignn.length > 8 &&
                <div className='explore-more'>
                    <Link to='/explore' className='explore-link'>
                        Explore more <IoIosArrowDown />
                    </Link>
                </div>} */}
                <div className="donate-campaign-grid">
                {
                allCampaign.map((campaign,index)=>{
                    return(
                        <ExploreCard data = {campaign} key={index} />
                    )
                })
                }
                
            </div>
        </div>
    );
};

export default DonateCampaignHome;
