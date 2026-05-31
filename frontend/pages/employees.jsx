import { useState } from 'react';
import Layout from '../components/Layout';

export default function Employees() {
  const [filter, setFilter] = useState('all');
  
  const employees = [
    { id: 1, name: 'Rajesh Kumar', position: 'Senior Software Engineer', department: 'Engineering', location: 'India', experience: '8 years', status: 'Active', salary: '₹1,50,000', age: 34, joinDate: '2020-01-15' },
    { id: 2, name: 'Priya Sharma', position: 'HR Manager', department: 'Human Resources', location: 'India', experience: '10 years', status: 'Active', salary: '₹1,20,000', age: 38, joinDate: '2019-03-20' },
    { id: 3, name: 'Amit Patel', position: 'Frontend Developer', department: 'Engineering', location: 'India', experience: '2 years', status: 'Active', salary: '₹60,000', age: 24, joinDate: '2022-06-10' },
    { id: 4, name: 'Sneha Reddy', position: 'Product Manager', department: 'Product', location: 'India', experience: '6 years', status: 'Active', salary: '₹1,80,000', age: 32, joinDate: '2020-08-01' },
    { id: 5, name: 'Vikram Singh', position: 'Backend Developer', department: 'Engineering', location: 'India', experience: '4 years', status: 'Active', salary: '₹90,000', age: 28, joinDate: '2021-02-14' },
    { id: 6, name: 'Neha Gupta', position: 'UI/UX Designer', department: 'Design', location: 'India', experience: '5 years', status: 'Active', salary: '₹85,000', age: 29, joinDate: '2020-11-22' },
    { id: 7, name: 'Rahul Verma', position: 'DevOps Engineer', department: 'Engineering', location: 'India', experience: '7 years', status: 'Active', salary: '₹1,40,000', age: 33, joinDate: '2019-09-05' },
    { id: 8, name: 'Pooja Mehta', position: 'QA Engineer', department: 'Quality Assurance', location: 'India', experience: '3 years', status: 'Active', salary: '₹65,000', age: 26, joinDate: '2021-07-18' },
    { id: 9, name: 'Kunal Joshi', position: 'Data Scientist', department: 'Data Science', location: 'India', experience: '4 years', status: 'Active', salary: '₹1,30,000', age: 30, joinDate: '2021-01-30' },
    { id: 10, name: 'Divya Nair', position: 'Technical Writer', department: 'Documentation', location: 'India', experience: '3 years', status: 'Active', salary: '₹55,000', age: 27, joinDate: '2022-03-12' },
    { id: 11, name: 'Arjun Kumar', position: 'Fresher - Trainee', department: 'Engineering', location: 'India', experience: '0 years', status: 'Probation', salary: '₹25,000', age: 22, joinDate: '2024-01-10' },
    { id: 12, name: 'Kavita Singh', position: 'Fresher - Trainee', department: 'HR', location: 'India', experience: '0 years', status: 'Probation', salary: '₹25,000', age: 23, joinDate: '2024-01-10' },
    { id: 13, name: 'Rohit Sharma', position: 'Senior DevOps', department: 'Engineering', location: 'India', experience: '9 years', status: 'Active', salary: '₹1,60,000', age: 36, joinDate: '2018-12-01' },
    { id: 14, name: 'Anjali Desai', position: 'Marketing Manager', department: 'Marketing', location: 'India', experience: '8 years', status: 'Active', salary: '₹1,20,000', age: 35, joinDate: '2019-06-15' },
    { id: 15, name: 'Suresh Yadav', position: 'System Administrator', department: 'IT', location: 'India', experience: '6 years', status: 'Active', salary: '₹80,000', age: 31, joinDate: '2020-10-08' },
    { id: 16, name: 'Monica Kapoor', position: 'Finance Manager', department: 'Finance', location: 'India', experience: '11 years', status: 'Active', salary: '₹1,50,000', age: 39, joinDate: '2018-04-22' },
    { id: 17, name: 'Tarun Malhotra', position: 'Mobile Developer', department: 'Engineering', location: 'India', experience: '5 years', status: 'Active', salary: '₹95,000', age: 29, joinDate: '2020-05-14' },
    { id: 18, name: 'Shreya Jain', position: 'Content Strategist', department: 'Marketing', location: 'India', experience: '4 years', status: 'Active', salary: '₹70,000', age: 28, joinDate: '2021-09-03' },
    { id: 19, name: 'Deepak Saxena', position: 'Security Analyst', department: 'Security', location: 'India', experience: '6 years', status: 'Active', salary: '₹1,10,000', age: 32, joinDate: '2020-02-17' },
    { id: 20, name: 'Ritu Agarwal', position: 'Business Analyst', department: 'Product', location: 'India', experience: '5 years', status: 'Active', salary: '₹1,00,000', age: 30, joinDate: '2020-07-29' },
    { id: 21, name: 'Nikhil Bansal', position: 'Fresher - Developer', department: 'Engineering', location: 'India', experience: '0 years', status: 'Probation', salary: '₹30,000', age: 23, joinDate: '2024-02-01' },
    { id: 22, name: 'Pallavi Kulkarni', position: 'HR Recruiter', department: 'HR', location: 'India', experience: '3 years', status: 'Active', salary: '₹50,000', age: 26, joinDate: '2021-11-11' },
    { id: 23, name: 'Manoj Tiwari', position: 'Database Admin', department: 'Engineering', location: 'India', experience: '7 years', status: 'Active', salary: '₹1,20,000', age: 34, joinDate: '2019-08-19' },
    { id: 24, name: 'Swati Choudhary', position: 'Tech Lead', department: 'Engineering', location: 'India', experience: '9 years', status: 'Active', salary: '₹1,80,000', age: 37, joinDate: '2018-10-25' },
    { id: 25, name: 'Vivek Bhatia', position: 'Fresher - QA', department: 'Quality Assurance', location: 'India', experience: '0 years', status: 'Probation', salary: '₹25,000', age: 22, joinDate: '2024-01-20' },
    { id: 26, name: 'Neeraj Singh', position: 'Senior Product Manager', department: 'Product', location: 'India', experience: '10 years', status: 'Active', salary: '₹2,00,000', age: 40, joinDate: '2017-12-05' },
    { id: 27, name: 'Karishma Shah', position: 'UX Researcher', department: 'Design', location: 'India', experience: '4 years', status: 'Active', salary: '₹75,000', age: 28, joinDate: '2021-04-09' },
    { id: 28, name: 'Alok Mishra', position: 'Blockchain Developer', department: 'Engineering', location: 'India', experience: '3 years', status: 'Active', salary: '₹1,10,000', age: 27, joinDate: '2022-01-05' },
    { id: 29, name: 'Meera Iyer', position: 'Data Engineer', department: 'Data Science', location: 'India', experience: '5 years', status: 'Active', salary: '₹1,20,000', age: 31, joinDate: '2020-09-14' },
    { id: 30, name: 'Gaurav Thakur', position: 'Cloud Architect', department: 'Engineering', location: 'India', experience: '8 years', status: 'Active', salary: '₹1,70,000', age: 35, joinDate: '2019-05-21' },
    { id: 31, name: 'Richa Sinha', position: 'Legal Counsel', department: 'Legal', location: 'India', experience: '7 years', status: 'Active', salary: '₹1,30,000', age: 34, joinDate: '2019-11-30' },
    { id: 32, name: 'Pankaj Tripathi', position: 'Network Engineer', department: 'IT', location: 'India', experience: '5 years', status: 'Active', salary: '₹70,000', age: 30, joinDate: '2020-12-12' },
    { id: 33, name: 'Ayesha Khan', position: 'Sales Executive', department: 'Sales', location: 'India', experience: '3 years', status: 'Active', salary: '₹50,000', age: 26, joinDate: '2021-08-17' },
    { id: 34, name: 'Rakesh Jha', position: 'Fresher - Trainee', department: 'Marketing', location: 'India', experience: '0 years', status: 'Probation', salary: '₹25,000', age: 23, joinDate: '2024-02-15' },
    { id: 35, name: 'Shilpa Shetty', position: 'PR Manager', department: 'Marketing', location: 'India', experience: '6 years', status: 'Active', salary: '₹1,00,000', age: 33, joinDate: '2019-07-08' },
    { id: 36, name: 'Bharat Kumar', position: 'Operations Manager', department: 'Operations', location: 'India', experience: '9 years', status: 'Active', salary: '₹1,40,000', age: 38, joinDate: '2018-06-25' },
    { id: 37, name: 'Tanvi Mehta', position: 'Software Engineer', department: 'Engineering', location: 'India', experience: '2 years', status: 'Active', salary: '₹65,000', age: 25, joinDate: '2022-05-03' },
    { id: 38, name: 'Chetan Bhagat', position: 'Content Writer', department: 'Marketing', location: 'India', experience: '4 years', status: 'Active', salary: '₹45,000', age: 29, joinDate: '2020-04-18' },
    { id: 39, name: 'Jyoti Verma', position: 'Fresher - Designer', department: 'Design', location: 'India', experience: '0 years', status: 'Probation', salary: '₹28,000', age: 24, joinDate: '2024-03-01' },
    { id: 40, name: 'Anand Rai', position: 'Support Engineer', department: 'Support', location: 'India', experience: '3 years', status: 'Active', salary: '₹40,000', age: 27, joinDate: '2021-10-22' },
    { id: 41, name: 'Komal Das', position: 'HR Generalist', department: 'HR', location: 'India', experience: '4 years', status: 'Active', salary: '₹55,000', age: 28, joinDate: '2020-06-09' },
    { id: 42, name: 'Sanjay Dutt', position: 'Security Guard', department: 'Security', location: 'India', experience: '5 years', status: 'Active', salary: '₹25,000', age: 42, joinDate: '2019-01-15' },
    { id: 43, name: 'Rekha Bhardwaj', position: 'Office Manager', department: 'Administration', location: 'India', experience: '8 years', status: 'Active', salary: '₹60,000', age: 45, joinDate: '2018-03-10' },
    { id: 44, name: 'Lokesh Sharma', position: 'Fresher - Trainee', department: 'Engineering', location: 'India', experience: '0 years', status: 'Probation', salary: '₹25,000', age: 23, joinDate: '2024-02-20' },
    { id: 45, name: 'Aditi Raj', position: 'Data Analyst', department: 'Data Science', location: 'India', experience: '2 years', status: 'Active', salary: '₹60,000', age: 25, joinDate: '2022-04-14' }
  ];

  const filteredEmployees = filter === 'all' ? employees : employees.filter(emp => emp.department === filter);
  const departments = [...new Set(employees.map(emp => emp.department))];

  return (
    <Layout>
      <div className='p-6'>
        <h1 className='text-3xl font-bold mb-6 dark:text-white'>Employees Directory</h1>
        <p className='text-gray-600 dark:text-gray-400 mb-4'>Total Employees: {employees.length} | Active: {employees.filter(e => e.status === 'Active').length} | Probation: {employees.filter(e => e.status === 'Probation').length}</p>
        
        {/* Filter Buttons */}
        <div className='mb-6 flex flex-wrap gap-2'>
          <button onClick={() => setFilter('all')} className={'px-4 py-2 rounded-lg ' + (filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-300')}>All</button>
          {departments.map(dept => (
            <button key={dept} onClick={() => setFilter(dept)} className={'px-4 py-2 rounded-lg ' + (filter === dept ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-300')}>{dept}</button>
          ))}
        </div>

        {/* Employees Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredEmployees.map(emp => (
            <div key={emp.id} className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition'>
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h3 className='text-xl font-bold dark:text-white'>{emp.name}</h3>
                  <p className='text-gray-600 dark:text-gray-400'>{emp.position}</p>
                </div>
                <span className={'px-2 py-1 rounded text-sm ' + (emp.status === 'Active' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300')}>
                  {emp.status}
                </span>
              </div>
              <div className='space-y-2 text-sm'>
                <p><strong className='dark:text-gray-300'>Department:</strong> <span className='dark:text-gray-400'>{emp.department}</span></p>
                <p><strong className='dark:text-gray-300'>Experience:</strong> <span className='dark:text-gray-400'>{emp.experience}</span></p>
                <p><strong className='dark:text-gray-300'>Salary:</strong> <span className='text-green-600 dark:text-green-400 font-bold'>{emp.salary}</span></p>
                <p><strong className='dark:text-gray-300'>Location:</strong> <span className='dark:text-gray-400'>{emp.location}</span></p>
                <p><strong className='dark:text-gray-300'>Age:</strong> <span className='dark:text-gray-400'>{emp.age} years</span></p>
                <p><strong className='dark:text-gray-300'>Joined:</strong> <span className='dark:text-gray-400'>{emp.joinDate}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
