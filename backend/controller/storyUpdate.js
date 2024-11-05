
const storyUpdateModel = require("../models/storyUpdateModel");


async function storyUpdate(req,res) {
    try{
        const { userId, campaignId, updateContent} = req.body;

        if(!userId){
            throw new Error("Please Provide userId")
        }
        if(!campaignId){
            throw new Error("Please Provide campaignId")
        }
        if(!updateContent){
            throw new Error("Please Provide updateContent")
        }
        
        const storyData = new storyUpdateModel(req.body);
        const saveStory = await storyData.save()

        res.status(201).json({
            data: saveStory,
            success:true,
            error:false,
            message: "Updates Stored Successfully!"
        })

    }catch(err){
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}

module.exports = storyUpdate;