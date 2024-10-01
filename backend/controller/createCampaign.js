const uploadCampiagnPermission = require("../helper/permission");
const campaignModel = require("../models/campaignModel");


async function createCampaign(req,res) {
    try{

        const sessioUserId = req.userId

        if(!uploadCampiagnPermission(sessioUserId)){
            throw new Error("Permission Denied, First Login!");
        }

        const { title, story, amount, image, category, creator, location} = req.body;

        
        const campaign = await campaignModel.findOne({title});
        if(campaign){
            throw new Error("Title Already Taken, Give Another Title");
        }

        if(!title){
            throw new Error("Please Provide title")
        }
        if(!story){
            throw new Error("Please Provide story")
        }
        if(!amount){
            throw new Error("Please Provide amount")
        }
        if(!image){
            throw new Error("Please Provide image")
        }
        if(!category){
            throw new Error("Please Provide category")
        }
        if(!creator){
            throw new Error("Please Provide creator")
        }
        if(!location){
            throw new Error("Please Provide location")
        }


        const userData = new campaignModel(req.body);
        const saveCampaign = await userData.save()

        res.status(201).json({
            data: saveCampaign,
            success:true,
            error:false,
            message: "Campaign Created Successfully!"
        })

    }catch(err){
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}

module.exports = createCampaign;