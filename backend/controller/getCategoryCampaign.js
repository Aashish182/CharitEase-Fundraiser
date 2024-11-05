const campaignModel = require("../models/campaignModel")

const getCategoryCampaign = async(req,res) => {
    try{
        const campaignCategory = await campaignModel.distinct("category");
        const campaignByCategory = []

        for(const category of campaignCategory){
            const campaign = await campaignModel.findOne({category })
            
            if(campaign){
                campaignByCategory.push(campaign);
            }
        }

        res.json({
            message: "Category Campaign",
            data: campaignByCategory,
            success: true,
            error: false
        })

    }
    catch(err){
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}



module.exports = getCategoryCampaign;
