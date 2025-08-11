const mongoose = require('mongoose');

const PreOrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  color: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PreOrder', PreOrderSchema);
