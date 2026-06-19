import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { 
  FolderGit2, Users, Calendar, DollarSign, Code, 
  CheckCircle, Clock, AlertCircle, TrendingUp, BarChart3,
  Server, Database, Cloud, Shield, Zap, ExternalLink,
  Search, Filter, GitBranch, Globe, Lock
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import API_URL from '../utils/api';

export default function Projects() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/projects`)
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error(err));
  }, []);

  const filteredProjects = projects.filter(p => {
    const matchFilter = filter === 'all' ? true : p.status === filter;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.client.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const statusColors = { running: 'text-green-400 bg-green-500/20', completed: 'text-blue-400 bg-blue-500/20', 'on-hold': 'text-yellow-400 bg-yellow-500/20' };
  const statusIcons = { running: Clock, completed: CheckCircle, 'on-hold': AlertCircle };

  const budgetData = projects.map(p => ({
    name: p.name.split(' ')[0],
    budget: parseFloat(p.budget?.replace(' Cr', '')) || 0
  }));

  const statusData = [
    { name: 'Running', value: projects.filter(p => p.status === 'running').length, color: '#10b981' },
    { name: 'Completed', value: projects.filter(p => p.status === 'completed').length, color: '#3b82f6' },
    { name: 'On Hold', value: projects.filter(p => p.status === 'on-hold').length, color: '#f59e0b' }
  ];

  return (
    <Layout>
      <div className="space-y-6 p-6">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Project Management Center</h1>
            <p className="text-gray-400 mt-1">{projects.length} total projects • {projects.filter(p => p.status === 'running').length} Running</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => window.location.href = '/sap'} className="px-4 py-2 bg-orange-600 rounded-lg text-white hover:bg-orange-700 transition flex items-center gap-2">
              <Database size={16} /> SAP Integration
            </button>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2"><DollarSign size={16} className="text-green-400" /> Budget Comparison</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={budgetData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" label={{ value: 'Cr', position: 'insideLeft' }} />
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
                <Bar dataKey="budget" fill="#3b82f6" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2"><BarChart3 size={16} className="text-purple-400" /> Status Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={statusData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" label>
                  {statusData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-2">
              {statusData.map(item => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-gray-400">{item.name}: {item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white"
            />
          </div>
          <div className="flex gap-2">
            <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-blue-600' : 'bg-gray-800'} text-white`}>All</button>
            <button onClick={() => setFilter('running')} className={`px-4 py-2 rounded-lg ${filter === 'running' ? 'bg-blue-600' : 'bg-gray-800'} text-white`}>Running</button>
            <button onClick={() => setFilter('completed')} className={`px-4 py-2 rounded-lg ${filter === 'completed' ? 'bg-blue-600' : 'bg-gray-800'} text-white`}>Completed</button>
            <button onClick={() => setFilter('on-hold')} className={`px-4 py-2 rounded-lg ${filter === 'on-hold' ? 'bg-blue-600' : 'bg-gray-800'} text-white`}>On Hold</button>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {filteredProjects.map(proj => {
            const StatusIcon = statusIcons[proj.status];
            return (
              <div
                key={proj.id}
                onClick={() => router.push(`/projects/${proj.id}`)}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{proj.name}</h3>
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
                  <div className="h-1.5 bg-white/10 rounded-full">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${proj.progress}%` }}></div>
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  {proj.gitRepo && (
                    <a href={proj.gitRepo} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-blue-400 transition flex items-center gap-1">
                      <GitBranch size={12} /> Repo
                    </a>
                  )}
                  {proj.liveUrl && (
                    <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-blue-400 transition flex items-center gap-1">
                      <Globe size={12} /> Live
                    </a>
                  )}
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Lock size={12} /> {proj.sshEnabled ? 'SSH Enabled' : 'SSH Disabled'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
