
const withdrawModel = require("../models/withdrawModel");


async function withdraw(req,res) {
    try{

        const withdrawdata = new withdrawModel(req.body);
        const withdraw = await withdrawdata.save();
        console.log("hi",withdraw);

        res.status(201).json({
            data: withdraw,
            success:true,
            error:false,
            message: "Withdraw Amount Successfully! "
        })

    }catch(err){
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}

module.exports = withdraw;