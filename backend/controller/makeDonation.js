const uploadCampiagnPermission = require("../helper/permission");
const donationModel = require("../models/donationModel");


async function makeDonation(req,res) {
    try{
        const { cardemail, cardnumber, cardname, cardexp, cardcvv, amount, campaignimage} = req.body;
        
        if(!cardemail){
            throw new Error("Please Provide cardemail")
        }
        if(!cardnumber){
            throw new Error("Please Provide cardnumber")
        }
        if(!cardname){
            throw new Error("Please Provide cardname")
        }
        if(!cardexp){
            throw new Error("Please Provide cardexp")
        }
        if(!cardcvv){
            throw new Error("Please Provide cardcvv")
        }
        if(!amount){
            throw new Error("Please Provide amount")
        }
        if(!campaignimage){
            throw new Error("Please Provide campaignimage")
        }
        const donationData = new donationModel(req.body);
        const saveDonation = await donationData.save()

        res.status(201).json({
            data: saveDonation,
            success:true,
            error:false,
            message: "You Donated Successfully!"
        })

    }catch(err){
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}

module.exports = makeDonation;