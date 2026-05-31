const mongoose = require('mongoose');
const Project = require('./models/Project');
const Employee = require('./models/Employee');
const Expense = require('./models/Expense');

const seedDatabase = async () => {
  try {
    // Clear existing data
    await Project.deleteMany({});
    await Employee.deleteMany({});
    await Expense.deleteMany({});

    // Create employees
    const employees = await Employee.create([
      { name: 'Rajesh Kumar', position: 'Senior Developer', department: 'Engineering', email: 'rajesh@company.com', location: 'India', skills: ['React', 'Node.js', 'Python'] },
      { name: 'Priya Sharma', position: 'Project Manager', department: 'Management', email: 'priya@company.com', location: 'India', skills: ['Agile', 'Scrum', 'Leadership'] },
      { name: 'John Smith', position: 'Tech Lead', department: 'Engineering', email: 'john@company.com', location: 'USA', skills: ['AWS', 'Kubernetes', 'Java'] },
      { name: 'Sarah Johnson', position: 'UX Designer', department: 'Design', email: 'sarah@company.com', location: 'UK', skills: ['Figma', 'Adobe XD', 'UI/UX'] },
      { name: 'Vikram Singh', position: 'Backend Developer', department: 'Engineering', email: 'vikram@company.com', location: 'India', skills: ['Node.js', 'MongoDB', 'Express'] }
    ]);

    // Create projects
    const projects = await Project.create([
      {
        name: 'FinTech AI Platform',
        description: 'AI-powered financial analytics platform',
        longDescription: 'A comprehensive AI platform that analyzes financial data, predicts market trends, and provides automated investment recommendations using machine learning algorithms.',
        client: 'Global Bank Corp',
        clientLocation: 'International',
        budget: 2500000,
        startDate: new Date('2024-01-15'),
        endDate: new Date('2024-12-31'),
        status: 'In Progress',
        technologies: ['Python', 'TensorFlow', 'React', 'AWS', 'PostgreSQL'],
        team: [employees[0]._id, employees[2]._id],
        milestones: [
          { title: 'Requirements Gathering', completed: true, date: new Date('2024-02-01') },
          { title: 'AI Model Development', completed: true, date: new Date('2024-04-15') },
          { title: 'Frontend Development', completed: false, date: new Date('2024-07-30') },
          { title: 'Testing & Deployment', completed: false, date: new Date('2024-11-30') }
        ],
        progress: 45
      },
      {
        name: 'E-Commerce Mobile App',
        description: 'Cross-platform shopping application',
        longDescription: 'A modern e-commerce mobile app with AR try-on features, real-time inventory tracking, and AI-powered product recommendations for enhanced shopping experience.',
        client: 'ShopEasy Retail',
        clientLocation: 'India',
        budget: 1200000,
        startDate: new Date('2024-02-01'),
        endDate: new Date('2024-08-31'),
        status: 'In Progress',
        technologies: ['React Native', 'Node.js', 'MongoDB', 'Redis'],
        team: [employees[0]._id, employees[4]._id, employees[3]._id],
        milestones: [
          { title: 'UI/UX Design', completed: true, date: new Date('2024-02-28') },
          { title: 'Backend API Development', completed: true, date: new Date('2024-04-15') },
          { title: 'Mobile App Development', completed: false, date: new Date('2024-06-30') },
          { title: 'App Store Submission', completed: false, date: new Date('2024-08-15') }
        ],
        progress: 60
      },
      {
        name: 'Healthcare Management System',
        description: 'Patient record and appointment system',
        longDescription: 'A comprehensive healthcare management system with electronic health records, appointment scheduling, telemedicine integration, and prescription management.',
        client: 'City Hospital Group',
        clientLocation: 'India',
        budget: 1800000,
        startDate: new Date('2024-03-01'),
        endDate: new Date('2024-12-15'),
        status: 'Planning',
        technologies: ['Angular', 'Spring Boot', 'MySQL', 'Docker'],
        team: [employees[1]._id, employees[4]._id],
        milestones: [
          { title: 'Requirements Analysis', completed: true, date: new Date('2024-03-30') },
          { title: 'System Architecture', completed: false, date: new Date('2024-05-15') },
          { title: 'Development Phase 1', completed: false, date: new Date('2024-08-30') },
          { title: 'Testing & HIPAA Compliance', completed: false, date: new Date('2024-11-30') }
        ],
        progress: 15
      }
    ]);

    // Create expenses
    await Expense.create([
      { category: 'Salary', amount: 250000, description: 'February salaries', date: new Date('2024-02-28'), project: projects[0].name },
      { category: 'Infrastructure', amount: 75000, description: 'Cloud services', date: new Date('2024-02-15'), project: projects[0].name },
      { category: 'Travel', amount: 45000, description: 'Client meeting travel', date: new Date('2024-02-10') },
      { category: 'Software', amount: 30000, description: 'Software licenses', date: new Date('2024-02-20'), project: projects[1].name },
      { category: 'Marketing', amount: 50000, description: 'Digital marketing campaign', date: new Date('2024-02-25') }
    ]);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

module.exports = seedDatabase;
