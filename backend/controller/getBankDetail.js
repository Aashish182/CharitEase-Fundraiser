const bankModel = require("../models/bankModel");

const getBankDetail = async(req,res) =>{
    try{
        const {userId} = req.body;
        
        const bankdetail = await bankModel.find({bankuser: userId});
        
        if (!bankdetail || bankdetail.length === 0) {
            return res.json({
                data: [],
                message: "No Details found for this user",
                success: true,
                error: false
            });
        }

        res.json({
            data : bankdetail,
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

module.exports = getBankDetail ;