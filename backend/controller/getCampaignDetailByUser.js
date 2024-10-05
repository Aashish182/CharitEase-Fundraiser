const campaignModel = require("../models/campaignModel")

const getCampaignDetailsByUser = async(req,res) =>{
    try{
        const {userId} = req.body;
        
        const campaign = await campaignModel.find({creator:userId});

        if (!campaign || campaign.length === 0) {
            return res.json({
                data: [],
                message: "No campaigns found for this user",
                success: true,
                error: false
            });
        }

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

module.exports = getCampaignDetailsByUser ;