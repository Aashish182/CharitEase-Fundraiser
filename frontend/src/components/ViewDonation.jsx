import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import './ViewDonation.css';
import { useParams, Link } from 'react-router-dom';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { formatDate } from '../utils/dateFormator';

const ViewDonation = () => {
    // const { id } = useParams();
    // const [donations, setDonations] = useState(null);

    // useEffect(() => {
    //     const fetchDonations = async () => {
    //         try {
    //             const res = await axios.get("/api/donation/fetchDonationByCampaign/" + id);
    //             setDonations(res.data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };
    //     fetchDonations();
    // }, [id]);

    

    return (
        <div>
            <div className="donation-container">
                <div className="donation-header">
                    <h1>Collected Donations</h1>
                </div>
                <div className="table-container">
                    <table className="donations-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Donator</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {donations && donations.map((item) => (
                                <tr key={item._id}>
                                    <td>{formatDate(item.createdAt)}</td>
                                    <td>{item.userId.email}</td>
                                    <td>₹ {item.amount}</td>
                                    <td>
                                        <Link to={`/admin/donations/donation/${item._id}`} className="view-link">
                                            View<HiOutlineExternalLink className="icon" size={15} />
                                        </Link>
                                    </td>
                                </tr>
                            ))} */}
                        </tbody>
                        {/*!donations?.length && */<h1 className="no-donations">No Donations Found!</h1>}
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ViewDonation;

