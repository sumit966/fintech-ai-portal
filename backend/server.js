const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/company_portal', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  // Uncomment to seed database
  // const seedDatabase = require('./seedData');
  // seedDatabase();
}).catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/employees', require('./routes/employees'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/payroll', require('./routes/payroll'));
app.use('/api/exams', require('./routes/exams'));
app.use('/api/interviews', require('./routes/interviews'));
app.use('/api/expenses', require('./routes/expenses'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(Server running on port );
});
