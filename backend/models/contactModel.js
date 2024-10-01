const mongoose = require('mongoose');

const contactschema = new mongoose.Schema({
    name:String,
    email:String,
    number:String,
    message:String,
    sendedAt: {
        type: Date,
        default: Date.now,
    },
},{
    timestamps: true
})


const contactModel = mongoose.model("contact",contactschema);


module.exports = contactModel;