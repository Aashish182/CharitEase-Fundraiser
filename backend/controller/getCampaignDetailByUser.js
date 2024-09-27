const campaignModel = require("../models/campaignModel")

const getCampaignDetailsByUser = async(req,res) =>{
    try{
        const {userId} = req.params;
        console.log(userId);
        
        const campaign = await campaignModel.find({ createdBy: userId }).populate('createdBy', 'username email');

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