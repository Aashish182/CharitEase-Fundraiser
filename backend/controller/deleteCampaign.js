const campaignModel = require("../models/campaignModel")

const deleteCampaign = async(req,res) =>{
    try{
        const {campaignId} = req.body;
        
        const campaign = await campaignModel.findByIdAndDelete(campaignId);

        res.json({
            message : "Campaign Deleted Successfully!",
            success : true,
            error : false
        })

    } catch(err) {
        res.json({
            message: err?.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = deleteCampaign ;