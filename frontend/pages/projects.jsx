import { useState } from 'react';
import Layout from '../components/Layout';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      name: 'FinTech AI Platform',
      client: 'Global Bank Corp',
      location: 'International',
      shortDesc: 'AI-powered financial analytics platform',
      longDesc: 'A comprehensive AI platform that analyzes financial data, predicts market trends, and provides automated investment recommendations using machine learning algorithms. The system includes real-time market analysis, risk assessment, and portfolio management features with 99.9% accuracy.',
      budget: '₹25,00,000',
      startDate: 'Jan 2024',
      endDate: 'Dec 2024',
      status: 'In Progress',
      progress: 45,
      technologies: ['Python', 'TensorFlow', 'React', 'AWS', 'PostgreSQL', 'Docker'],
      team: ['Rajesh Kumar', 'John Smith', 'Priya Sharma'],
      deliverables: [
        'AI Model Development - ✅ Completed',
        'Backend API - ✅ Completed',
        'Frontend Dashboard - 🔄 In Progress',
        'Testing & Deployment - ⏳ Pending',
        'Client Training - ⏳ Pending'
      ],
      images: ['📊', '🤖', '📈']
    },
    {
      id: 2,
      name: 'E-Commerce Mobile App',
      client: 'ShopEasy Retail',
      location: 'India',
      shortDesc: 'Cross-platform shopping application',
      longDesc: 'A modern e-commerce mobile app with AR try-on features, real-time inventory tracking, and AI-powered product recommendations. The app supports multiple payment gateways, wishlist functionality, and seamless checkout process with 1-click ordering.',
      budget: '₹12,00,000',
      startDate: 'Feb 2024',
      endDate: 'Aug 2024',
      status: 'In Progress',
      progress: 60,
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Redis', 'Stripe API'],
      team: ['Rajesh Kumar', 'Vikram Singh', 'Sarah Johnson'],
      deliverables: [
        'UI/UX Design - ✅ Completed',
        'Backend API - ✅ Completed',
        'Mobile Development - 🔄 70% Complete',
        'Payment Integration - 🔄 In Progress',
        'App Store Submission - ⏳ Pending'
      ],
      images: ['📱', '🛍️', '💳']
    },
    {
      id: 3,
      name: 'Healthcare Management System',
      client: 'City Hospital Group',
      location: 'India',
      shortDesc: 'Patient record and appointment system',
      longDesc: 'A comprehensive healthcare management system with electronic health records, appointment scheduling, telemedicine integration, and prescription management. HIPAA compliant with advanced security features and real-time patient monitoring.',
      budget: '₹18,00,000',
      startDate: 'Mar 2024',
      endDate: 'Dec 2024',
      status: 'Planning',
      progress: 15,
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Docker', 'Kubernetes'],
      team: ['Priya Sharma', 'Vikram Singh', 'Dr. Mehta'],
      deliverables: [
        'Requirements Analysis - ✅ Completed',
        'System Architecture - 🔄 In Progress',
        'Database Design - 🔄 In Progress',
        'Development Phase 1 - ⏳ Pending',
        'Security Audit - ⏳ Pending'
      ],
      images: ['🏥', '📋', '💊']
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'In Progress': return 'bg-yellow-500';
      case 'Planning': return 'bg-blue-500';
      case 'Completed': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Layout>
      <div className='p-6'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold mb-2'>🚀 Our Projects</h1>
          <p className='text-gray-600'>
            Total {projects.length} projects | 
            {projects.filter(p => p.location === 'International').length} International Client | 
            {projects.filter(p => p.location === 'India').length} India-based Clients
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Projects Sidebar */}
          <div className='lg:col-span-1 space-y-4'>
            <h2 className='text-xl font-bold mb-4'>Project List</h2>
            {projects.map(project => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={g-white rounded-lg shadow-lg p-4 cursor-pointer transition-all hover:shadow-xl hover:scale-105 }
              >
                <div className='flex justify-between items-start mb-2'>
                  <h3 className='font-bold text-lg'>{project.name}</h3>
                  <span className={	ext-xs px-2 py-1 rounded-full text-white }>
                    {project.status}
                  </span>
                </div>
                <p className='text-sm text-gray-600 mb-2'>{project.client}</p>
                <div className='flex justify-between items-center mb-2'>
                  <span className={	ext-xs px-2 py-1 rounded }>
                    {project.location}
                  </span>
                  <span className='text-sm font-semibold'>{project.progress}%</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-2'>
                  <div className='bg-blue-600 rounded-full h-2 transition-all' style={{ width: ${project.progress}% }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Details */}
          <div className='lg:col-span-2'>
            {selectedProject ? (
              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                {/* Header with gradient */}
                <div className={g-gradient-to-r  p-6 text-white}>
                  <h2 className='text-2xl font-bold mb-2'>{selectedProject.name}</h2>
                  <p className='opacity-90'>{selectedProject.shortDesc}</p>
                </div>

                <div className='p-6'>
                  {/* Client Info */}
                  <div className='grid grid-cols-2 gap-4 mb-6 pb-6 border-b'>
                    <div>
                      <p className='text-sm text-gray-500'>Client</p>
                      <p className='font-semibold'>{selectedProject.client}</p>
                    </div>
                    <div>
                      <p className='text-sm text-gray-500'>Location</p>
                      <p className='font-semibold'>{selectedProject.location}</p>
                    </div>
                    <div>
                      <p className='text-sm text-gray-500'>Budget</p>
                      <p className='font-semibold text-green-600 text-xl'>{selectedProject.budget}</p>
                    </div>
                    <div>
                      <p className='text-sm text-gray-500'>Timeline</p>
                      <p className='font-semibold'>{selectedProject.startDate} - {selectedProject.endDate}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className='mb-6'>
                    <h3 className='font-bold text-lg mb-2'>📖 Project Description</h3>
                    <p className='text-gray-700 leading-relaxed'>{selectedProject.longDesc}</p>
                  </div>

                  {/* Technologies */}
                  <div className='mb-6'>
                    <h3 className='font-bold text-lg mb-2'>🛠️ Technologies Used</h3>
                    <div className='flex flex-wrap gap-2'>
                      {selectedProject.technologies.map((tech, idx) => (
                        <span key={idx} className='bg-gray-100 px-3 py-1 rounded-full text-sm font-mono'>{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* Team */}
                  <div className='mb-6'>
                    <h3 className='font-bold text-lg mb-2'>👥 Team Members</h3>
                    <div className='flex flex-wrap gap-2'>
                      {selectedProject.team.map((member, idx) => (
                        <span key={idx} className='bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm'>👤 {member}</span>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className='mb-6'>
                    <h3 className='font-bold text-lg mb-2'>✅ Project Deliverables</h3>
                    <div className='space-y-2'>
                      {selectedProject.deliverables.map((item, idx) => (
                        <div key={idx} className='flex items-center p-2 bg-gray-50 rounded'>
                          <span className='mr-2'>{item.includes('✅') ? '✅' : item.includes('🔄') ? '🔄' : '⏳'}</span>
                          <span>{item.replace('✅', '').replace('🔄', '').replace('⏳', '')}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Progress Bar Large */}
                  <div className='bg-gray-50 p-4 rounded-lg'>
                    <div className='flex justify-between mb-2'>
                      <span className='font-semibold'>Overall Progress</span>
                      <span className='font-bold text-blue-600'>{selectedProject.progress}%</span>
                    </div>
                    <div className='w-full bg-gray-200 rounded-full h-4'>
                      <div className='bg-gradient-to-r from-blue-500 to-blue-600 rounded-full h-4 transition-all' style={{ width: ${selectedProject.progress}% }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className='bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-12 text-center'>
                <div className='text-6xl mb-4'>📁</div>
                <h3 className='text-xl font-semibold text-gray-600 mb-2'>Select a Project</h3>
                <p className='text-gray-500'>Click on any project from the list to view detailed information</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
