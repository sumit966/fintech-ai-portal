const mongoose = require('mongoose');

const PayrollSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  employeeName: { type: String, required: true },
  month: { type: Number, required: true },
  year: { type: Number, required: true },
  baseSalary: { type: Number, required: true },
  hra: { type: Number, default: 0 },
  bonus: { type: Number, default: 0 },
  taxDeduction: { type: Number, default: 0 },
  netSalary: { type: Number, required: true },
  status: { type: String, enum: ['paid', 'pending'], default: 'paid' },
  paymentDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payroll', PayrollSchema);
