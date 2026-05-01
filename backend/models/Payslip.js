const mongoose = require('mongoose');

const PayslipSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  employeeName: { type: String, required: true },
  month: { type: Number, required: true },
  year: { type: Number, required: true },
  basicSalary: { type: Number, required: true },
  hra: { type: Number, default: 0 },
  da: { type: Number, default: 0 },
  conveyance: { type: Number, default: 0 },
  specialAllowance: { type: Number, default: 0 },
  bonus: { type: Number, default: 0 },
  totalEarnings: { type: Number, required: true },
  providentFund: { type: Number, default: 0 },
  professionalTax: { type: Number, default: 0 },
  incomeTax: { type: Number, default: 0 },
  totalDeductions: { type: Number, required: true },
  netSalary: { type: Number, required: true },
  paymentDate: { type: Date, default: Date.now },
  paymentStatus: { type: String, enum: ['paid', 'pending', 'failed'], default: 'paid' },
  transactionId: { type: String },
  payslipUrl: { type: String }
});

module.exports = mongoose.model('Payslip', PayslipSchema);
