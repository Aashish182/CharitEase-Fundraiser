const mongoose = require('mongoose');
const schema = mongoose.Schema;

const campaignSchema = new mongoose.Schema({
    title: String,
    story: String,
    amount: String,
    image: String,
    category: String,
    creator: String,
    location: String,
    raisedAmount: {
        type: Number,
        default: 0,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: schema.Types.ObjectId,
        ref: 'user'
    },
    updates: [
        {
            type: schema.Types.ObjectId,
            ref: "CampaignUpdate",
        },
    ],
    status: {
        type: String,
        enum: ["active", "completed"],
        default: "active",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},{
    timestamps: true
})


const campaignModel = mongoose.model("campaign",campaignSchema);


module.exports = campaignModel;