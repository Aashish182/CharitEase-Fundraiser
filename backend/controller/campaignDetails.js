const campaignModel = require("../models/campaignModel");

const campaignDetailsController = async(req,res) => {
    try{
        const campaign = await campaignModel.find().sort({ createdAt : -1 });

        res.json({
            data: campaign,
            error: false,
            success: true,
            message: " Campaign details "
        })

    }catch(err){
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

module.exports = campaignDetailsController;