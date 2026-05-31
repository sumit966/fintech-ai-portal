import { useState } from 'react';
import Layout from '../components/Layout';

export default function Employees() {
  const employees = [
    { id: 1, name: 'Rajesh Kumar', position: 'Senior Developer', department: 'Engineering', location: 'India' },
    { id: 2, name: 'Priya Sharma', position: 'Project Manager', department: 'Management', location: 'India' },
    { id: 3, name: 'John Smith', position: 'Tech Lead', department: 'Engineering', location: 'USA' }
  ];

  return (
    <Layout>
      <div className='p-6'>
        <h1 className='text-3xl font-bold mb-6'>Employees</h1>
        <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
          <table className='w-full'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='px-6 py-3 text-left'>Name</th>
                <th className='px-6 py-3 text-left'>Position</th>
                <th className='px-6 py-3 text-left'>Department</th>
                <th className='px-6 py-3 text-left'>Location</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(emp => (
                <tr key={emp.id} className='border-b'>
                  <td className='px-6 py-4'>{emp.name}</td>
                  <td className='px-6 py-4'>{emp.position}</td>
                  <td className='px-6 py-4'>{emp.department}</td>
                  <td className='px-6 py-4'>{emp.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
