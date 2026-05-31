const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: ['Travel', 'Salary', 'Infrastructure', 'Marketing', 'Software', 'Training', 'Other']
  },
  amount: {
    type: Number,
    required: true
  },
  description: String,
  date: {
    type: Date,
    default: Date.now
  },
  project: String,
  invoiceNumber: String
});

module.exports = mongoose.model('Expense', expenseSchema);
