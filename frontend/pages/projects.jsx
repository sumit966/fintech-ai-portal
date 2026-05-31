import { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, MapPin, Calendar, Users, TrendingUp } from 'lucide-react';

export default function Projects() {
  const projects = [
    { id: 1, name: 'FinTech AI Platform', client: 'Global Bank Corp', location: 'International', budget: '₹25,00,000', startDate: 'Jan 2024', endDate: 'Dec 2024', status: 'In Progress', progress: 45, teamSize: 8, technologies: ['Python', 'TensorFlow', 'React', 'AWS'] },
    { id: 2, name: 'E-Commerce Mobile App', client: 'ShopEasy Retail', location: 'India', budget: '₹12,00,000', startDate: 'Feb 2024', endDate: 'Aug 2024', status: 'In Progress', progress: 60, teamSize: 5, technologies: ['React Native', 'Node.js', 'MongoDB'] },
    { id: 3, name: 'Healthcare Management System', client: 'City Hospital', location: 'India', budget: '₹18,00,000', startDate: 'Mar 2024', endDate: 'Dec 2024', status: 'Planning', progress: 15, teamSize: 6, technologies: ['Angular', 'Spring Boot', 'MySQL'] },
    { id: 4, name: 'Smart Inventory System', client: 'Retail Corp', location: 'India', budget: '₹8,00,000', startDate: 'Apr 2024', endDate: 'Sep 2024', status: 'Planning', progress: 10, teamSize: 4, technologies: ['Python', 'Django', 'React'] },
    { id: 5, name: 'Video Analytics Platform', client: 'Security Solutions', location: 'International', budget: '₹35,00,000', startDate: 'Jan 2024', endDate: 'Jun 2025', status: 'In Progress', progress: 25, teamSize: 10, technologies: ['C++', 'OpenCV', 'TensorFlow'] },
    { id: 6, name: 'Chatbot Assistant', client: 'Customer Care Inc', location: 'India', budget: '₹6,00,000', startDate: 'May 2024', endDate: 'Oct 2024', status: 'Planning', progress: 5, teamSize: 3, technologies: ['Python', 'NLP', 'Dialogflow'] },
    { id: 7, name: 'Blockchain Wallet', client: 'Crypto Bank', location: 'International', budget: '₹30,00,000', startDate: 'Feb 2024', endDate: 'Feb 2025', status: 'In Progress', progress: 30, teamSize: 7, technologies: ['Solidity', 'Node.js', 'React'] },
    { id: 8, name: 'HR Management System', client: 'Internal', location: 'India', budget: '₹10,00,000', startDate: 'Mar 2024', endDate: 'Nov 2024', status: 'Planning', progress: 20, teamSize: 5, technologies: ['Java', 'Spring', 'React'] },
    { id: 9, name: 'IoT Dashboard', client: 'Smart Home Ltd', location: 'International', budget: '₹22,00,000', startDate: 'Jan 2024', endDate: 'Dec 2024', status: 'In Progress', progress: 40, teamSize: 6, technologies: ['Python', 'MQTT', 'React'] }
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</h1>
        <p className="text-gray-400 mt-2">Total {projects.length} projects | International: {projects.filter(p => p.location === 'International').length} | India: {projects.filter(p => p.location === 'India').length}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-white">{project.name}</h3>
              <span className={`text-xs px-2 py-1 rounded ${project.location === 'International' ? 'bg-purple-500/20 text-purple-400' : 'bg-green-500/20 text-green-400'}`}>{project.location}</span>
            </div>
            <p className="text-gray-400 text-sm mb-2">{project.client}</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-300"><Rocket className="w-4 h-4 mr-2" />Budget: {project.budget}</div>
              <div className="flex items-center text-gray-300"><Calendar className="w-4 h-4 mr-2" />{project.startDate} - {project.endDate}</div>
              <div className="flex items-center text-gray-300"><Users className="w-4 h-4 mr-2" />Team: {project.teamSize} members</div>
              <div className="mt-3">
                <div className="flex justify-between text-sm mb-1"><span className="text-gray-400">Progress</span><span className="text-white">{project.progress}%</span></div>
                <div className="w-full bg-gray-700 rounded-full h-2"><div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full h-2" style={{ width: `${project.progress}%` }}></div></div>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">{project.technologies.map(t => <span key={t} className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">{t}</span>)}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
