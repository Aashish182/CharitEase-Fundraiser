import React, { useState, useEffect } from 'react';
import './UpdatesCampaign.css';
import Footer from './Footer';
import { GoPeople } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { formatDate, formatTime } from '../utils/dateFormator';
import { VscTrash } from 'react-icons/vsc';

const UpdatesCampaign = () => {
  // const { id } = useParams();
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const user = useSelector(state => state.user.data);
  // const stories = useSelector(state => state.story.data);
  // const campaign = useSelector(state => state.campaign.data);
  // const { data, isLoading } = useSelector(state => state.campaign);

  // // form state
  // const [story, setStory] = useState({
  //   campaignId: id,
  //   updateContent: ''
  // });

  // // handling story update
  // const handleStoryUpdate = (e) => {
  //   e.preventDefault();
  //   dispatch(addStory(story));
  //   dispatch(getCampaign(id));
  // };

  // useEffect(() => {
  //   dispatch(getCampaign(id));
  //   dispatch(getStories(id));
  // }, [id, dispatch]);

  return (
    <div className='campaign-updates-container'>
      <div className='main-update-container'>
        <div className='header-container'>
          <h1>Update your Progress</h1>
        </div>

        {/* {isLoading && <Loader />} */}

        <div className='content-wrapper'>
          <div className='organizer-section'>
            <h1 className='section-title'>Organizer</h1>
            <div className='organizer-info'>
              <GoPeople size={30} />
              <div className='organizer-details'>
                <h1>{/*campaign?.campaignOwner?.email*/}</h1>
                <p>{/*campaign?.campaignOwner?.firstName*/} {/*campaign?.campaignOwner?.lastName*/}</p>
              </div>
            </div>

            <div className='updates-section'>
              <h1 className='section-title'>Updates:</h1>
              <div className='updates-list'>
                {/* {stories.map((item, index) => (
                  <div key={index} className='update-item'>
                    <GoPeople className='icon' size={25} />
                    <div className='update-details'>
                      <p>{item.userId?.firstName} {item.userId?.lastName}</p>
                      <p>{item.updateContent}</p>
                      <p className='timestamp'>{formatDate(item.createdAt)} - {formatTime(item.createdAt)}</p>
                    </div>
                    <button onClick={() => dispatch(deleteStory(item._id))} className='delete-button'>
                      <VscTrash size={25} className='trash-icon' />
                    </button>
                  </div>
                ))} */}
              </div>
            </div>
          </div>

          <div className='form-section'>
            <form /*onSubmit={handleStoryUpdate}*/ className='update-form'>
              <div className='form-group'>
                <label className='form-label'>Selected Campaign</label>
                <input
                  disabled
                  className='input-field'
                  type="text"
                  placeholder='Help for treatment of cancer'
                  // value={data?.campaignTitle}
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Write an update*</label>
                <textarea
                  className='input-field'
                  placeholder='Thank you for all the donations. We started our project and are in midway...'
                  cols="30"
                  rows="5"
                  // onChange={(e) => setStory({ ...story, updateContent: e.target.value })}
                ></textarea>
                <p className='note'>Note*: Updates will be posted according to the current timestamp</p>
              </div>
              <div className='submit-button-container'>
                <button type='submit' className='submit-button'>Post Updates</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdatesCampaign;
