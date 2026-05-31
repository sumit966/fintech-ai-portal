import { withAuth } from '../utils/withAuth';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Activity, Cpu, Users, Cloud, Shield, Zap, CheckCircle } from 'lucide-react';

function Dashboard() {
  const stats = [
    { label: 'GPU Utilization', value: '87%', change: '+12%', icon: Cpu, color: 'from-blue-500 to-cyan-500' },
    { label: 'Active Models', value: '24', change: '+3', icon: Activity, color: 'from-purple-500 to-pink-500' },
    { label: 'Total Deployments', value: '156', change: '+18%', icon: Cloud, color: 'from-green-500 to-emerald-500' },
    { label: 'Active Users', value: '1,247', change: '+15%', icon: Users, color: 'from-indigo-500 to-blue-500' },
    { label: 'System Health', value: '99.9%', change: '+0.1%', icon: Shield, color: 'from-green-500 to-teal-500' },
  ];

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-4xl font-bold gradient-text">Welcome back, Admin</h1>
        <p className="text-gray-400 mt-2">Enterprise AI Infrastructure Dashboard</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} whileHover={{ scale: 1.02 }} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 bg-gradient-to-br ${stat.color} rounded-lg`}><Icon className="w-5 h-5 text-white" /></div>
                <span className="text-sm text-green-400">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><Activity className="w-5 h-5 mr-2 text-purple-400" />System Status</h2>
          <div className="space-y-4">
            <div><div className="flex justify-between mb-1"><span className="text-gray-400">CPU Usage</span><span className="text-white">45%</span></div><div className="w-full bg-gray-700 rounded-full h-2"><div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full h-2" style={{ width: '45%' }}></div></div></div>
            <div><div className="flex justify-between mb-1"><span className="text-gray-400">Memory Usage</span><span className="text-white">62%</span></div><div className="w-full bg-gray-700 rounded-full h-2"><div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full h-2" style={{ width: '62%' }}></div></div></div>
            <div><div className="flex justify-between mb-1"><span className="text-gray-400">Storage</span><span className="text-white">38%</span></div><div className="w-full bg-gray-700 rounded-full h-2"><div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full h-2" style={{ width: '38%' }}></div></div></div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><Zap className="w-5 h-5 mr-2 text-yellow-400" />Recent Activity</h2>
          <div className="space-y-3">
            {['New model deployed: GPT-4 v3.0', 'GPU cluster health check completed', 'Training job #2456 completed', 'Security scan completed'].map((activity, idx) => (
              <div key={idx} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5"><CheckCircle className="w-4 h-4 text-green-400" /><span className="text-sm text-gray-300">{activity}</span></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Dashboard);
Dashboard.getLayout = (page) => <Layout>{page}</Layout>;
