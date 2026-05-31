import { useState } from 'react';
import Layout from '../components/Layout';

export default function Attendance() {
  const [selectedMonth, setSelectedMonth] = useState('2024-05');
  
  const attendanceData = {
    '2024-01': { present: 22, absent: 2, late: 1, halfDay: 0, wfh: 3 },
    '2024-02': { present: 20, absent: 1, late: 2, halfDay: 1, wfh: 4 },
    '2024-03': { present: 21, absent: 2, late: 1, halfDay: 0, wfh: 5 },
    '2024-04': { present: 22, absent: 1, late: 1, halfDay: 1, wfh: 4 },
    '2024-05': { present: 18, absent: 1, late: 1, halfDay: 0, wfh: 3 }
  };
  
  const recentAttendance = [
    { date: '2024-05-31', name: 'Rajesh Kumar', status: 'Present', checkIn: '09:15 AM', checkOut: '06:30 PM', hours: '9.25' },
    { date: '2024-05-31', name: 'Priya Sharma', status: 'Present', checkIn: '09:00 AM', checkOut: '06:00 PM', hours: '9.0' },
    { date: '2024-05-31', name: 'Amit Patel', status: 'Late', checkIn: '10:30 AM', checkOut: '07:00 PM', hours: '8.5' },
    { date: '2024-05-30', name: 'Rajesh Kumar', status: 'Present', checkIn: '09:20 AM', checkOut: '06:15 PM', hours: '8.92' },
    { date: '2024-05-30', name: 'Priya Sharma', status: 'WFH', checkIn: '09:00 AM', checkOut: '05:30 PM', hours: '8.5' }
  ];

  return (
    <Layout>
      <div className='p-6'>
        <h1 className='text-3xl font-bold mb-6 dark:text-white'>Attendance Management</h1>
        
        <div className='grid grid-cols-1 md:grid-cols-5 gap-6 mb-8'>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center'>
            <div className='text-3xl mb-2'>✅</div>
            <div className='text-2xl font-bold text-green-600 dark:text-green-400'>{attendanceData[selectedMonth].present}</div>
            <div className='text-sm text-gray-600 dark:text-gray-400'>Present Days</div>
          </div>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center'>
            <div className='text-3xl mb-2'>❌</div>
            <div className='text-2xl font-bold text-red-600 dark:text-red-400'>{attendanceData[selectedMonth].absent}</div>
            <div className='text-sm text-gray-600 dark:text-gray-400'>Absent Days</div>
          </div>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center'>
            <div className='text-3xl mb-2'>⏰</div>
            <div className='text-2xl font-bold text-yellow-600 dark:text-yellow-400'>{attendanceData[selectedMonth].late}</div>
            <div className='text-sm text-gray-600 dark:text-gray-400'>Late Arrivals</div>
          </div>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center'>
            <div className='text-3xl mb-2'>🏠</div>
            <div className='text-2xl font-bold text-blue-600 dark:text-blue-400'>{attendanceData[selectedMonth].wfh}</div>
            <div className='text-sm text-gray-600 dark:text-gray-400'>Work From Home</div>
          </div>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center'>
            <div className='text-3xl mb-2'>📊</div>
            <div className='text-2xl font-bold text-purple-600 dark:text-purple-400'>96%</div>
            <div className='text-sm text-gray-600 dark:text-gray-400'>Attendance Rate</div>
          </div>
        </div>

        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-6'>
          <div className='px-6 py-4 bg-gray-50 dark:bg-gray-700 border-b dark:border-gray-600'>
            <h2 className='text-xl font-bold dark:text-white'>Recent Attendance Records</h2>
          </div>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-gray-100 dark:bg-gray-700'>
                <tr className='dark:text-gray-300'>
                  <th className='px-6 py-3 text-left'>Date</th>
                  <th className='px-6 py-3 text-left'>Employee</th>
                  <th className='px-6 py-3 text-left'>Status</th>
                  <th className='px-6 py-3 text-left'>Check In</th>
                  <th className='px-6 py-3 text-left'>Check Out</th>
                  <th className='px-6 py-3 text-left'>Hours</th>
                </tr>
              </thead>
              <tbody>
                {recentAttendance.map((record, idx) => (
                  <tr key={idx} className='border-b dark:border-gray-700 dark:text-gray-300'>
                    <td className='px-6 py-4'>{record.date}</td>
                    <td className='px-6 py-4 font-semibold'>{record.name}</td>
                    <td className='px-6 py-4'><span className={'px-2 py-1 rounded text-xs ' + (record.status === 'Present' ? 'bg-green-100 text-green-700' : record.status === 'Late' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700')}>{record.status}</span></td>
                    <td className='px-6 py-4'>{record.checkIn}</td>
                    <td className='px-6 py-4'>{record.checkOut}</td>
                    <td className='px-6 py-4'>{record.hours}h</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className='bg-blue-50 dark:bg-blue-900 rounded-lg p-6'>
          <h3 className='font-bold text-lg mb-2 dark:text-white'>Quick Actions</h3>
          <div className='flex gap-4'>
            <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>Mark Attendance</button>
            <button className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700'>Request Leave</button>
            <button className='bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700'>Generate Report</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
