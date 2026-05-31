import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Sphere, TorusKnot } from '@react-three/drei';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalEmployees: 45,
    activeProjects: 3,
    monthlyExpenses: 450000,
    interviewsThisWeek: 8,
    examsPending: 12
  });

  return (
    <Layout>
      <div className='p-6'>
        <h1 className='text-3xl font-bold mb-6'>Company Dashboard</h1>
        
        {/* 3D Animation Section */}
        <div className='h-96 mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl overflow-hidden shadow-xl'>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls enableZoom={true} />
            <TorusKnot position={[-2, 0, 0]} scale={[0.5, 0.5, 0.5]}>
              <meshStandardMaterial color='#FF6B6B' metalness={0.7} roughness={0.3} />
            </TorusKnot>
            <Box position={[2, 0, 0]} scale={[1, 1, 1]}>
              <meshStandardMaterial color='#4ECDC4' metalness={0.5} />
            </Box>
            <Sphere position={[0, 1, 0]} scale={[0.8, 0.8, 0.8]}>
              <meshStandardMaterial color='#FFE66D' metalness={0.3} />
            </Sphere>
          </Canvas>
        </div>

        {/* Stats Cards */}
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
            <p className='text-sm text-gray-600 mt-2'>Budget remaining: ₹41,00,000</p>
          </div>
          <div className='bg-white rounded-lg shadow-lg p-6 transform transition hover:scale-105'>
            <h3 className='text-gray-500 text-sm'>Interviews</h3>
            <p className='text-3xl font-bold text-purple-600'>{stats.interviewsThisWeek}</p>
            <p className='text-sm text-gray-600 mt-2'>This week</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white'>
            <h3 className='text-xl font-bold mb-2'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>📊 View Expenses</li>
              <li>👥 Employee Directory</li>
              <li>📅 Schedule Interview</li>
            </ul>
          </div>
          <div className='bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 text-white'>
            <h3 className='text-xl font-bold mb-2'>Upcoming Deadlines</h3>
            <ul className='space-y-2 text-sm'>
              <li>• Project E-Commerce App: 2 months left</li>
              <li>• Q2 Expenses Report Due: 15 days</li>
              <li>• Employee Reviews: Next week</li>
            </ul>
          </div>
          <div className='bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white'>
            <h3 className='text-xl font-bold mb-2'>AI Insights</h3>
            <p className='text-sm'>📈 Project FinTech AI is 45% complete. On track for December delivery.</p>
            <p className='text-sm mt-2'>💰 Expenses are 15% below budget this quarter.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
