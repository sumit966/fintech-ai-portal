import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-purple-50'>
        <div className='container mx-auto px-4 py-16'>
          <div className='text-center mb-12'>
            <h1 className='text-5xl font-bold text-gray-800 mb-4'>
              Welcome to Company Portal
            </h1>
            <p className='text-xl text-gray-600 mb-8'>
              Your centralized hub for managing employees, projects, and finances
            </p>
            <Link href='/dashboard'>
              <button className='bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition'>
                Go to Dashboard →
              </button>
            </Link>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16'>
            <div className='bg-white rounded-lg shadow-lg p-6 text-center'>
              <div className='text-4xl mb-4'>👥</div>
              <h3 className='text-xl font-bold mb-2'>Employee Management</h3>
              <p className='text-gray-600'>View and manage all employees</p>
            </div>
            <div className='bg-white rounded-lg shadow-lg p-6 text-center'>
              <div className='text-4xl mb-4'>🚀</div>
              <h3 className='text-xl font-bold mb-2'>Project Tracking</h3>
              <p className='text-gray-600'>Track project progress</p>
            </div>
            <div className='bg-white rounded-lg shadow-lg p-6 text-center'>
              <div className='text-4xl mb-4'>💰</div>
              <h3 className='text-xl font-bold mb-2'>Expense Management</h3>
              <p className='text-gray-600'>Monitor budgets</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
