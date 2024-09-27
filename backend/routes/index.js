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
const getCampaignDetails = require('../controller/getCampaigDetails');
const getCampaignDetailsByUser = require('../controller/getCampaignDetailByUser');
const deleteCampaign = require('../controller/deleteCampaign');
const updateCampaignController = require('../controller/updateCampaignController');

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




module.exports = router;