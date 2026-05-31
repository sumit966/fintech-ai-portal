const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  department: String,
  email: String,
  phone: String,
  joinDate: Date,
  salary: Number,
  status: { type: String, enum: ['Active', 'On Leave', 'Inactive'], default: 'Active' },
  location: { type: String, enum: ['India', 'USA', 'UK', 'Singapore'], default: 'India' },
  profileImage: String,
  skills: [String],
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }]
});

module.exports = mongoose.model('Employee', employeeSchema);
