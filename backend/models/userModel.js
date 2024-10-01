const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: String,
    number: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    donations: [
        {
            type: Schema.Types.ObjectId,
            ref: "Donation",
        },
        ],
    createdAt: {
        type: Date,
        default: Date.now,
        },
    role : String
},{
    timestamps: true
})


const userModel = mongoose.model("user",userSchema);


module.exports = userModel;