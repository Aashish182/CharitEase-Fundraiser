import React, { useState } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { FaStarOfLife } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {

  const dispatch = useDispatch();
  const user =useSelector(state => state?.user?.user);

  const [toggleAccountAdd, setToggleAccountAdd] = useState(false);


    return (
        <div className='profile-container'>
            <h1 className='profile-title'>Profile</h1>
            <div>
                <h1 className='profile-section-title'>User</h1>
                <div className='profile-content'>
                    <h1 className='profile-field'><span>Email:</span>
                        <span>{user?.email}</span></h1>
                    <h1 className='profile-field'><span>Name:</span>
                        <span>{user?.name}</span></h1>
                    <h1 className='profile-field'><span>Password:</span>
                        <div className='password-block'>
                            <span className='password-stars'>
                                {[...Array(7)].map((_, index) => (
                                    <FaStarOfLife key={index} size={10} />
                                ))}
                            </span>
                            <Link className='change-password-link' to={'/forgotPassword'}>
                                Change
                            </Link>
                        </div>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Profile;

