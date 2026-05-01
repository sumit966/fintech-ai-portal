const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['past', 'upcoming'], required: true },
  date: { type: Date, required: true },
  duration: { type: Number, required: true },
  totalMarks: { type: Number, required: true },
  passingMarks: { type: Number, required: true },
  participants: [{ 
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    score: Number,
    status: String
  }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Exam', ExamSchema);
