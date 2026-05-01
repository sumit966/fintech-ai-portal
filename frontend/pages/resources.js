import Layout from '../components/Layout';
import { Server, Cpu, HardDrive, Activity, Database, Cloud, DollarSign, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export default function Resources() {
  const resourceData = [
    { name: 'CPU', used: 48, total: 64, unit: 'cores', color: '#3b82f6' },
    { name: 'Memory', used: 128, total: 256, unit: 'GB', color: '#10b981' },
    { name: 'Storage', used: 2.4, total: 5, unit: 'TB', color: '#f59e0b' },
    { name: 'GPU', used: 3, total: 4, unit: 'units', color: '#ef4444' }
  ];
  const costs = [
    { month: 'Jan', compute: 24500, storage: 5600, network: 3200 },
    { month: 'Feb', compute: 26800, storage: 5900, network: 3400 },
    { month: 'Mar', compute: 31200, storage: 6200, network: 3700 }
  ];
  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div><h1 className="text-2xl font-bold text-white">Cloud Resources</h1><p className="text-gray-400 mt-1">Monitor infrastructure usage and costs</p></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {resourceData.map(r => (
            <div key={r.name} className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <div className="flex items-center gap-2 mb-2"><Server size={16} style={{color: r.color}} /><span className="text-gray-400">{r.name}</span></div>
              <p className="text-2xl font-bold text-white">{r.used} <span className="text-sm text-gray-500">/ {r.total} {r.unit}</span></p>
              <div className="h-1.5 bg-white/10 rounded-full mt-2"><div className="h-full rounded-full" style={{ width: `${(r.used/r.total)*100}%`, backgroundColor: r.color }}></div></div>
            </div>
          ))}
        </div>
        <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
          <h3 className="text-white font-semibold mb-4"><DollarSign size={16} className="inline mr-1" /> Monthly Cost Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={costs}><CartesianGrid strokeDasharray="3 3" stroke="#374151" /><XAxis dataKey="month" stroke="#9ca3af" /><YAxis stroke="#9ca3af" /><Tooltip /><Bar dataKey="compute" fill="#3b82f6" name="Compute" /><Bar dataKey="storage" fill="#10b981" name="Storage" /><Bar dataKey="network" fill="#f59e0b" name="Network" /></BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Layout>
  );
}
