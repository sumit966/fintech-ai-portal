import { withAuth } from '../utils/withAuth';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Users, MapPin, Briefcase } from 'lucide-react';

function Employees() {
  const employees = [
    { id: 1, name: 'Rajesh Kumar', position: 'Senior Software Engineer', department: 'Engineering', location: 'India', experience: '8 years' },
    { id: 2, name: 'Priya Sharma', position: 'HR Manager', department: 'Human Resources', location: 'India', experience: '10 years' },
    { id: 3, name: 'Amit Patel', position: 'Frontend Developer', department: 'Engineering', location: 'India', experience: '2 years' },
  ];

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-4xl font-bold gradient-text">Employees</h1>
        <p className="text-gray-400 mt-2">Manage your workforce</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((emp, idx) => (
          <motion.div key={emp.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center"><Users className="w-6 h-6 text-white" /></div>
              <div><h3 className="text-lg font-semibold text-white">{emp.name}</h3><p className="text-sm text-gray-400">{emp.position}</p></div>
            </div>
            <div className="space-y-2 text-sm"><div className="flex items-center text-gray-300"><Briefcase className="w-4 h-4 mr-2" />{emp.department}</div><div className="flex items-center text-gray-300"><MapPin className="w-4 h-4 mr-2" />{emp.location}</div><div className="text-gray-300">Experience: {emp.experience}</div></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default withAuth(Employees);
Employees.getLayout = (page) => <Layout>{page}</Layout>;
