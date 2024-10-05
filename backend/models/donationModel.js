
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
  amount: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
  },
  transactionId: {
    type: String,
  },
  donatedAt: {
    type: Date,
    default: Date.now,
  },
});

const donationModel = mongoose.model('donation', DonationSchema);
module.exports = donationModel;
