const mongoose = require('mongoose');
const Employee = require('./models/Employee');
const Project = require('./models/Project');
const Payroll = require('./models/Payroll');
const Exam = require('./models/Exam');
const Interview = require('./models/Interview');
require('dotenv').config();

const employees = [
  { name: 'Sumit Kumar', role: 'CEO & Founder', email: 'sumit.kumar@fintech.com', city: 'Mumbai', experience: 'experienced', salary: 350000, joinDate: new Date('2025-03-01'), department: 'Leadership', performance: 98 },
  { name: 'Priya Sharma', role: 'COO', email: 'priya.sharma@fintech.com', city: 'Delhi', experience: 'experienced', salary: 280000, joinDate: new Date('2025-03-01'), department: 'Leadership', performance: 95 },
  { name: 'Rahul Verma', role: 'HR Manager', email: 'rahul.verma@fintech.com', city: 'Bangalore', experience: 'experienced', salary: 150000, joinDate: new Date('2025-03-01'), department: 'HR', performance: 92 },
  { name: 'Neha Gupta', role: 'Project Manager', email: 'neha.gupta@fintech.com', city: 'Pune', experience: 'experienced', salary: 160000, joinDate: new Date('2025-03-01'), department: 'Project Management', performance: 94 },
  { name: 'Amit Patel', role: 'Team Leader', email: 'amit.patel@fintech.com', city: 'Ahmedabad', experience: 'experienced', salary: 140000, joinDate: new Date('2025-03-05'), department: 'Engineering', performance: 90 },
  { name: 'Deepak Joshi', role: 'QA Lead', email: 'deepak.joshi@fintech.com', city: 'Jaipur', experience: 'experienced', salary: 135000, joinDate: new Date('2025-03-05'), department: 'QA', performance: 88 },
  { name: 'Kavita Singh', role: 'Cybersecurity Expert', email: 'kavita.singh@fintech.com', city: 'Lucknow', experience: 'experienced', salary: 180000, joinDate: new Date('2025-03-02'), department: 'Security', performance: 96 },
  { name: 'Rajesh Kumar', role: 'DevOps Engineer', email: 'rajesh.kumar@fintech.com', city: 'Hyderabad', experience: 'experienced', salary: 155000, joinDate: new Date('2025-03-03'), department: 'Infrastructure', performance: 91 },
  { name: 'Anjali Desai', role: 'Senior Developer', email: 'anjali.desai@fintech.com', city: 'Surat', experience: 'experienced', salary: 130000, joinDate: new Date('2025-03-06'), department: 'Engineering', performance: 89 },
  { name: 'Vikram Singh', role: 'Senior Developer', email: 'vikram.singh@fintech.com', city: 'Chandigarh', experience: 'experienced', salary: 125000, joinDate: new Date('2025-03-04'), department: 'Engineering', performance: 87 },
  { name: 'Arjun Reddy', role: 'Fresher Developer', email: 'arjun.reddy@fintech.com', city: 'Hyderabad', experience: 'fresher', salary: 45000, joinDate: new Date('2025-03-17'), department: 'Engineering', performance: 75 },
  { name: 'Divya Nair', role: 'Fresher Tester', email: 'divya.nair@fintech.com', city: 'Chennai', experience: 'fresher', salary: 42000, joinDate: new Date('2025-03-18'), department: 'QA', performance: 72 },
  { name: 'Kunal Mehta', role: 'Fresher Developer', email: 'kunal.mehta@fintech.com', city: 'Indore', experience: 'fresher', salary: 45000, joinDate: new Date('2025-03-19'), department: 'Engineering', performance: 78 },
  { name: 'Pooja Sharma', role: 'Fresher Developer', email: 'pooja.sharma@fintech.com', city: 'Bhopal', experience: 'fresher', salary: 44000, joinDate: new Date('2025-03-20'), department: 'Engineering', performance: 74 },
  { name: 'Rohan Patil', role: 'Fresher Tester', email: 'rohan.patil@fintech.com', city: 'Pune', experience: 'fresher', salary: 42000, joinDate: new Date('2025-03-21'), department: 'QA', performance: 70 },
  { name: 'Sneha Rajput', role: 'Fresher Developer', email: 'sneha.rajput@fintech.com', city: 'Nagpur', experience: 'fresher', salary: 44000, joinDate: new Date('2025-03-22'), department: 'Engineering', performance: 76 }
];

const projects = [
  { name: 'NeoPay Gateway', client: 'HDFC Bank', category: 'Finance', description: 'Digital payment gateway with UPI integration', techStack: ['React', 'Node.js', 'MongoDB'], languages: ['JavaScript', 'TypeScript'], tools: ['Docker', 'Jenkins'], startDate: new Date('2025-04-01'), status: 'running', budget: 25000000, gitRepo: 'https://github.com/fintech/neopay', liveUrl: 'https://neopay.fintech.com', deploymentStatus: 'deployed', sshEnabled: true },
  { name: 'RiskShield AI', client: 'ICICI Lombard', category: 'Finance', description: 'AI-powered fraud detection system', techStack: ['Python', 'TensorFlow', 'FastAPI'], languages: ['Python'], tools: ['Jupyter', 'MLflow'], startDate: new Date('2025-05-15'), status: 'running', budget: 18000000, gitRepo: 'https://github.com/fintech/riskshield', liveUrl: 'https://riskshield.fintech.com', deploymentStatus: 'staging', sshEnabled: true },
  { name: 'EcomPulse', client: 'Flipkart', category: 'Website Development', description: 'E-commerce analytics dashboard', techStack: ['Next.js', 'GraphQL', 'PostgreSQL'], languages: ['TypeScript'], tools: ['Vercel', 'Apollo'], startDate: new Date('2025-06-01'), status: 'running', budget: 15000000, gitRepo: 'https://github.com/fintech/ecompulse', liveUrl: 'https://ecompulse.fintech.com', deploymentStatus: 'deployed', sshEnabled: true }
];

const exams = [
  { name: 'Coding Test', type: 'past', date: new Date('2025-04-15'), duration: 120, totalMarks: 100, passingMarks: 60 },
  { name: 'Java Developer Test', type: 'past', date: new Date('2025-05-20'), duration: 90, totalMarks: 100, passingMarks: 65 },
  { name: 'Cybersecurity Test', type: 'past', date: new Date('2025-06-10'), duration: 120, totalMarks: 100, passingMarks: 70 },
  { name: 'Web Development Test', type: 'past', date: new Date('2025-07-25'), duration: 90, totalMarks: 100, passingMarks: 60 },
  { name: 'React Advanced', type: 'upcoming', date: new Date('2026-05-15'), duration: 120, totalMarks: 100, passingMarks: 70 }
];

const interviews = [
  { candidateName: 'Rajesh Sharma', role: 'Senior Developer', type: 'past', date: new Date('2025-02-20'), hrRound: 'passed', technicalRound: 'passed', finalResult: 'selected', interviewer: 'Rahul Verma' },
  { candidateName: 'Priya Singh', role: 'Project Manager', type: 'past', date: new Date('2025-02-22'), hrRound: 'passed', technicalRound: 'passed', finalResult: 'selected', interviewer: 'Neha Gupta' }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/company_portal');
    console.log('Connected to MongoDB');
    
    await Employee.deleteMany({});
    await Project.deleteMany({});
    await Payroll.deleteMany({});
    await Exam.deleteMany({});
    await Interview.deleteMany({});
    
    const insertedEmployees = await Employee.insertMany(employees);
    console.log('Inserted ' + insertedEmployees.length + ' employees');
    
    const insertedProjects = await Project.insertMany(projects);
    console.log('Inserted ' + insertedProjects.length + ' projects');
    
    const payrollRecords = [];
    for (const emp of insertedEmployees) {
      for (let month = 3; month <= 12; month++) {
        const taxDeduction = emp.salary * 0.1;
        payrollRecords.push({
          employeeId: emp._id,
          employeeName: emp.name,
          month: month,
          year: 2025,
          baseSalary: emp.salary,
          hra: emp.salary * 0.4,
          bonus: month === 3 ? emp.salary * 0.2 : 0,
          taxDeduction: taxDeduction,
          netSalary: emp.salary - taxDeduction + (month === 3 ? emp.salary * 0.2 : 0),
          status: 'paid'
        });
      }
      for (let month = 1; month <= 4; month++) {
        const taxDeduction = emp.salary * 0.1;
        payrollRecords.push({
          employeeId: emp._id,
          employeeName: emp.name,
          month: month,
          year: 2026,
          baseSalary: emp.salary,
          hra: emp.salary * 0.4,
          bonus: month === 1 ? emp.salary * 0.15 : 0,
          taxDeduction: taxDeduction,
          netSalary: emp.salary - taxDeduction + (month === 1 ? emp.salary * 0.15 : 0),
          status: 'paid'
        });
      }
    }
    await Payroll.insertMany(payrollRecords);
    console.log('Inserted ' + payrollRecords.length + ' payroll records');
    
    await Exam.insertMany(exams);
    console.log('Inserted ' + exams.length + ' exams');
    
    await Interview.insertMany(interviews);
    console.log('Inserted ' + interviews.length + ' interviews');
    
    console.log('Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
