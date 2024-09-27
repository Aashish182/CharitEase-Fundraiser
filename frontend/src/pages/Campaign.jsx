
import React, { useEffect, useState } from 'react';
import './Campaign.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { FaHeart } from "react-icons/fa";
import { GiFlowerPot } from "react-icons/gi";
import { LuClock3 } from "react-icons/lu";
import { GoGoal, GoPeople } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { formatDate } from '../utils/dateFormator';
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import img from '../asset/images/blog.jpeg';
import SummaryApi from '../common';
import { FaRupeeSign } from "react-icons/fa";


const Campaign = () => {
    const { id } = useParams();
    const [openTab, setOpenTab] = useState(1);
    const dispatch = useDispatch();
    const user =useSelector(state => state?.user?.user);
    const campaign =useSelector(state => state?.campaign?.data)
    
    const [data,setData] = useState({
        title: "",
        story: "",
        amount: "",
        image: "",
        category: "",
        creator: "",
        location: "",
        raisedAmount:"",
        createdBy:"",
    })

    const params = useParams();
    const [loading,setLoading] = useState(false);
    const fetchCampaignDetails = async() =>{
        setLoading(true);
        const response = await fetch(SummaryApi.campaignDetails.url,{
            method: SummaryApi.campaignDetails.method,
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({
                    campaignId : params?.id
            })
        })
        setLoading(false);

        const dataResponse = await response.json();
        console.log("data",dataResponse)
        setData(dataResponse.data);
    }

    useEffect(() =>{
        fetchCampaignDetails()
    },[])

    // calculating donation raised by campaign
    // const donationRaised = donations.reduce((acc, curr) => acc + curr.amount, 0);

    const calculateGoalPercent = () => {
        const goal = Math.round((data?.raisedAmount / data?.amount) * 100);
        return goal > 100 ? 100 : goal;
    };

    console.log("created",data?.createdBy)

    // useEffect(() => {
    //     dispatch(getCampaign(id));
    //     dispatch(fetchDonationByCampaign(id));
    //     dispatch(getStories(id));
    //     window.scrollTo(0, 0);
    // }, [id, dispatch]);

    return (
        <div>
            
            {/* {isLoading && (
                <div className='w-full flex justify-center items-center h-screen text-2xl'>
                    <Loader />
                </div>
            )} */}
            {
            
            <div className='campaign-container'>
                <div className='main_campaign_container'>
                    <div className='campaign-left'>
                        <img className='campaign-image' src={data?.image} alt="" />
                        <h1 className='campaign-title'>{data?.title} </h1>
                        <div className='campaign-owner'>
                            <div className='owner-icon'>
                                <GoPeople size={25} color='white' />
                            </div>
                            <div>
                                <h1 className='campaign-owner-name'>
                                    
                                    {data?.title} error
                                </h1>
                            </div>
                        </div>

                        <div className='campaign-tabs'>
                            <div onClick={() => setOpenTab(1)} className={`tab-button ${openTab === 1 ? 'active-tab' : ''}`}>Overview</div>
                            <div onClick={() => setOpenTab(2)} className={`tab-button ${openTab === 2 ? 'active-tab' : ''}`}>
                                Donations {/*donations.length*/ 1 > 0 && <span className='tab-count'>{/*donations.length*/}</span>}
                            </div>
                            <div onClick={() => setOpenTab(3)} className={`tab-button ${openTab === 3 ? 'active-tab' : ''}`}>
                                Updates {/*story.length*/1 > 0 && <span className='tab-count'>{/*story.length*/}</span>}
                            </div>
                        </div>

                        {openTab === 1 && (
                            <div className='tab-content'>
                                <h1 className='tab-details-title'>Details:</h1>
                                <p className='tab-details'>{data?.story} </p>
                            </div>
                        )}

                        {openTab === 2 && (
                            <div className='tab-content'>
                                <h1 className='tab-details-title'>Supporters:</h1>
                                <div className="tab-details">{/* <DonationList donations={donations} /> */}hlo</div>
                            </div>
                        )}

                        {openTab === 3 && (
                            <div className='tab-content'>
                                {/* <Story story={story} /> */}hii
                            </div>
                        )}
                    </div>
            
                    {/* Right side */}
                    <div className='campaign-right'>
                        <h1 className='raised-amount'>$ {data?.raisedAmount}<sub className='raised-sub'>Raised</sub></h1>
                        <div className="progress-bar">
                            <div className="progress-bar-fill" style={{ width: `${calculateGoalPercent()}%` }}></div>
                        </div>
                        <div className='campaign-stats'>
                            <div className='campaign-stat'>
                                <h1 className='stat-value'>$ {data?.amount}</h1>
                                <h1 className='stat-label'><GoGoal color='#2ebc62' /> Goal</h1>
                            </div>
                            <div className='campaign-stat'>
                                <h1 className='stat-value'>{/*donations.length*/}5</h1>
                                <h1 className='stat-label'><FaHeart className='heart' color='Red' /> Contributers</h1>
                            </div>
                            <div className='campaign-stat'>
                                <h1 className='stat-value'>$ 20</h1>
                                <h1 className='stat-label'><GiFlowerPot className='flower-pot' color='#2ebc62' /> Min. Contribution</h1>
                            </div>
                            <div className='campaign-stat'>
                                <h1 className='stat-value'>5</h1>
                                <h1 className='stat-label'><LuClock3 className='lock' color='#2ebc62' /> Created at</h1>
                            </div>
                        </div>

                        {user?.name? (
                            <div className='login-message'>
                            <form className='donation-form blur'>
                                <label>Support with a Donation </label>
                                <input type="number" placeholder='50$' className='donation-input' />
                                <input type="submit" value='Donate Now' className='donate-btn' />
                            </form>
                            </div>
                        ) : (
                            <div className='login-message'>
                                <form className='donation-form blur'>
                                    <label>Support with a Donation </label>
                                    <input type="number" placeholder='50$' className='donation-input' />
                                    <input type="submit" value='Donate Now' className='donate-btn' />
                                </form>
                                <div className='login-overlay'>
                                    <MdOutlineReportGmailerrorred className='login-icon' size={50} />
                                    <p>Please Login!</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        }
            <Footer />
        </div>
    );
}

export default Campaign;

