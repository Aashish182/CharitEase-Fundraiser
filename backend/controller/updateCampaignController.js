
const campaignModel = require('../models/campaignModel');
async function updateCampaignController(req,res) {
    try{
        const { _id,...resBody} = req.body;
        console.log("id",_id)

        const updateCampaign = await campaignModel.findByIdAndUpdate(_id,resBody);

        res.json({
            message: "Campaign update Successfully",
            data: updateCampaign,
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

module.exports = updateCampaignController;
