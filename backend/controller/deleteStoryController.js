const storyUpdateModel = require("../models/storyUpdateModel")

const deleteStory = async(req,res) =>{
    try{
        const {storyId} = req.body;
        
        const campaign = await storyUpdateModel.findByIdAndDelete(storyId);

        res.json({
            message : "Update Deleted Successfully!",
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

module.exports = deleteStory ;