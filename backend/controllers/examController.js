const Exam = require('../models/Exam');

exports.getExams = async (req, res) => {
  try {
    const exams = await Exam.find().sort({ date: -1 });
    res.json(exams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getExamsByType = async (req, res) => {
  try {
    const { type } = req.params;
    const exams = await Exam.find({ type });
    res.json(exams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createExam = async (req, res) => {
  try {
    const exam = new Exam(req.body);
    await exam.save();
    res.status(201).json(exam);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
