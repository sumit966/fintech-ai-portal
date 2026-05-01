const Interview = require('../models/Interview');

exports.getInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find().sort({ date: -1 });
    res.json(interviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getInterviewsByType = async (req, res) => {
  try {
    const { type } = req.params;
    const interviews = await Interview.find({ type });
    res.json(interviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createInterview = async (req, res) => {
  try {
    const interview = new Interview(req.body);
    await interview.save();
    res.status(201).json(interview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateInterview = async (req, res) => {
  try {
    const interview = await Interview.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(interview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
