const bankModel = require("../models/bankModel");

const getBankDetail = async(req,res) =>{
    try{
        
        const bankdetail = await bankModel.find().sort({ AddedAt : -1 });

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