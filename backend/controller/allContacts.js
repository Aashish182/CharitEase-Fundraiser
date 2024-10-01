const contactModel = require("../models/contactModel");

async function AllContacts(req,res) {
    try{
        const allContacts = await contactModel.find()

        res.json({
            message: "All Contacts Details",
            data: allContacts,
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

module.exports = AllContacts;