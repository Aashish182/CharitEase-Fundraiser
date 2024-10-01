import React from 'react';
import { GoPeople } from "react-icons/go";
import { formatDate, formatTime } from '../utils/dateFormator';
import './Story.css'; // Importing the CSS file for styling

const Story = ({ story }) => {
    return (
        <div className="story-container">
            {
                story && (
                    <>
                        <h1 className='story-title'>Updates:</h1>
                        {
                            story.map((item) =>
                                <div key={item._id} className='story-item'>
                                    <div className='story-icon'>
                                        <GoPeople size={25} className='text-emerald-600' />
                                    </div>
                                    <div className='story-content'>
                                        <h1 className='story-author'>{item?.userId?.firstName}Aashish</h1>
                                        <h1 className='story-text'>{item.updateContent}</h1>
                                        <h1 className='story-time'>{formatDate(item.createdAt)} - {formatTime(item.createdAt)}</h1>
                                    </div>
                                </div>
                            )
                        } 
                    </>
                )
            }
        </div>
    )
}

export default Story;
