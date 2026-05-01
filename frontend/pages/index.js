import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { 
  Server, Cpu, HardDrive, Activity, TrendingUp, 
  Zap, CheckCircle, ArrowUp, ArrowDown, FolderGit2,
  BarChart3, Users, Cloud
} from 'lucide-react';

export default function Home() {
  const [stats, setStats] = useState({
    activeVMs: 4,
    cpuUsage: 45,
    memoryUsage: 52,
    storageUsed: '2.4TB',
    gpuLoad: 74,
    activeProjects: 7
  });

  const vmList = [
    { name: 'Production-VM-01', cpu: 45, memory: 52, status: 'running', uptime: '14d' },
    { name: 'AI-Training-01', cpu: 78, memory: 64, status: 'running', uptime: '3d' },
    { name: 'Database-Node', cpu: 23, memory: 48, status: 'running', uptime: '21d' },
    { name: 'Staging-VM', cpu: 12, memory: 31, status: 'stopped', uptime: '0d' }
  ];

  const statCards = [
    { title: 'Active VMs', value: stats.activeVMs, icon: Server, color: '#3b82f6', change: '+2' },
    { title: 'CPU Usage', value: `${stats.cpuUsage}%`, icon: Cpu, color: '#8b5cf6', change: '+5%' },
    { title: 'Memory Usage', value: `${stats.memoryUsage}%`, icon: Activity, color: '#10b981', change: '-3%' },
    { title: 'Storage Used', value: stats.storageUsed, icon: HardDrive, color: '#f59e0b', change: '+8%' },
    { title: 'GPU Load', value: `${stats.gpuLoad}%`, icon: BarChart3, color: '#ef4444', change: '+12%' },
    { title: 'Active Projects', value: stats.activeProjects, icon: FolderGit2, color: '#06b6d4', change: '+2' }
  ];

  return (
    <Layout>
      <div className="space-y-6 p-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6 border border-blue-500/30">
          <h1 className="text-2xl font-bold text-white">Welcome back, Sumit</h1>
          <p className="text-gray-400 mt-1">Here's what's happening with your infrastructure today.</p>
          <div className="flex gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-300">4 Active VMs</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={12} className="text-yellow-400" />
              <span className="text-xs text-gray-300">2 Training Jobs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={12} className="text-green-400" />
              <span className="text-xs text-gray-300">All Systems Go</span>
            </div>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {statCards.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-5 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${stat.color}20` }}>
                    <Icon size={20} style={{ color: stat.color }} />
                  </div>
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">{stat.title}</p>
                <div className="flex items-center gap-1">
                  {stat.change.includes('+') ? <ArrowUp size={12} className="text-green-400" /> : <ArrowDown size={12} className="text-red-400" />}
                  <span className={`text-xs ${stat.change.includes('+') ? 'text-green-400' : 'text-red-400'}`}>{stat.change}</span>
                  <span className="text-xs text-gray-500">vs last week</span>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* VM List */}
        <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-5">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Server size={16} className="text-cyan-400" />
            Virtual Machine Status
          </h3>
          <div className="space-y-3">
            {vmList.map((vm, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-black/30 rounded-lg hover:bg-black/50 transition">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${vm.status === 'running' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                  <div>
                    <p className="text-white font-medium">{vm.name}</p>
                    <p className="text-xs text-gray-500">Uptime: {vm.uptime}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-right">
                    <p className="text-xs text-gray-500">CPU</p>
                    <p className="text-sm text-white">{vm.cpu}%</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">RAM</p>
                    <p className="text-sm text-white">{vm.memory}%</p>
                  </div>
                  <button className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-lg text-xs hover:bg-blue-600/30 transition">Manage</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Resource Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-5">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Cloud size={16} className="text-blue-400" />
              Resource Allocation
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">CPU Cores</span>
                  <span className="text-white">48 / 64 Used</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Memory</span>
                  <span className="text-white">128 / 256 GB</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Storage</span>
                  <span className="text-white">2.4 / 5 TB</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '48%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-5">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Users size={16} className="text-green-400" />
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="py-2 bg-blue-600/20 text-blue-400 rounded-lg text-sm hover:bg-blue-600/30 transition">Launch VM</button>
              <button className="py-2 bg-purple-600/20 text-purple-400 rounded-lg text-sm hover:bg-purple-600/30 transition">Start Training</button>
              <button className="py-2 bg-green-600/20 text-green-400 rounded-lg text-sm hover:bg-green-600/30 transition">Deploy Model</button>
              <button className="py-2 bg-orange-600/20 text-orange-400 rounded-lg text-sm hover:bg-orange-600/30 transition">View Reports</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
