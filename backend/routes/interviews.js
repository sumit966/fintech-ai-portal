const express = require('express');
const router = express.Router();
const Interview = require('../models/Interview');

router.get('/', async (req, res) => {
  try {
    const interviews = await Interview.find();
    res.json(interviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;