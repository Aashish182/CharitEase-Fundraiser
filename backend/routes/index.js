const express = require('express');

const router = express.Router()

const userRegisterController= require('../controller/userRegister');
const userLoginController = require('../controller/userLogin');
const userDetailsController = require('../controller/userDetails');
const authToken = require('../middleware/authToken');
const userLogout = require('../controller/userLogout');
const createCampaign = require('../controller/createCampaign');
const campaignDetailsController = require('../controller/campaignDetails');
const getCategoryCampaign = require('../controller/getCategoryCampaign');
const getCampaignDetails = require('../controller/getCampaignDetails');
const getCampaignDetailsByUser = require('../controller/getCampaignDetailByUser');
const deleteCampaign = require('../controller/deleteCampaign');
const updateCampaignController = require('../controller/updateCampaignController');
const storyUpdate = require('../controller/storyUpdate');
const getStoryUpdateController = require('../controller/getStoryUpdateController');
const deleteStory = require('../controller/deleteStoryController');
const getCategoryWiseCampaign = require('../controller/getCategoryWiseCampaign');
const allUsers = require('../controller/allUsers');
const updateUser = require('../controller/updateUser');
const contactAdmin = require('../controller/contactAdmin');
const AllContacts = require('../controller/allContacts');

router.post("/Register",userRegisterController);
router.post("/Login",userLoginController);
router.get("/user-details",authToken,userDetailsController);
router.get("/userLogout",userLogout);
router.post("/createCampaign",createCampaign);

router.get("/campaignDetails",campaignDetailsController);

router.get("/get-categoryCampaign",getCategoryCampaign);

router.post("/campaign-details",getCampaignDetails);

router.post("/campaign-details-user",getCampaignDetailsByUser);

router.post("/delete-campaign",deleteCampaign);

router.post("/update-campaign",updateCampaignController);

router.post("/story-update",storyUpdate);

router.post("/get-storyUpdate",getStoryUpdateController);

router.post("/delete-story",deleteStory);

router.post("/category-campaign",getCategoryWiseCampaign);

router.get('/all-users',allUsers);

router.post('/update-user',updateUser);

router.post('/contact-detail',authToken,contactAdmin);

router.get('/all-contacts',AllContacts);






module.exports = router;