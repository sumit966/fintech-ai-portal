const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  experience: { type: String, enum: ['fresher', 'experienced'], required: true },
  salary: { type: Number, required: true },
  joinDate: { type: Date, required: true },
  department: { type: String, required: true },
  assignedProject: { type: String, default: null },
  assignedProjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  performance: { type: Number, min: 0, max: 100, default: 85 },
  skills: [String],
  certifications: [String],
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Employee', EmployeeSchema);
