const storyUpdateModel = require("../models/storyUpdateModel")

const getStoryUpdateController = async(req,res) =>{
    try{
        const {campaignId} = req.body;
        
        const campaign = await storyUpdateModel.find({campaignId: campaignId});

        res.json({
            data : campaign,
            message : "story getting",
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

module.exports = getStoryUpdateController ;