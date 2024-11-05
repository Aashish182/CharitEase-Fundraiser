const bankModel = require("../models/bankModel");

const deleteBank = async(req,res) =>{
    try{
        const {bankId} = req.body;
        const bank = await bankModel.findByIdAndDelete(bankId);

        res.json({
            message : "Bank Detail Deleted Successfully!",
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

module.exports = deleteBank ;