import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { FolderGit2, Users, Calendar, DollarSign, Code, CheckCircle, Clock, AlertCircle, TrendingUp, BarChart3, ChevronRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import API_URL from '../utils/api';

export default function Projects() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch(`${API_URL}/projects`)
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error(err));
  }, []);

  const filteredProjects = projects.filter(p => filter === 'all' ? true : p.status === filter);
  const statusColors = { running: 'text-green-400 bg-green-500/20', completed: 'text-blue-400 bg-blue-500/20', 'on-hold': 'text-yellow-400 bg-yellow-500/20' };
  const statusIcons = { running: Clock, completed: CheckCircle, 'on-hold': AlertCircle };

  // Budget data for chart
  const budgetData = projects.map(p => ({ name: p.name.split(' ')[0], budget: parseFloat(p.budget.replace(' Cr', '')) }));

  // Project status for pie chart
  const running = projects.filter(p => p.status === 'running').length;
  const completed = projects.filter(p => p.status === 'completed').length;
  const onHold = projects.filter(p => p.status === 'on-hold').length;
  const pieData = [
    { name: 'Running', value: running, color: '#10b981' },
    { name: 'Completed', value: completed, color: '#3b82f6' },
    { name: 'On Hold', value: onHold, color: '#f59e0b' }
  ];

  return (
    <Layout>
      <div className="space-y-6 p-6">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Projects</h1>
            <p className="text-gray-400 mt-1">{projects.length} total projects • {running} Running • {completed} Completed • {onHold} On Hold</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-lg transition ${filter === 'all' ? 'bg-blue-600 shadow-lg' : 'bg-gray-800 hover:bg-gray-700'} text-white`}>All</button>
            <button onClick={() => setFilter('running')} className={`px-4 py-2 rounded-lg transition ${filter === 'running' ? 'bg-green-600 shadow-lg' : 'bg-gray-800 hover:bg-gray-700'} text-white`}>Running</button>
            <button onClick={() => setFilter('completed')} className={`px-4 py-2 rounded-lg transition ${filter === 'completed' ? 'bg-blue-600 shadow-lg' : 'bg-gray-800 hover:bg-gray-700'} text-white`}>Completed</button>
            <button onClick={() => setFilter('on-hold')} className={`px-4 py-2 rounded-lg transition ${filter === 'on-hold' ? 'bg-yellow-600 shadow-lg' : 'bg-gray-800 hover:bg-gray-700'} text-white`}>On Hold</button>
          </div>
        </div>
        
        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2"><DollarSign size={16} className="text-green-400" /> Budget Comparison (Cr)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={budgetData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
                <YAxis stroke="#9ca3af" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
                <Bar dataKey="budget" fill="#3b82f6" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2"><BarChart3 size={16} className="text-purple-400" /> Project Status</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" label>
                  {pieData.map((entry, idx) => <Cell key={idx} fill={entry.color} />)}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-2">
              {pieData.map(item => <div key={item.name} className="flex items-center gap-1"><div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div><span className="text-xs text-gray-400">{item.name}: {item.value}</span></div>)}
            </div>
          </div>
        </div>
        
        {/* Project Cards - Clickable */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {filteredProjects.map(proj => {
            const StatusIcon = statusIcons[proj.status];
            return (
              <div 
                key={proj.id} 
                onClick={() => router.push(`/projects/${proj.id}`)} 
                className="group bg-gray-800/50 border border-gray-700 rounded-xl p-5 hover:border-blue-500/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition">{proj.name}</h3>
                    <p className="text-sm text-gray-400">Client: {proj.client}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 ${statusColors[proj.status]}`}>
                    <StatusIcon size={10} /> {proj.status.toUpperCase()}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {proj.tech?.slice(0,4).map((t, i) => <span key={i} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">{t}</span>)}
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-400"><Users size={14} /> {proj.team} members</div>
                  <div className="flex items-center gap-2 text-gray-400"><DollarSign size={14} /> {proj.budget}</div>
                  <div className="flex items-center gap-2 text-gray-400"><Calendar size={14} /> {proj.startDate} → {proj.endDate}</div>
                  <div className="flex items-center gap-2 text-gray-400"><TrendingUp size={14} /> {proj.progress}% complete</div>
                </div>
                <div className="mt-3">
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 group-hover:scale-x-105" style={{ width: `${proj.progress}%` }}></div>
                  </div>
                </div>
                <div className="mt-3 text-right opacity-0 group-hover:opacity-100 transition">
                  <span className="text-xs text-blue-400 flex items-center justify-end gap-1">View Details <ChevronRight size={12} /></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
