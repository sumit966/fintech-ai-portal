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
      description: 'AI-powered financial analytics platform',
      budget: '₹25,00,000',
      status: 'In Progress',
      progress: 45,
      technologies: ['Python', 'TensorFlow', 'React', 'AWS']
    },
    {
      id: 2,
      name: 'E-Commerce Mobile App',
      client: 'ShopEasy Retail',
      location: 'India',
      description: 'Cross-platform shopping application',
      budget: '₹12,00,000',
      status: 'In Progress',
      progress: 60,
      technologies: ['React Native', 'Node.js', 'MongoDB']
    },
    {
      id: 3,
      name: 'Healthcare Management System',
      client: 'City Hospital Group',
      location: 'India',
      description: 'Patient record and appointment system',
      budget: '₹18,00,000',
      status: 'Planning',
      progress: 15,
      technologies: ['Angular', 'Spring Boot', 'MySQL']
    }
  ];

  return (
    <Layout>
      <div className='p-6'>
        <h1 className='text-3xl font-bold mb-6'>Our Projects</h1>
        <p className='text-gray-600 mb-6'>Total {projects.length} projects | {projects.filter(p => p.location === 'International').length} International | {projects.filter(p => p.location === 'India').length} India-based</p>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {projects.map(project => (
            <div 
              key={project.id} 
              className='bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition transform hover:scale-105' 
              onClick={() => setSelectedProject(project)}
            >
              <h3 className='font-bold text-xl mb-2'>{project.name}</h3>
              <p className='text-gray-600 mb-2'>{project.client}</p>
              <span className={'inline-block px-2 py-1 rounded text-sm mb-2 ' + (project.location === 'International' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700')}>
                {project.location}
              </span>
              <div className='mt-2'>
                <div className='flex justify-between text-sm mb-1'>
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-2'>
                  <div className='bg-blue-600 rounded-full h-2' style={{ width: project.progress + '%' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50' onClick={() => setSelectedProject(null)}>
            <div className='bg-white rounded-lg p-6 max-w-lg w-full max-h-96 overflow-y-auto' onClick={(e) => e.stopPropagation()}>
              <h2 className='text-2xl font-bold mb-4'>{selectedProject.name}</h2>
              <div className='space-y-2'>
                <p><strong className='text-gray-700'>Client:</strong> {selectedProject.client}</p>
                <p><strong className='text-gray-700'>Location:</strong> <span className={selectedProject.location === 'International' ? 'text-purple-600' : 'text-green-600'}>{selectedProject.location}</span></p>
                <p><strong className='text-gray-700'>Budget:</strong> <span className='text-green-600 font-bold'>{selectedProject.budget}</span></p>
                <p><strong className='text-gray-700'>Status:</strong> <span className='bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm'>{selectedProject.status}</span></p>
                <p><strong className='text-gray-700'>Description:</strong> {selectedProject.description}</p>
                <p><strong className='text-gray-700'>Technologies:</strong> {selectedProject.technologies.join(', ')}</p>
                <div className='mt-4'>
                  <div className='flex justify-between text-sm mb-1'>
                    <span>Overall Progress</span>
                    <span>{selectedProject.progress}%</span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div className='bg-blue-600 rounded-full h-2' style={{ width: selectedProject.progress + '%' }}></div>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setSelectedProject(null)} 
                className='mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full'
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
