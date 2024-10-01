const campaignModel = require("../models/campaignModel")

const getCampaignDetails = async(req,res) =>{
    try{
        const {campaignId} = req.body;
        
        const campaign = await campaignModel.findById(campaignId);

        res.json({
            data : campaign,
            message : "ok",
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

module.exports = getCampaignDetails ;