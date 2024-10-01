const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CampaignUpdateSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  campaignId: {
    type: Schema.Types.ObjectId,
    ref: "Campaign",
    required: true,
  },
  updateContent: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},{
  timestamps: true
});

const storyUpdateModel = mongoose.model("CampaignUpdate",CampaignUpdateSchema);


module.exports = storyUpdateModel;
