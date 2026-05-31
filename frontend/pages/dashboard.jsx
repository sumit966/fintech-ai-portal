import { motion } from 'framer-motion';
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  Cell
} from 'recharts';
import { Activity, Cpu, Database, Users, TrendingUp, Zap, Shield, Cloud } from 'lucide-react';

export default function Dashboard() {
  const performanceData = [
    { time: '00:00', gpu: 45, cpu: 32, memory: 28 },
    { time: '04:00', gpu: 52, cpu: 38, memory: 35 },
    { time: '08:00', gpu: 78, cpu: 65, memory: 58 },
    { time: '12:00', gpu: 92, cpu: 82, memory: 75 },
    { time: '16:00', gpu: 87, cpu: 71, memory: 68 },
    { time: '20:00', gpu: 67, cpu: 54, memory: 52 },
  ];

  const modelData = [
    { name: 'GPT-4', value: 45, color: '#8B5CF6' },
    { name: 'Llama 2', value: 28, color: '#3B82F6' },
    { name: 'Stable Diffusion', value: 18, color: '#10B981' },
    { name: 'Others', value: 9, color: '#F59E0B' },
  ];

  const stats = [
    { label: 'GPU Utilization', value: '87%', change: '+12%', icon: Cpu, gradient: 'from-blue-500 to-cyan-500' },
    { label: 'Active Models', value: '24', change: '+3', icon: Activity, gradient: 'from-purple-500 to-pink-500' },
    { label: 'Total Deployments', value: '156', change: '+18%', icon: Cloud, gradient: 'from-green-500 to-emerald-500' },
    { label: 'Active Users', value: '1,247', change: '+15%', icon: Users, gradient: 'from-indigo-500 to-blue-500' },
  ];

  return (
    <div>
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Welcome back, Admin
        </h1>
        <p className="text-gray-400 mt-2">Here's what's happening with your AI infrastructure</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 bg-gradient-to-br ${stat.gradient} rounded-xl shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm text-green-400 font-semibold">{stat.change}</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* GPU Performance Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
        >
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Activity className="w-5 h-5 mr-2 text-purple-400" />
            GPU Performance Trend
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px' }}
                labelStyle={{ color: '#F3F4F6' }}
              />
              <Legend />
              <Line type="monotone" dataKey="gpu" stroke="#8B5CF6" strokeWidth={3} dot={{ fill: '#8B5CF6' }} />
              <Line type="monotone" dataKey="cpu" stroke="#3B82F6" strokeWidth={3} dot={{ fill: '#3B82F6' }} />
              <Line type="monotone" dataKey="memory" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981' }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Model Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
        >
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Cpu className="w-5 h-5 mr-2 text-purple-400" />
            AI Model Distribution
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={modelData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {modelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 lg:col-span-2"
        >
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Zap className="w-5 h-5 mr-2 text-yellow-400" />
            Recent Activity
          </h2>
          <div className="space-y-3">
            {[
              { time: '2 min ago', event: 'New model deployed: GPT-4 FinTech v3.0', type: 'success' },
              { time: '15 min ago', event: 'GPU cluster health check completed', type: 'info' },
              { time: '1 hour ago', event: 'Training job #2456 completed successfully', type: 'success' },
              { time: '3 hours ago', event: 'New dataset uploaded: training_data_2024', type: 'info' },
              { time: '5 hours ago', event: 'Security scan completed - no issues found', type: 'success' },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${activity.type === 'success' ? 'bg-green-400' : 'bg-blue-400'} animate-pulse`}></div>
                  <span className="text-gray-300">{activity.event}</span>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* System Health */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
        >
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-green-400" />
            System Health
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Overall Health</span>
                <span className="text-white font-semibold">99.9%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-full h-2" style={{ width: '99.9%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Uptime</span>
                <span className="text-white font-semibold">99.99%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-full h-2" style={{ width: '99.99%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Response Time</span>
                <span className="text-white font-semibold">124ms</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full h-2" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
