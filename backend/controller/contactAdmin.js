const uploadCampiagnPermission = require("../helper/permission");
const contactModel = require("../models/contactModel")


async function contactAdmin(req,res) {
    try{

        const sessioUserId = req.userId
        if(!sessioUserId){
            throw new Error("Permission Denied, First Login!");
        }
        if(!uploadCampiagnPermission(sessioUserId)){
            throw new Error("Permission Denied, First Login!");
        }

        const { name, email, number, message} = req.body;

        if(!name){
            throw new Error("Please Provide name")
        }
        if(!email){
            throw new Error("Please Provide email")
        }
        if(!number){
            throw new Error("Please Provide number")
        }
        if(!message){
            throw new Error("Please Provide message")
        }

        const contactData = new contactModel(req.body);
        const saveContact = await contactData.save()

        res.status(201).json({
            data: saveContact,
            success:true,
            error:false,
            message: "Message Sended To Admin"
        })

    }catch(err){
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}

module.exports = contactAdmin;