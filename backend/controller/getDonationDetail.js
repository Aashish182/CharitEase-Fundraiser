const donationModel = require("../models/donationModel");

const getDonationDetail = async(req,res) =>{
    try{
        const {campaignId} = req.body;
        
        const donationdetail = await donationModel.find({campaignId: campaignId});
        
        if (!donationdetail || donationdetail.length === 0) {
            return res.json({
                data: [],
                message: "No Details found for this Campaign",
                success: true,
                error: false
            });
        }

        res.json({
            data : donationdetail,
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

module.exports = getDonationDetail ;