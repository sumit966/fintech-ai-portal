import { withAuth } from '../utils/withAuth';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Rocket, Calendar, Users } from 'lucide-react';

function Projects() {
  const projects = [
    { id: 1, name: 'FinTech AI Platform', client: 'Global Bank Corp', location: 'International', budget: '?25,00,000', progress: 45 },
    { id: 2, name: 'E-Commerce Mobile App', client: 'ShopEasy Retail', location: 'India', budget: '?12,00,000', progress: 60 },
    { id: 3, name: 'Healthcare System', client: 'City Hospital', location: 'India', budget: '?18,00,000', progress: 15 },
  ];

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-4xl font-bold gradient-text">Projects</h1>
        <p className="text-gray-400 mt-2">Track project progress</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
            <p className="text-gray-400 text-sm mb-2">{project.client}</p>
            <div className="space-y-2 text-sm"><div className="flex items-center text-gray-300"><Rocket className="w-4 h-4 mr-2" />Budget: {project.budget}</div><div className="flex items-center text-gray-300"><Calendar className="w-4 h-4 mr-2" />{project.location}</div></div>
            <div className="mt-3"><div className="flex justify-between text-sm mb-1"><span className="text-gray-400">Progress</span><span className="text-white">{project.progress}%</span></div><div className="w-full bg-gray-700 rounded-full h-2"><div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full h-2" style={{ width: `${project.progress}%` }}></div></div></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default withAuth(Projects);
Projects.getLayout = (page) => <Layout>{page}</Layout>;
