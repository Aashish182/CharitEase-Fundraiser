
const bankModel = require("../models/bankModel");


async function addBank(req,res) {
    try{

        const sessioUserId = req.userId;

        const { fullname, accountnum, mobilenum, ifsc, bankuser } = req.body;

        if(!fullname){
            throw new Error("Please Provide Full Name")
        }
        if(!accountnum){
            throw new Error("Please Provide Account Number")
        }
        if(!mobilenum){
            throw new Error("Please Provide Mobile Number")
        }
        if(!ifsc){
            throw new Error("Please Provide IFSC Code")
        }

        const bankData = new bankModel(req.body);
        const saveBank = await bankData.save()

        res.status(201).json({
            data: saveBank,
            success:true,
            error:false,
            message: "Account Added Successfully! "
        })

    }catch(err){
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}

module.exports = addBank;