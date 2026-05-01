const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  client: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  roadmap: [{
    phase: String,
    startDate: Date,
    endDate: Date,
    status: String,
    deliverables: [String]
  }],
  techStack: [String],
  languages: [String],
  frameworks: [String],
  databases: [String],
  tools: [String],
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  status: { type: String, enum: ['planning', 'running', 'completed', 'on-hold'], required: true },
  budget: { type: Number, required: true },
  team: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
  teamMembers: [{
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    role: String,
    startDate: Date
  }],
  gitRepo: { type: String },
  liveUrl: { type: String },
  deploymentStatus: { type: String, enum: ['deployed', 'staging', 'development', 'failed'], default: 'development' },
  sshEnabled: { type: Boolean, default: false },
  cpuUsage: { type: Number, default: 0 },
  memoryUsage: { type: Number, default: 0 },
  storageUsed: { type: Number, default: 0 },
  vmStatus: { type: String, enum: ['running', 'stopped', 'maintenance'], default: 'running' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', ProjectSchema);
