import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

export default function Expenses() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    setSummary({
      totalExpenses: 450000,
      yearlyBudget: 5000000,
      remainingBudget: 4550000,
      categoryWise: {
        Salary: 250000,
        Infrastructure: 75000,
        Travel: 45000,
        Software: 30000,
        Marketing: 50000
      }
    });
  }, []);

  const percentageUsed = summary ? (summary.totalExpenses / summary.yearlyBudget) * 100 : 0;

  return (
    <Layout>
      <div className='p-6'>
        <h1 className='text-3xl font-bold mb-6'>Expense Tracker</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-gray-500 text-sm'>Total Expenses</h3>
            <p className='text-3xl font-bold text-red-600'>₹{summary?.totalExpenses?.toLocaleString()}</p>
          </div>
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-gray-500 text-sm'>Yearly Budget</h3>
            <p className='text-3xl font-bold text-blue-600'>₹{summary?.yearlyBudget?.toLocaleString()}</p>
          </div>
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-gray-500 text-sm'>Remaining Budget</h3>
            <p className='text-3xl font-bold text-green-600'>₹{summary?.remainingBudget?.toLocaleString()}</p>
            <div className='w-full bg-gray-200 rounded-full h-2 mt-2'>
              <div className='bg-green-600 rounded-full h-2' style={{ width: percentageUsed + '%' }}></div>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-lg shadow-lg p-6'>
          <h2 className='text-xl font-bold mb-4'>Expenses by Category</h2>
          {summary?.categoryWise && Object.entries(summary.categoryWise).map(([category, amount]) => (
            <div key={category} className='mb-3'>
              <div className='flex justify-between mb-1'>
                <span>{category}</span>
                <span className='font-semibold'>₹{amount.toLocaleString()}</span>
              </div>
              <div className='w-full bg-gray-200 rounded-full h-2'>
                <div className='bg-blue-600 rounded-full h-2' style={{ width: (amount / summary.totalExpenses) * 100 + '%' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
