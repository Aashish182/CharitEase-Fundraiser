const mongoose = require('mongoose');
const schema = mongoose.Schema;

const withdrawSchema = new mongoose.Schema({
    amount: String,
    receiver: {
        type: schema.Types.ObjectId,
        ref: 'user',
        required : true
    },
    withdrawAt: {
        type: Date,
        default: Date.now,
    },
},{
    timestamps: true
})


const withdrawModel = mongoose.model("withdraw",withdrawSchema);


module.exports = withdrawModel;