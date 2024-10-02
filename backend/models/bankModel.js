const mongoose = require('mongoose');
const schema = mongoose.Schema;

const bankSchema = new mongoose.Schema({
    fullname: String,
    accountnum: String,
    mobilenum: String,
    ifsc: String,
    bankuser: {
        type: schema.Types.ObjectId,
        ref: 'user',
        required : true
    },
    AddedAt: {
        type: Date,
        default: Date.now,
    },
},{
    timestamps: true
})


const bankModel = mongoose.model("bank",bankSchema);


module.exports = bankModel;