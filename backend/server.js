const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// ============= 29 EMPLOYEES (unchanged) =============
const employees = [
  { id: 1, name: 'Priya Sharma', role: 'COO', email: 'priya.sharma@fintech.com', city: 'Delhi', experience: 'experienced', salary: 280000, joinDate: '2025-03-01', department: 'Leadership', performance: 96, projectId: 2, projectName: 'RiskShield AI' },
  { id: 2, name: 'Rahul Verma', role: 'HR Manager', email: 'rahul.verma@fintech.com', city: 'Bangalore', experience: 'experienced', salary: 150000, joinDate: '2025-03-01', department: 'HR', performance: 92, projectId: null, projectName: 'Internal' },
  { id: 3, name: 'Neha Gupta', role: 'Project Manager', email: 'neha.gupta@fintech.com', city: 'Pune', experience: 'experienced', salary: 160000, joinDate: '2025-03-01', department: 'Project Management', performance: 94, projectId: 3, projectName: 'HealthCare Pro' },
  { id: 4, name: 'Amit Patel', role: 'Tech Lead', email: 'amit.patel@fintech.com', city: 'Ahmedabad', experience: 'experienced', salary: 140000, joinDate: '2025-03-05', department: 'Engineering', performance: 90, projectId: 1, projectName: 'NeoPay Gateway' },
  { id: 5, name: 'Deepak Joshi', role: 'QA Lead', email: 'deepak.joshi@fintech.com', city: 'Jaipur', experience: 'experienced', salary: 135000, joinDate: '2025-03-05', department: 'QA', performance: 88, projectId: 4, projectName: 'EcomPulse' },
  { id: 6, name: 'Kavita Singh', role: 'Cybersecurity Expert', email: 'kavita.singh@fintech.com', city: 'Lucknow', experience: 'experienced', salary: 180000, joinDate: '2025-03-02', department: 'Security', performance: 95, projectId: 5, projectName: 'SecureNet' },
  { id: 7, name: 'Rajesh Kumar', role: 'DevOps Engineer', email: 'rajesh.kumar@fintech.com', city: 'Hyderabad', experience: 'experienced', salary: 155000, joinDate: '2025-03-03', department: 'Infrastructure', performance: 91, projectId: 6, projectName: 'Cloud Infrastructure' },
  { id: 8, name: 'Anjali Desai', role: 'Senior Developer', email: 'anjali.desai@fintech.com', city: 'Surat', experience: 'experienced', salary: 130000, joinDate: '2025-03-06', department: 'Engineering', performance: 89, projectId: 2, projectName: 'RiskShield AI' },
  { id: 9, name: 'Vikram Singh', role: 'Senior Developer', email: 'vikram.singh@fintech.com', city: 'Chandigarh', experience: 'experienced', salary: 125000, joinDate: '2025-03-04', department: 'Engineering', performance: 87, projectId: 1, projectName: 'NeoPay Gateway' },
  { id: 10, name: 'Arjun Reddy', role: 'Fresher Developer', email: 'arjun.reddy@fintech.com', city: 'Hyderabad', experience: 'fresher', salary: 45000, joinDate: '2025-03-10', department: 'Engineering', performance: 78, projectId: 4, projectName: 'EcomPulse' },
  { id: 11, name: 'Divya Nair', role: 'Fresher Tester', email: 'divya.nair@fintech.com', city: 'Chennai', experience: 'fresher', salary: 42000, joinDate: '2025-03-10', department: 'QA', performance: 75, projectId: 3, projectName: 'HealthCare Pro' },
  { id: 12, name: 'Kunal Mehta', role: 'Fresher Developer', email: 'kunal.mehta@fintech.com', city: 'Indore', experience: 'fresher', salary: 45000, joinDate: '2025-03-11', department: 'Engineering', performance: 80, projectId: 1, projectName: 'NeoPay Gateway' },
  { id: 13, name: 'Pooja Sharma', role: 'Fresher Developer', email: 'pooja.sharma@fintech.com', city: 'Bhopal', experience: 'fresher', salary: 44000, joinDate: '2025-03-11', department: 'Engineering', performance: 76, projectId: 2, projectName: 'RiskShield AI' },
  { id: 14, name: 'Rohan Patil', role: 'Fresher Tester', email: 'rohan.patil@fintech.com', city: 'Pune', experience: 'fresher', salary: 42000, joinDate: '2025-03-12', department: 'QA', performance: 72, projectId: 5, projectName: 'SecureNet' },
  { id: 15, name: 'Sneha Rajput', role: 'Fresher Developer', email: 'sneha.rajput@fintech.com', city: 'Nagpur', experience: 'fresher', salary: 44000, joinDate: '2025-03-12', department: 'Engineering', performance: 79, projectId: 4, projectName: 'EcomPulse' },
  { id: 16, name: 'Manish Tiwari', role: 'Fresher Developer', email: 'manish.tiwari@fintech.com', city: 'Lucknow', experience: 'fresher', salary: 43000, joinDate: '2025-03-13', department: 'Engineering', performance: 74, projectId: 3, projectName: 'HealthCare Pro' },
  { id: 17, name: 'Shreya Gupta', role: 'Fresher Tester', email: 'shreya.gupta@fintech.com', city: 'Kanpur', experience: 'fresher', salary: 41000, joinDate: '2025-03-13', department: 'QA', performance: 71, projectId: 1, projectName: 'NeoPay Gateway' },
  { id: 18, name: 'Akash Singh', role: 'Fresher Developer', email: 'akash.singh@fintech.com', city: 'Agra', experience: 'fresher', salary: 43000, joinDate: '2025-03-14', department: 'Engineering', performance: 77, projectId: 2, projectName: 'RiskShield AI' },
  { id: 19, name: 'Neha Verma', role: 'Fresher Tester', email: 'neha.verma@fintech.com', city: 'Meerut', experience: 'fresher', salary: 41000, joinDate: '2025-03-14', department: 'QA', performance: 73, projectId: 5, projectName: 'SecureNet' },
  { id: 20, name: 'Vishal Kulkarni', role: 'Fresher Developer', email: 'vishal.kulkarni@fintech.com', city: 'Nashik', experience: 'fresher', salary: 44000, joinDate: '2025-03-15', department: 'Engineering', performance: 82, projectId: 4, projectName: 'EcomPulse' },
  { id: 21, name: 'Ritika Jain', role: 'Fresher Developer', email: 'ritika.jain@fintech.com', city: 'Gwalior', experience: 'fresher', salary: 43000, joinDate: '2025-03-15', department: 'Engineering', performance: 78, projectId: 3, projectName: 'HealthCare Pro' },
  { id: 22, name: 'Saurabh Yadav', role: 'Fresher Tester', email: 'saurabh.yadav@fintech.com', city: 'Varanasi', experience: 'fresher', salary: 41000, joinDate: '2025-03-16', department: 'QA', performance: 70, projectId: 1, projectName: 'NeoPay Gateway' },
  { id: 23, name: 'Tanvi Shah', role: 'Fresher Developer', email: 'tanvi.shah@fintech.com', city: 'Vadodara', experience: 'fresher', salary: 44000, joinDate: '2025-03-16', department: 'Engineering', performance: 81, projectId: 2, projectName: 'RiskShield AI' },
  { id: 24, name: 'Harshit Malhotra', role: 'Fresher Developer', email: 'harshit@fintech.com', city: 'Amritsar', experience: 'fresher', salary: 43000, joinDate: '2025-03-17', department: 'Engineering', performance: 76, projectId: 5, projectName: 'SecureNet' },
  { id: 25, name: 'Isha Patel', role: 'Fresher Tester', email: 'isha@fintech.com', city: 'Rajkot', experience: 'fresher', salary: 41000, joinDate: '2025-03-17', department: 'QA', performance: 74, projectId: 4, projectName: 'EcomPulse' },
  { id: 26, name: 'Kartik Sharma', role: 'Fresher Developer', email: 'kartik@fintech.com', city: 'Jodhpur', experience: 'fresher', salary: 43000, joinDate: '2025-03-18', department: 'Engineering', performance: 79, projectId: 3, projectName: 'HealthCare Pro' },
  { id: 27, name: 'Mansi Deshmukh', role: 'Fresher Tester', email: 'mansi@fintech.com', city: 'Aurangabad', experience: 'fresher', salary: 41000, joinDate: '2025-03-18', department: 'QA', performance: 72, projectId: 1, projectName: 'NeoPay Gateway' },
  { id: 28, name: 'Nikhil Bansal', role: 'Fresher Developer', email: 'nikhil@fintech.com', city: 'Kota', experience: 'fresher', salary: 43000, joinDate: '2025-03-19', department: 'Engineering', performance: 80, projectId: 2, projectName: 'RiskShield AI' },
  { id: 29, name: 'Ojasvi Rathore', role: 'Fresher Developer', email: 'ojasvi@fintech.com', city: 'Udaipur', experience: 'fresher', salary: 43000, joinDate: '2025-03-19', department: 'Engineering', performance: 77, projectId: 5, projectName: 'SecureNet' }
];

// ============= INTERVIEWS: 200 past, 20 upcoming, 30 pending =============
const pastInterviews = [];
const selectedCount = 32;
const totalPast = 200;

// Generate 200 past interviews
for (let i = 1; i <= totalPast; i++) {
  const isSelected = i <= selectedCount;
  const status = isSelected ? 'Selected' : 'Rejected';
  const hrRound = isSelected ? 'Passed' : (Math.random() > 0.5 ? 'Passed' : 'Failed');
  const techRound = isSelected ? 'Passed' : (Math.random() > 0.6 ? 'Passed' : 'Failed');
  const finalResult = isSelected ? 'Selected' : 'Rejected';
  const feedback = isSelected ? 'Good candidate, hired' : 'Not a fit at this time';
  const date = `2025-${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 28) + 1}`;
  const interviewer = i % 2 === 0 ? 'Rahul Verma' : 'Neha Gupta';
  pastInterviews.push({
    id: i,
    candidateName: `Candidate ${i}`,
    role: ['Developer', 'Tester', 'DevOps', 'Data Scientist', 'Project Manager'][Math.floor(Math.random() * 5)],
    date: date,
    type: 'past',
    hrRound: hrRound,
    technicalRound: techRound,
    finalResult: finalResult,
    interviewer: interviewer,
    feedback: feedback
  });
}

// Upcoming interviews (20)
const upcomingInterviews = [];
for (let i = 1; i <= 20; i++) {
  upcomingInterviews.push({
    id: totalPast + i,
    candidateName: `Upcoming Candidate ${i}`,
    role: ['Senior Developer', 'QA Engineer', 'DevOps Lead', 'AI Engineer', 'Frontend Lead'][Math.floor(Math.random() * 5)],
    date: `2026-04-${15 + i}`,
    type: 'upcoming',
    hrRound: 'Scheduled',
    technicalRound: 'Scheduled',
    finalResult: 'Pending',
    interviewer: i % 2 === 0 ? 'Rahul Verma' : 'Neha Gupta',
    feedback: ''
  });
}

// Pending applications (30) - not yet interviewed
const pendingApplications = [];
for (let i = 1; i <= 30; i++) {
  pendingApplications.push({
    id: totalPast + 20 + i,
    candidateName: `Pending App ${i}`,
    role: ['Fresher Developer', 'Intern', 'Junior Tester', 'Associate DevOps'][Math.floor(Math.random() * 4)],
    appliedDate: `2026-04-${Math.floor(Math.random() * 10) + 1}`,
    status: 'Pending Review',
    type: 'pending'
  });
}

const allInterviews = [...pastInterviews, ...upcomingInterviews];

// ============= EXAMS (unchanged) =============
const exams = [
  { id: 1, name: 'JavaScript Fundamentals', date: '2025-06-15', type: 'past', totalMarks: 100, passingMarks: 60 },
  { id: 2, name: 'React Advanced', date: '2025-07-20', type: 'past', totalMarks: 100, passingMarks: 65 },
  { id: 3, name: 'Python Programming', date: '2025-08-10', type: 'past', totalMarks: 100, passingMarks: 60 },
  { id: 4, name: 'SQL & Databases', date: '2025-09-05', type: 'past', totalMarks: 100, passingMarks: 65 },
  { id: 5, name: 'Soft Skills Assessment', date: '2025-10-12', type: 'past', totalMarks: 100, passingMarks: 70 },
  { id: 6, name: 'Cloud Computing (AWS)', date: '2026-05-20', type: 'upcoming', totalMarks: 100, passingMarks: 70 },
  { id: 7, name: 'DevOps Practices', date: '2026-06-10', type: 'upcoming', totalMarks: 100, passingMarks: 65 },
  { id: 8, name: 'Machine Learning Basics', date: '2026-06-25', type: 'upcoming', totalMarks: 100, passingMarks: 70 }
];

// Exam results for each employee (unchanged)
const examResults = [];
employees.forEach(emp => {
  exams.filter(e => e.type === 'past').forEach(exam => {
    const score = emp.experience === 'experienced' ? 70 + Math.floor(Math.random() * 25) : 55 + Math.floor(Math.random() * 35);
    examResults.push({
      id: examResults.length + 1,
      employeeId: emp.id,
      employeeName: emp.name,
      examId: exam.id,
      examName: exam.name,
      date: exam.date,
      score: score,
      status: score >= exam.passingMarks ? 'PASS' : 'FAIL'
    });
  });
});

// ============= PROJECTS (unchanged) =============
const projects = [
  { id: 1, name: 'NeoPay Gateway', client: 'HDFC Bank', category: 'Finance', status: 'running', progress: 75, budget: '2.8 Cr', team: 12, startDate: '2025-04-01', endDate: '2026-06-30', tech: ['React', 'Node.js', 'MongoDB', 'Redis'], description: 'Digital payment gateway with UPI integration', roadmap: ['Phase 1: Analysis', 'Phase 2: Design', 'Phase 3: Development', 'Phase 4: Testing', 'Phase 5: Deployment'], deliverables: ['UPI Integration', 'Fraud Detection', 'Dashboard'], cpuUsage: 45, memoryUsage: 52, gpuUsage: 0 },
  { id: 2, name: 'RiskShield AI', client: 'Axis Bank', category: 'Finance', status: 'running', progress: 45, budget: '2.5 Cr', team: 8, startDate: '2025-05-15', endDate: '2026-07-31', tech: ['Python', 'TensorFlow', 'FastAPI'], description: 'AI fraud detection', roadmap: ['Phase 1: Data Collection', 'Phase 2: Model Training', 'Phase 3: API', 'Phase 4: Integration'], deliverables: ['ML Model', 'API', 'Dashboard'], cpuUsage: 78, memoryUsage: 64, gpuUsage: 87 },
  { id: 3, name: 'HealthCare Pro', client: 'Apollo Hospitals', category: 'Healthcare', status: 'running', progress: 60, budget: '3.0 Cr', team: 15, startDate: '2025-06-01', endDate: '2026-08-31', tech: ['Java', 'Spring Boot', 'Angular'], description: 'Hospital management system', roadmap: ['Phase 1: Patient Module', 'Phase 2: Billing', 'Phase 3: Pharmacy'], deliverables: ['Patient Portal', 'Billing System'], cpuUsage: 52, memoryUsage: 48, gpuUsage: 0 },
  { id: 4, name: 'EcomPulse', client: 'Reliance Retail', category: 'E-commerce', status: 'running', progress: 85, budget: '2.6 Cr', team: 10, startDate: '2025-07-10', endDate: '2026-05-30', tech: ['MERN', 'GraphQL'], description: 'Analytics dashboard', roadmap: ['Phase 1: Pipeline', 'Phase 2: UI', 'Phase 3: Real-time'], deliverables: ['Dashboard', 'Mobile App'], cpuUsage: 34, memoryUsage: 41, gpuUsage: 0 },
  { id: 5, name: 'SecureNet', client: 'Tata Consultancy Services', category: 'Cybersecurity', status: 'running', progress: 40, budget: '2.7 Cr', team: 9, startDate: '2025-08-01', endDate: '2026-09-15', tech: ['Go', 'Kubernetes'], description: 'Security monitoring', roadmap: ['Phase 1: Threat Detection', 'Phase 2: Monitoring', 'Phase 3: Alerting'], deliverables: ['Threat Detection', 'Dashboard'], cpuUsage: 62, memoryUsage: 55, gpuUsage: 45 },
  { id: 6, name: 'InsureLink', client: 'Bajaj Allianz', category: 'Finance', status: 'running', progress: 55, budget: '2.9 Cr', team: 11, startDate: '2025-09-05', endDate: '2026-10-31', tech: ['.NET Core', 'Azure'], description: 'Insurance middleware', roadmap: ['Phase 1: Integration', 'Phase 2: Data Processing', 'Phase 3: API Gateway'], deliverables: ['Middleware API', 'Security Layer'], cpuUsage: 48, memoryUsage: 60, gpuUsage: 0 }
];

// ============= PAYROLL (unchanged) =============
const payroll = [];
const months = [3,4,5,6,7,8,9,10,11,12,1,2,3,4];
const years = [2025,2025,2025,2025,2025,2025,2025,2025,2025,2025,2026,2026,2026,2026];

employees.forEach(emp => {
  for (let i = 0; i < months.length; i++) {
    const bonus = i === 0 ? emp.salary * 0.2 : (i === 10 ? emp.salary * 0.15 : 0);
    const tax = emp.salary * 0.1;
    payroll.push({
      id: payroll.length + 1,
      employeeId: emp.id,
      employeeName: emp.name,
      month: months[i],
      year: years[i],
      basicSalary: emp.salary,
      hra: emp.salary * 0.4,
      bonus: bonus,
      taxDeduction: tax,
      netSalary: emp.salary + (emp.salary * 0.4) + bonus - tax
    });
  }
});

// ============= API ROUTES =============
app.get('/api/health', (req, res) => res.json({ status: 'OK' }));
app.get('/api/employees', (req, res) => res.json(employees));
app.get('/api/employees/:id', (req, res) => res.json(employees.find(e => e.id === parseInt(req.params.id)) || {}));
app.get('/api/projects', (req, res) => res.json(projects));
app.get('/api/projects/:id', (req, res) => res.json(projects.find(p => p.id === parseInt(req.params.id)) || {}));
app.get('/api/interviews', (req, res) => res.json(allInterviews));
app.get('/api/pending-applications', (req, res) => res.json(pendingApplications));
app.get('/api/exams', (req, res) => res.json(exams));
app.get('/api/exam-results', (req, res) => res.json(examResults));
app.get('/api/payroll', (req, res) => res.json(payroll));
app.get('/api/payroll/:employeeId', (req, res) => res.json(payroll.filter(p => p.employeeId === parseInt(req.params.employeeId))));

const PORT = 5003;
app.listen(PORT, () => {
  console.log(`🚀 Server on port ${PORT}`);
  console.log(`📊 Past interviews: ${pastInterviews.length} (Selected: ${pastInterviews.filter(i => i.finalResult === 'Selected').length})`);
  console.log(`📅 Upcoming interviews: ${upcomingInterviews.length}`);
  console.log(`⏳ Pending applications: ${pendingApplications.length}`);
});
