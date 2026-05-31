import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      // Mock data since backend may not be running
      const mockSummary = {
        totalExpenses: 450000,
        yearlyBudget: 5000000,
        remainingBudget: 4550000,
        categoryWise: {
          Salary: 250000,
          Infrastructure: 75000,
          Travel: 45000,
          Software: 30000,
          Marketing: 50000
        },
        expenses: [
          { category: 'Salary', amount: 250000, description: 'February salaries', date: '2024-02-28', project: 'FinTech AI' },
          { category: 'Infrastructure', amount: 75000, description: 'Cloud services', date: '2024-02-15', project: 'FinTech AI' },
          { category: 'Travel', amount: 45000, description: 'Client meeting', date: '2024-02-10', project: 'Various' },
          { category: 'Software', amount: 30000, description: 'Licenses', date: '2024-02-20', project: 'E-Commerce App' },
          { category: 'Marketing', amount: 50000, description: 'Digital campaign', date: '2024-02-25', project: 'Marketing' }
        ]
      };
      setSummary(mockSummary);
      setExpenses(mockSummary.expenses);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  return (
    <Layout>
      <div className='p-6'>
        <h1 className='text-3xl font-bold mb-6'>💰 Expense Tracker & Budget Management</h1>
        
        {/* Summary Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-gray-500 text-sm'>Total Expenses (YTD)</h3>
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
              <div className='bg-green-600 rounded-full h-2' style={{ width: ${(summary?.remainingBudget / summary?.yearlyBudget) * 100}% }}></div>
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h2 className='text-xl font-bold mb-4'>Expenses by Category</h2>
            {summary?.categoryWise && Object.entries(summary.categoryWise).map(([category, amount]) => (
              <div key={category} className='mb-3'>
                <div className='flex justify-between mb-1'>
                  <span className='text-sm'>{category}</span>
                  <span className='text-sm font-semibold'>₹{amount.toLocaleString()}</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-2'>
                  <div className='bg-blue-600 rounded-full h-2' style={{ width: ${(amount / summary.totalExpenses) * 100}% }}></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h2 className='text-xl font-bold mb-4'>Budget Utilization</h2>
            <div className='text-center'>
              <div className='relative inline-block'>
                <svg className='w-48 h-48'>
                  <circle className='text-gray-200' strokeWidth='15' stroke='currentColor' fill='transparent' r='70' cx='96' cy='96'/>
                  <circle className='text-green-500' strokeWidth='15' stroke='currentColor' fill='transparent' r='70' cx='96' cy='96' 
                    strokeDasharray={${2 * Math.PI * 70}} strokeDashoffset={${2 * Math.PI * 70 * (1 - summary?.totalExpenses / summary?.yearlyBudget)}}
                    transform='rotate(-90 96 96)'/>
                </svg>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                  <div className='text-2xl font-bold'>{Math.round((summary?.totalExpenses / summary?.yearlyBudget) * 100)}%</div>
                  <div className='text-xs text-gray-500'>Used</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expenses Table */}
        <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
          <div className='px-6 py-4 bg-gray-50 border-b'>
            <h2 className='text-xl font-bold'>📋 Recent Expenses</h2>
          </div>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-gray-100'>
                <tr>
                  <th className='px-6 py-3 text-left text-sm font-semibold'>Category</th>
                  <th className='px-6 py-3 text-left text-sm font-semibold'>Amount</th>
                  <th className='px-6 py-3 text-left text-sm font-semibold'>Description</th>
                  <th className='px-6 py-3 text-left text-sm font-semibold'>Project</th>
                  <th className='px-6 py-3 text-left text-sm font-semibold'>Date</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense, index) => (
                  <tr key={index} className='border-b hover:bg-gray-50'>
                    <td className='px-6 py-4'>
                      <span className='px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs'>{expense.category}</span>
                    </td>
                    <td className='px-6 py-4 font-semibold text-red-600'>₹{expense.amount?.toLocaleString()}</td>
                    <td className='px-6 py-4'>{expense.description}</td>
                    <td className='px-6 py-4'>{expense.project || '-'}</td>
                    <td className='px-6 py-4'>{new Date(expense.date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add Expense Button */}
        <div className='mt-6 text-right'>
          <button className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition'>
            + Add New Expense
          </button>
        </div>
      </div>
    </Layout>
  );
}
