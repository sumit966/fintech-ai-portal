const express = require('express');
const router = express.Router();
const Payroll = require('../models/Payroll');

router.get('/', async (req, res) => {
  try {
    const payroll = await Payroll.find().limit(100);
    res.json(payroll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:employeeId', async (req, res) => {
  try {
    const payroll = await Payroll.find({ employeeId: req.params.employeeId });
    res.json(payroll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;