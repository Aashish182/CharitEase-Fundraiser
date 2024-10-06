
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DonationSchema = new Schema({
  campaignId: {
    type: Schema.Types.ObjectId,
    ref: "campaign",
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  cardemail: {
    type: String,
    required: true,
  },
  cardnumber: {
    type: Number,
    required: true,
  },
  cardname: {
    type: String,
    required: true,
  },
  cardexp: {
    type: String,
    required: true,
  },
  cardcvv: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  campaignimage: {
    type: String,
    required: true,
  },
  donatedAt: {
    type: Date,
    default: Date.now,
  },
});

const donationModel = mongoose.model('donation', DonationSchema);
module.exports = donationModel;
