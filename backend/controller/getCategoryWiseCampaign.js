const campaignModel = require("../models/campaignModel");
const getCategoryWiseCampaign = async(req,res) => {
    try{
        const { category } = req?.body || req?.query;
        const campaign = await campaignModel.find({category: category });

        res.json({
            data: campaign,
            message: "Campaign",
            success: true,
            error: false
        })
    } catch(err){
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}
module.exports = getCategoryWiseCampaign;
