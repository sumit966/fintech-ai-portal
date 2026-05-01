const Payroll = require('../models/Payroll');

exports.getPayroll = async (req, res) => {
  try {
    const payroll = await Payroll.find().sort({ year: -1, month: -1 });
    res.json(payroll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPayrollByEmployee = async (req, res) => {
  try {
    const payroll = await Payroll.find({ employeeId: req.params.employeeId }).sort({ year: -1, month: -1 });
    res.json(payroll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPayrollSummary = async (req, res) => {
  try {
    const summary = await Payroll.aggregate([
      {
        '$group': {
          '_id': null,
          'totalPayroll': { '$sum': '$netSalary' },
          'totalTax': { '$sum': '$taxDeduction' },
          'totalBonus': { '$sum': '$bonus' },
          'averageSalary': { '$avg': '$netSalary' }
        }
      }
    ]);
    res.json(summary[0] || {});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPayroll = async (req, res) => {
  try {
    const payroll = new Payroll(req.body);
    await payroll.save();
    res.status(201).json(payroll);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
