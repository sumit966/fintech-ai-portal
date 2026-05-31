import { useState } from 'react';
import Layout from '../components/Layout';

export default function Dashboard() {
  const [stats] = useState({
    totalEmployees: 45,
    activeProjects: 3,
    monthlyExpenses: 450000,
    interviewsThisWeek: 8
  });

  return (
    <Layout>
      <div className='p-6'>
        <h1 className='text-3xl font-bold mb-6'>Company Dashboard</h1>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          <div className='bg-white rounded-lg shadow-lg p-6 transform transition hover:scale-105'>
            <h3 className='text-gray-500 text-sm'>Total Employees</h3>
            <p className='text-3xl font-bold text-blue-600'>{stats.totalEmployees}</p>
            <p className='text-sm text-green-600 mt-2'>↑ 12% from last month</p>
          </div>
          <div className='bg-white rounded-lg shadow-lg p-6 transform transition hover:scale-105'>
            <h3 className='text-gray-500 text-sm'>Active Projects</h3>
            <p className='text-3xl font-bold text-green-600'>{stats.activeProjects}</p>
            <p className='text-sm text-gray-600 mt-2'>2 International, 1 India</p>
          </div>
          <div className='bg-white rounded-lg shadow-lg p-6 transform transition hover:scale-105'>
            <h3 className='text-gray-500 text-sm'>Monthly Expenses</h3>
            <p className='text-3xl font-bold text-red-600'>₹{stats.monthlyExpenses.toLocaleString()}</p>
            <p className='text-sm text-gray-600 mt-2'>Budget: ₹41,00,000 left</p>
          </div>
          <div className='bg-white rounded-lg shadow-lg p-6 transform transition hover:scale-105'>
            <h3 className='text-gray-500 text-sm'>Interviews This Week</h3>
            <p className='text-3xl font-bold text-purple-600'>{stats.interviewsThisWeek}</p>
            <p className='text-sm text-gray-600 mt-2'>Schedule pending</p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white'>
            <h3 className='text-xl font-bold mb-3'>Quick Actions</h3>
            <ul className='space-y-2'>
              <li>💰 View Expense Reports</li>
              <li>👥 Manage Employees</li>
              <li>📅 Schedule Interviews</li>
              <li>🚀 Track Projects</li>
            </ul>
          </div>
          <div className='bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 text-white'>
            <h3 className='text-xl font-bold mb-3'>AI Insights</h3>
            <p className='text-sm'>📈 FinTech AI Platform is 45% complete</p>
            <p className='text-sm mt-2'>💰 Expenses are 15% below quarterly budget</p>
            <p className='text-sm mt-2'>👥 3 new interviews scheduled this week</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
