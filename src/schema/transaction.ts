import mongoose from "mongoose";
const transaction = new mongoose.Schema({
  Email: String,
  Transactions: [{ value: Number, type: Boolean, Date: Date }],
});
const Transactions = mongoose.model("Transcations", transaction);
