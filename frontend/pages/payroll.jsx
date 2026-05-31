import { useState } from 'react';
import Layout from '../components/Layout';

export default function Payroll() {
  const [selectedMonth, setSelectedMonth] = useState('2024-05');
  
  const payrollData = {
    '2024-01': { total: '₹18,50,000', processed: 45, pending: 0, avgSalary: '₹41,111' },
    '2024-02': { total: '₹18,50,000', processed: 45, pending: 0, avgSalary: '₹41,111' },
    '2024-03': { total: '₹18,50,000', processed: 45, pending: 0, avgSalary: '₹41,111' },
    '2024-04': { total: '₹19,20,000', processed: 46, pending: 0, avgSalary: '₹41,739' },
    '2024-05': { total: '₹19,50,000', processed: 47, pending: 0, avgSalary: '₹41,489' }
  };
  
  const employees = [
    { id: 1, name: 'Rajesh Kumar', position: 'Senior Software Engineer', salary: '₹1,50,000', bonus: '₹15,000', deductions: '₹10,000', net: '₹1,55,000', bankAccount: 'XXXX1234', pan: 'ABCDE1234F' },
    { id: 2, name: 'Priya Sharma', position: 'HR Manager', salary: '₹1,20,000', bonus: '₹10,000', deductions: '₹8,000', net: '₹1,22,000', bankAccount: 'XXXX5678', pan: 'FGHIJ5678K' },
    { id: 3, name: 'Amit Patel', position: 'Frontend Developer', salary: '₹60,000', bonus: '₹5,000', deductions: '₹4,000', net: '₹61,000', bankAccount: 'XXXX9012', pan: 'LMNOP9012L' }
  ];

  return (
    <Layout>
      <div className='p-6'>
        <h1 className='text-3xl font-bold mb-6 dark:text-white'>Payroll Management</h1>
        
        {/* Summary Cards */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-8'>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6'>
            <h3 className='text-gray-500 dark:text-gray-400 text-sm'>Total Payroll (MTD)</h3>
            <p className='text-3xl font-bold text-green-600 dark:text-green-400'>{payrollData[selectedMonth]?.total || '₹0'}</p>
          </div>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6'>
            <h3 className='text-gray-500 dark:text-gray-400 text-sm'>Employees Processed</h3>
            <p className='text-3xl font-bold text-blue-600 dark:text-blue-400'>{payrollData[selectedMonth]?.processed || 0}</p>
          </div>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6'>
            <h3 className='text-gray-500 dark:text-gray-400 text-sm'>Average Salary</h3>
            <p className='text-3xl font-bold text-purple-600 dark:text-purple-400'>{payrollData[selectedMonth]?.avgSalary || '₹0'}</p>
          </div>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6'>
            <h3 className='text-gray-500 dark:text-gray-400 text-sm'>Pending Approvals</h3>
            <p className='text-3xl font-bold text-orange-600 dark:text-orange-400'>0</p>
          </div>
        </div>

        {/* Month Selector */}
        <div className='mb-6'>
          <label className='block text-sm font-medium mb-2 dark:text-gray-300'>Select Month</label>
          <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className='border rounded-lg px-4 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
            <option value='2024-01'>January 2024</option>
            <option value='2024-02'>February 2024</option>
            <option value='2024-03'>March 2024</option>
            <option value='2024-04'>April 2024</option>
            <option value='2024-05'>May 2024</option>
          </select>
        </div>

        {/* Salary Table */}
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden'>
          <div className='px-6 py-4 bg-gray-50 dark:bg-gray-700 border-b dark:border-gray-600'>
            <h2 className='text-xl font-bold dark:text-white'>Salary Details - {selectedMonth}</h2>
          </div>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-gray-100 dark:bg-gray-700'>
                <tr className='dark:text-gray-300'>
                  <th className='px-6 py-3 text-left'>Employee</th>
                  <th className='px-6 py-3 text-left'>Position</th>
                  <th className='px-6 py-3 text-left'>Basic Salary</th>
                  <th className='px-6 py-3 text-left'>Bonus</th>
                  <th className='px-6 py-3 text-left'>Deductions</th>
                  <th className='px-6 py-3 text-left'>Net Salary</th>
                </tr>
              </thead>
              <tbody>
                {employees.map(emp => (
                  <tr key={emp.id} className='border-b dark:border-gray-700 dark:text-gray-300'>
                    <td className='px-6 py-4 font-semibold'>{emp.name}</td>
                    <td className='px-6 py-4'>{emp.position}</td>
                    <td className='px-6 py-4'>{emp.salary}</td>
                    <td className='px-6 py-4 text-green-600 dark:text-green-400'>{emp.bonus}</td>
                    <td className='px-6 py-4 text-red-600 dark:text-red-400'>{emp.deductions}</td>
                    <td className='px-6 py-4 font-bold text-blue-600 dark:text-blue-400'>{emp.net}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Year-to-Date Summary */}
        <div className='mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6'>
          <h2 className='text-xl font-bold mb-4 dark:text-white'>Year-to-Date Summary</h2>
          <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
            <div><p className='text-gray-500 dark:text-gray-400 text-sm'>Total Paid</p><p className='text-2xl font-bold dark:text-white'>₹94,20,000</p></div>
            <div><p className='text-gray-500 dark:text-gray-400 text-sm'>Total Bonus</p><p className='text-2xl font-bold text-green-600'>₹4,50,000</p></div>
            <div><p className='text-gray-500 dark:text-gray-400 text-sm'>Total Deductions</p><p className='text-2xl font-bold text-red-600'>₹3,20,000</p></div>
            <div><p className='text-gray-500 dark:text-gray-400 text-sm'>Avg Salary</p><p className='text-2xl font-bold dark:text-white'>₹41,500</p></div>
            <div><p className='text-gray-500 dark:text-gray-400 text-sm'>TDS Collected</p><p className='text-2xl font-bold dark:text-white'>₹8,40,000</p></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
