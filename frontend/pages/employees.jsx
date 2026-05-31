import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Briefcase, Calendar, Search, Filter } from 'lucide-react';

export default function Employees() {
  const [search, setSearch] = useState('');
  const [filterDept, setFilterDept] = useState('all');

  const employees = [
    { id: 1, name: 'Rajesh Kumar', position: 'Senior Software Engineer', department: 'Engineering', location: 'India', experience: '8 years', salary: '₹1,50,000', age: 34, joinDate: '2020-01-15', status: 'Active' },
    { id: 2, name: 'Priya Sharma', position: 'HR Manager', department: 'Human Resources', location: 'India', experience: '10 years', salary: '₹1,20,000', age: 38, joinDate: '2019-03-20', status: 'Active' },
    { id: 3, name: 'Amit Patel', position: 'Frontend Developer', department: 'Engineering', location: 'India', experience: '2 years', salary: '₹60,000', age: 24, joinDate: '2022-06-10', status: 'Active' },
    { id: 4, name: 'Sneha Reddy', position: 'Product Manager', department: 'Product', location: 'India', experience: '6 years', salary: '₹1,80,000', age: 32, joinDate: '2020-08-01', status: 'Active' },
    { id: 5, name: 'Vikram Singh', position: 'Backend Developer', department: 'Engineering', location: 'India', experience: '4 years', salary: '₹90,000', age: 28, joinDate: '2021-02-14', status: 'Active' },
    { id: 6, name: 'Neha Gupta', position: 'UI/UX Designer', department: 'Design', location: 'India', experience: '5 years', salary: '₹85,000', age: 29, joinDate: '2020-11-22', status: 'Active' },
    { id: 7, name: 'Rahul Verma', position: 'DevOps Engineer', department: 'Engineering', location: 'India', experience: '7 years', salary: '₹1,40,000', age: 33, joinDate: '2019-09-05', status: 'Active' },
    { id: 8, name: 'Pooja Mehta', position: 'QA Engineer', department: 'Quality Assurance', location: 'India', experience: '3 years', salary: '₹65,000', age: 26, joinDate: '2021-07-18', status: 'Active' },
    { id: 9, name: 'Kunal Joshi', position: 'Data Scientist', department: 'Data Science', location: 'India', experience: '4 years', salary: '₹1,30,000', age: 30, joinDate: '2021-01-30', status: 'Active' },
    { id: 10, name: 'Divya Nair', position: 'Technical Writer', department: 'Documentation', location: 'India', experience: '3 years', salary: '₹55,000', age: 27, joinDate: '2022-03-12', status: 'Active' },
    { id: 11, name: 'Arjun Kumar', position: 'Fresher Trainee', department: 'Engineering', location: 'India', experience: '0 years', salary: '₹25,000', age: 22, joinDate: '2024-01-10', status: 'Probation' },
    { id: 12, name: 'Kavita Singh', position: 'Fresher Trainee', department: 'HR', location: 'India', experience: '0 years', salary: '₹25,000', age: 23, joinDate: '2024-01-10', status: 'Probation' },
    { id: 13, name: 'Rohit Sharma', position: 'Senior DevOps', department: 'Engineering', location: 'India', experience: '9 years', salary: '₹1,60,000', age: 36, joinDate: '2018-12-01', status: 'Active' },
    { id: 14, name: 'Anjali Desai', position: 'Marketing Manager', department: 'Marketing', location: 'India', experience: '8 years', salary: '₹1,20,000', age: 35, joinDate: '2019-06-15', status: 'Active' },
    { id: 15, name: 'Suresh Yadav', position: 'System Admin', department: 'IT', location: 'India', experience: '6 years', salary: '₹80,000', age: 31, joinDate: '2020-10-08', status: 'Active' },
    { id: 16, name: 'Monica Kapoor', position: 'Finance Manager', department: 'Finance', location: 'India', experience: '11 years', salary: '₹1,50,000', age: 39, joinDate: '2018-04-22', status: 'Active' },
    { id: 17, name: 'Tarun Malhotra', position: 'Mobile Developer', department: 'Engineering', location: 'India', experience: '5 years', salary: '₹95,000', age: 29, joinDate: '2020-05-14', status: 'Active' },
    { id: 18, name: 'Shreya Jain', position: 'Content Strategist', department: 'Marketing', location: 'India', experience: '4 years', salary: '₹70,000', age: 28, joinDate: '2021-09-03', status: 'Active' },
    { id: 19, name: 'Deepak Saxena', position: 'Security Analyst', department: 'Security', location: 'India', experience: '6 years', salary: '₹1,10,000', age: 32, joinDate: '2020-02-17', status: 'Active' },
    { id: 20, name: 'Ritu Agarwal', position: 'Business Analyst', department: 'Product', location: 'India', experience: '5 years', salary: '₹1,00,000', age: 30, joinDate: '2020-07-29', status: 'Active' },
    { id: 21, name: 'Nikhil Bansal', position: 'Fresher Developer', department: 'Engineering', location: 'India', experience: '0 years', salary: '₹30,000', age: 23, joinDate: '2024-02-01', status: 'Probation' },
    { id: 22, name: 'Pallavi Kulkarni', position: 'HR Recruiter', department: 'HR', location: 'India', experience: '3 years', salary: '₹50,000', age: 26, joinDate: '2021-11-11', status: 'Active' },
    { id: 23, name: 'Manoj Tiwari', position: 'Database Admin', department: 'Engineering', location: 'India', experience: '7 years', salary: '₹1,20,000', age: 34, joinDate: '2019-08-19', status: 'Active' },
    { id: 24, name: 'Swati Choudhary', position: 'Tech Lead', department: 'Engineering', location: 'India', experience: '9 years', salary: '₹1,80,000', age: 37, joinDate: '2018-10-25', status: 'Active' },
    { id: 25, name: 'Vivek Bhatia', position: 'Fresher QA', department: 'Quality Assurance', location: 'India', experience: '0 years', salary: '₹25,000', age: 22, joinDate: '2024-01-20', status: 'Probation' },
    { id: 26, name: 'Neeraj Singh', position: 'Senior Product Manager', department: 'Product', location: 'India', experience: '10 years', salary: '₹2,00,000', age: 40, joinDate: '2017-12-05', status: 'Active' },
    { id: 27, name: 'Karishma Shah', position: 'UX Researcher', department: 'Design', location: 'India', experience: '4 years', salary: '₹75,000', age: 28, joinDate: '2021-04-09', status: 'Active' },
    { id: 28, name: 'Alok Mishra', position: 'Blockchain Developer', department: 'Engineering', location: 'India', experience: '3 years', salary: '₹1,10,000', age: 27, joinDate: '2022-01-05', status: 'Active' },
    { id: 29, name: 'Meera Iyer', position: 'Data Engineer', department: 'Data Science', location: 'India', experience: '5 years', salary: '₹1,20,000', age: 31, joinDate: '2020-09-14', status: 'Active' },
    { id: 30, name: 'Gaurav Thakur', position: 'Cloud Architect', department: 'Engineering', location: 'India', experience: '8 years', salary: '₹1,70,000', age: 35, joinDate: '2019-05-21', status: 'Active' },
    { id: 31, name: 'Richa Sinha', position: 'Legal Counsel', department: 'Legal', location: 'India', experience: '7 years', salary: '₹1,30,000', age: 34, joinDate: '2019-11-30', status: 'Active' },
    { id: 32, name: 'Pankaj Tripathi', position: 'Network Engineer', department: 'IT', location: 'India', experience: '5 years', salary: '₹70,000', age: 30, joinDate: '2020-12-12', status: 'Active' },
    { id: 33, name: 'Ayesha Khan', position: 'Sales Executive', department: 'Sales', location: 'India', experience: '3 years', salary: '₹50,000', age: 26, joinDate: '2021-08-17', status: 'Active' },
    { id: 34, name: 'Rakesh Jha', position: 'Fresher Trainee', department: 'Marketing', location: 'India', experience: '0 years', salary: '₹25,000', age: 23, joinDate: '2024-02-15', status: 'Probation' },
    { id: 35, name: 'Shilpa Shetty', position: 'PR Manager', department: 'Marketing', location: 'India', experience: '6 years', salary: '₹1,00,000', age: 33, joinDate: '2019-07-08', status: 'Active' },
    { id: 36, name: 'Bharat Kumar', position: 'Operations Manager', department: 'Operations', location: 'India', experience: '9 years', salary: '₹1,40,000', age: 38, joinDate: '2018-06-25', status: 'Active' },
    { id: 37, name: 'Tanvi Mehta', position: 'Software Engineer', department: 'Engineering', location: 'India', experience: '2 years', salary: '₹65,000', age: 25, joinDate: '2022-05-03', status: 'Active' },
    { id: 38, name: 'Chetan Bhagat', position: 'Content Writer', department: 'Marketing', location: 'India', experience: '4 years', salary: '₹45,000', age: 29, joinDate: '2020-04-18', status: 'Active' },
    { id: 39, name: 'Jyoti Verma', position: 'Fresher Designer', department: 'Design', location: 'India', experience: '0 years', salary: '₹28,000', age: 24, joinDate: '2024-03-01', status: 'Probation' },
    { id: 40, name: 'Anand Rai', position: 'Support Engineer', department: 'Support', location: 'India', experience: '3 years', salary: '₹40,000', age: 27, joinDate: '2021-10-22', status: 'Active' },
    { id: 41, name: 'Komal Das', position: 'HR Generalist', department: 'HR', location: 'India', experience: '4 years', salary: '₹55,000', age: 28, joinDate: '2020-06-09', status: 'Active' },
    { id: 42, name: 'Sanjay Dutt', position: 'Security', department: 'Security', location: 'India', experience: '5 years', salary: '₹25,000', age: 42, joinDate: '2019-01-15', status: 'Active' },
    { id: 43, name: 'Rekha Bhardwaj', position: 'Office Manager', department: 'Administration', location: 'India', experience: '8 years', salary: '₹60,000', age: 45, joinDate: '2018-03-10', status: 'Active' },
    { id: 44, name: 'Lokesh Sharma', position: 'Fresher Trainee', department: 'Engineering', location: 'India', experience: '0 years', salary: '₹25,000', age: 23, joinDate: '2024-02-20', status: 'Probation' },
    { id: 45, name: 'Aditi Raj', position: 'Data Analyst', department: 'Data Science', location: 'India', experience: '2 years', salary: '₹60,000', age: 25, joinDate: '2022-04-14', status: 'Active' }
  ];

  const departments = [...new Set(employees.map(e => e.department))];
  const filtered = employees.filter(e => {
    const matchSearch = e.name.toLowerCase().includes(search.toLowerCase()) || e.position.toLowerCase().includes(search.toLowerCase());
    const matchDept = filterDept === 'all' || e.department === filterDept;
    return matchSearch && matchDept;
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Employees</h1>
        <p className="text-gray-400 mt-2">Total: {employees.length} employees | Active: {employees.filter(e => e.status === 'Active').length} | Probation: {employees.filter(e => e.status === 'Probation').length}</p>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 flex items-center bg-white/10 rounded-lg px-3 py-2">
          <Search className="w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Search employees..." value={search} onChange={(e) => setSearch(e.target.value)} className="bg-transparent ml-2 text-white placeholder-gray-400 focus:outline-none flex-1" />
        </div>
        <select value={filterDept} onChange={(e) => setFilterDept(e.target.value)} className="bg-white/10 rounded-lg px-4 py-2 text-white border border-white/20">
          <option value="all">All Departments</option>
          {departments.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>

      {/* Employees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((emp, idx) => (
          <motion.div key={emp.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{emp.name}</h3>
                  <p className="text-sm text-gray-400">{emp.position}</p>
                </div>
              </div>
              <span className={`text-xs px-2 py-1 rounded ${emp.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{emp.status}</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-300"><Briefcase className="w-4 h-4 mr-2" />{emp.department}</div>
              <div className="flex items-center text-gray-300"><MapPin className="w-4 h-4 mr-2" />{emp.location}</div>
              <div className="flex items-center text-gray-300"><Calendar className="w-4 h-4 mr-2" />Experience: {emp.experience} | Joined: {emp.joinDate}</div>
              <div className="text-green-400 font-semibold mt-2">{emp.salary}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
