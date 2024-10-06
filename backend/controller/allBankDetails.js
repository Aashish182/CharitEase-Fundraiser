const bankModel = require("../models/bankModel");

async function allBankDetails(req,res) {
    try{
        const allBanks = await bankModel.find()

        res.json({
            message: "All Banks Details",
            data: allBanks,
            success: true,
            error: false
        })
    } catch(err){
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}

module.exports = allBankDetails;