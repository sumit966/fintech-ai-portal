const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  longDescription: String,
  client: String,
  clientLocation: { type: String, enum: ['India', 'International'], default: 'India' },
  budget: Number,
  startDate: Date,
  endDate: Date,
  status: { type: String, enum: ['Planning', 'In Progress', 'Completed', 'On Hold'], default: 'Planning' },
  technologies: [String],
  team: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
  milestones: [{
    title: String,
    completed: Boolean,
    date: Date
  }],
  documents: [String],
  progress: { type: Number, default: 0 }
});

module.exports = mongoose.model('Project', projectSchema);
