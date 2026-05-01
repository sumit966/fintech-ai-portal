const mongoose = require('mongoose');

const InterviewSchema = new mongoose.Schema({
  candidateName: { type: String, required: true },
  role: { type: String, required: true },
  type: { type: String, enum: ['past', 'upcoming'], required: true },
  date: { type: Date, required: true },
  hrRound: { type: String, enum: ['passed', 'failed', 'scheduled'], default: 'scheduled' },
  technicalRound: { type: String, enum: ['passed', 'failed', 'scheduled'], default: 'scheduled' },
  finalResult: { type: String, enum: ['selected', 'rejected', 'pending'], default: 'pending' },
  interviewer: { type: String, required: true },
  notes: { type: String }
});

module.exports = mongoose.model('Interview', InterviewSchema);
