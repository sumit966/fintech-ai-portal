import { useState } from 'react';
import Layout from '../components/Layout';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    { id: 1, name: 'FinTech AI Platform', client: 'Global Bank Corp', location: 'International', description: 'AI-powered financial analytics platform', budget: '₹25,00,000', startDate: 'Jan 2024', endDate: 'Dec 2024', status: 'In Progress', progress: 45, teamSize: 8, technologies: ['Python', 'TensorFlow', 'React', 'AWS'] },
    { id: 2, name: 'E-Commerce Mobile App', client: 'ShopEasy Retail', location: 'India', description: 'Cross-platform shopping application', budget: '₹12,00,000', startDate: 'Feb 2024', endDate: 'Aug 2024', status: 'In Progress', progress: 60, teamSize: 5, technologies: ['React Native', 'Node.js', 'MongoDB'] },
    { id: 3, name: 'Healthcare Management System', client: 'City Hospital', location: 'India', description: 'Patient record system', budget: '₹18,00,000', startDate: 'Mar 2024', endDate: 'Dec 2024', status: 'Planning', progress: 15, teamSize: 6, technologies: ['Angular', 'Spring Boot', 'MySQL'] },
    { id: 4, name: 'Smart Inventory System', client: 'Retail Corp', location: 'India', description: 'AI-based inventory management', budget: '₹8,00,000', startDate: 'Apr 2024', endDate: 'Sep 2024', status: 'Planning', progress: 10, teamSize: 4, technologies: ['Python', 'Django', 'React'] },
    { id: 5, name: 'Video Analytics Platform', client: 'Security Solutions', location: 'International', description: 'Real-time video surveillance', budget: '₹35,00,000', startDate: 'Jan 2024', endDate: 'Jun 2025', status: 'In Progress', progress: 25, teamSize: 10, technologies: ['C++', 'OpenCV', 'TensorFlow'] },
    { id: 6, name: 'Chatbot Assistant', client: 'Customer Care Inc', location: 'India', description: 'AI customer support chatbot', budget: '₹6,00,000', startDate: 'May 2024', endDate: 'Oct 2024', status: 'Planning', progress: 5, teamSize: 3, technologies: ['Python', 'NLP', 'Dialogflow'] },
    { id: 7, name: 'Blockchain Wallet', client: 'Crypto Bank', location: 'International', description: 'Secure cryptocurrency wallet', budget: '₹30,00,000', startDate: 'Feb 2024', endDate: 'Feb 2025', status: 'In Progress', progress: 30, teamSize: 7, technologies: ['Solidity', 'Node.js', 'React'] },
    { id: 8, name: 'HR Management System', client: 'Internal', location: 'India', description: 'Complete HR solution', budget: '₹10,00,000', startDate: 'Mar 2024', endDate: 'Nov 2024', status: 'Planning', progress: 20, teamSize: 5, technologies: ['Java', 'Spring', 'React'] },
    { id: 9, name: 'IoT Dashboard', client: 'Smart Home Ltd', location: 'International', description: 'IoT device management', budget: '₹22,00,000', startDate: 'Jan 2024', endDate: 'Dec 2024', status: 'In Progress', progress: 40, teamSize: 6, technologies: ['Python', 'MQTT', 'React'] }
  ];

  return (
    <Layout>
      <div className='p-6'>
        <h1 className='text-3xl font-bold mb-6 dark:text-white'>Projects</h1>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>Total {projects.length} projects | {projects.filter(p => p.location === 'International').length} International | {projects.filter(p => p.location === 'India').length} India-based</p>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map(project => (
            <div key={project.id} className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition transform hover:scale-105' onClick={() => setSelectedProject(project)}>
              <div className='flex justify-between items-start mb-2'>
                <h3 className='font-bold text-xl dark:text-white'>{project.name}</h3>
                <span className={'text-xs px-2 py-1 rounded ' + (project.location === 'International' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300' : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300')}>
                  {project.location}
                </span>
              </div>
              <p className='text-gray-600 dark:text-gray-400 mb-2'>{project.client}</p>
              <p className='text-sm text-gray-500 dark:text-gray-500 mb-3'>{project.description}</p>
              <div className='mt-2'>
                <div className='flex justify-between text-sm mb-1'>
                  <span className='dark:text-gray-300'>Progress</span>
                  <span className='dark:text-gray-300'>{project.progress}%</span>
                </div>
                <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                  <div className='bg-blue-600 rounded-full h-2' style={{ width: project.progress + '%' }}></div>
                </div>
              </div>
              <div className='mt-3 text-sm text-gray-500 dark:text-gray-400'>
                Budget: {project.budget} | Team: {project.teamSize}
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50' onClick={() => setSelectedProject(null)}>
            <div className='bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full max-h-96 overflow-y-auto' onClick={(e) => e.stopPropagation()}>
              <h2 className='text-2xl font-bold mb-4 dark:text-white'>{selectedProject.name}</h2>
              <div className='space-y-3'>
                <p><strong className='dark:text-gray-300'>Client:</strong> <span className='dark:text-gray-400'>{selectedProject.client}</span></p>
                <p><strong className='dark:text-gray-300'>Location:</strong> <span className={selectedProject.location === 'International' ? 'text-purple-600 dark:text-purple-400' : 'text-green-600 dark:text-green-400'}>{selectedProject.location}</span></p>
                <p><strong className='dark:text-gray-300'>Budget:</strong> <span className='text-green-600 dark:text-green-400 font-bold'>{selectedProject.budget}</span></p>
                <p><strong className='dark:text-gray-300'>Timeline:</strong> <span className='dark:text-gray-400'>{selectedProject.startDate} - {selectedProject.endDate}</span></p>
                <p><strong className='dark:text-gray-300'>Status:</strong> <span className='bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded text-sm inline-block'>{selectedProject.status}</span></p>
                <p><strong className='dark:text-gray-300'>Description:</strong> <span className='dark:text-gray-400'>{selectedProject.description}</span></p>
                <p><strong className='dark:text-gray-300'>Team Size:</strong> <span className='dark:text-gray-400'>{selectedProject.teamSize} members</span></p>
                <p><strong className='dark:text-gray-300'>Technologies:</strong> <span className='dark:text-gray-400'>{selectedProject.technologies.join(', ')}</span></p>
                <div className='mt-4'>
                  <div className='flex justify-between text-sm mb-1'>
                    <span className='dark:text-gray-300'>Overall Progress</span>
                    <span className='dark:text-gray-300'>{selectedProject.progress}%</span>
                  </div>
                  <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                    <div className='bg-blue-600 rounded-full h-2' style={{ width: selectedProject.progress + '%' }}></div>
                  </div>
                </div>
              </div>
              <button onClick={() => setSelectedProject(null)} className='mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full'>Close</button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
