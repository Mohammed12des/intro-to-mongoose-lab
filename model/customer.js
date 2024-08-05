const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;
