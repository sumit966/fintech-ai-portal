import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { 
  ArrowLeft, Calendar, Users, DollarSign, Code, 
  CheckCircle, Clock, AlertCircle, Cpu, Activity, 
  HardDrive, TrendingUp, BarChart3, Server, Database,
  GitBranch, Globe, Lock, Terminal, HelpCircle, BookOpen,
  Layers, Zap, Shield, Cloud, Coffee
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import API_URL from '../../utils/api';

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [cpuData, setCpuData] = useState([]);
  const [gpuData, setGpuData] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (id) {
      // Fetch project details
      fetch(`${API_URL}/projects/${id}`)
        .then(res => {
          if (!res.ok) throw new Error('Project not found');
          return res.json();
        })
        .then(data => {
          setProject(data);
          // Generate chart data based on actual usage
          const cpu = [];
          const gpu = [];
          const baseCpu = data.cpuUsage || 45;
          const baseGpu = data.gpuUsage || 0;
          for (let i = 0; i < 24; i++) {
            cpu.push({ time: `${i}:00`, usage: Math.min(100, Math.max(0, baseCpu + (Math.random() - 0.5) * 20)) });
            gpu.push({ time: `${i}:00`, usage: baseGpu > 0 ? Math.min(100, Math.max(0, baseGpu + (Math.random() - 0.5) * 15)) : 0 });
          }
          setCpuData(cpu);
          setGpuData(gpu);
        })
        .catch(err => {
          console.error(err);
          router.push('/404');
        });
      // Fetch employees assigned to this project
      fetch(`${API_URL}/employees`)
        .then(res => res.json())
        .then(data => setEmployees(data.filter(emp => emp.projectId === parseInt(id))))
        .catch(err => console.error(err));
    }
  }, [id]);

  if (!project) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-96">
          <div className="text-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div><p className="mt-4 text-gray-400">Loading project...</p></div>
        </div>
      </Layout>
    );
  }

  const statusConfig = {
    running: { color: 'text-green-400 bg-green-500/20', icon: Clock },
    completed: { color: 'text-blue-400 bg-blue-500/20', icon: CheckCircle },
    'on-hold': { color: 'text-yellow-400 bg-yellow-500/20', icon: AlertCircle }
  };
  const StatusIcon = statusConfig[project.status]?.icon || Clock;

  const resourceData = [
    { name: 'CPU', usage: project.cpuUsage || 45, color: '#3b82f6' },
    { name: 'Memory', usage: project.memoryUsage || 52, color: '#10b981' },
    { name: 'GPU', usage: project.gpuUsage || 0, color: '#ef4444' }
  ];

  return (
    <Layout>
      <div className="space-y-6 p-6 max-w-7xl mx-auto">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-gray-400 hover:text-white transition group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition" /> Back to Projects
        </button>
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-sm">
          <div className="flex flex-wrap justify-between items-start gap-4">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white">{project.name}</h1>
              <p className="text-gray-300 mt-1 flex items-center gap-2"><Globe size={14} /> Client: {project.client}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className={`px-2 py-0.5 rounded-full text-xs flex items-center gap-1 ${statusConfig[project.status]?.color}`}>
                  <StatusIcon size={10} /> {project.status.toUpperCase()}
                </span>
                <span className="px-2 py-0.5 rounded-full text-xs bg-purple-500/20 text-purple-400">{project.category}</span>
                <span className="px-2 py-0.5 rounded-full text-xs bg-blue-500/20 text-blue-400">Budget: {project.budget}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-white">{project.progress}%</p>
              <p className="text-xs text-gray-400">Completion</p>
              <div className="w-32 h-1.5 bg-white/10 rounded-full mt-2"><div className="h-full bg-blue-500 rounded-full" style={{ width: `${project.progress}%` }}></div></div>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-gray-700 pb-2">
          {['overview', 'resources', 'team', 'roadmap', 'faq'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded-lg transition-all duration-200 capitalize ${activeTab === tab ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}>
              {tab === 'overview' && <BookOpen size={14} className="inline mr-1" />}
              {tab === 'resources' && <Cpu size={14} className="inline mr-1" />}
              {tab === 'team' && <Users size={14} className="inline mr-1" />}
              {tab === 'roadmap' && <Activity size={14} className="inline mr-1" />}
              {tab === 'faq' && <HelpCircle size={14} className="inline mr-1" />}
              {tab}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700"><div className="flex items-center gap-2 text-gray-400 mb-1"><Calendar size={14} /> Timeline</div><p className="text-white font-semibold">{project.startDate} ? {project.endDate}</p></div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700"><div className="flex items-center gap-2 text-gray-400 mb-1"><Users size={14} /> Team Size</div><p className="text-white font-semibold">{project.team} members</p></div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700"><div className="flex items-center gap-2 text-gray-400 mb-1"><Layers size={14} /> Tech Stack</div><div className="flex flex-wrap gap-1 mt-1">{project.tech?.slice(0,3).map(t => <span key={t} className="text-xs text-blue-300">{t}</span>)}</div></div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700"><div className="flex items-center gap-2 text-gray-400 mb-1"><DollarSign size={14} /> Budget</div><p className="text-white font-semibold">{project.budget}</p></div>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2"><BookOpen size={16} /> Description</h3>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2"><Code size={16} /> Technology Stack</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div><h4 className="text-blue-400 text-sm mb-2">Languages</h4><div className="flex flex-wrap gap-2">{project.languages?.map(l => <span key={l} className="px-2 py-1 bg-blue-500/20 rounded-md text-xs">{l}</span>)}</div></div>
                <div><h4 className="text-purple-400 text-sm mb-2">Frameworks</h4><div className="flex flex-wrap gap-2">{project.frameworks?.map(f => <span key={f} className="px-2 py-1 bg-purple-500/20 rounded-md text-xs">{f}</span>)}</div></div>
                <div><h4 className="text-green-400 text-sm mb-2">Tools & Platforms</h4><div className="flex flex-wrap gap-2">{project.tools?.map(t => <span key={t} className="px-2 py-1 bg-green-500/20 rounded-md text-xs">{t}</span>)}</div></div>
              </div>
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2"><Cpu size={16} className="text-blue-400" /> CPU Usage (Last 24h)</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={cpuData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#9ca3af" fontSize={10} />
                    <YAxis stroke="#9ca3af" fontSize={10} domain={[0, 100]} />
                    <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
                    <Area type="monotone" dataKey="usage" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2"><BarChart3 size={16} className="text-red-400" /> GPU Utilization</h3>
                {project.gpuUsage > 0 ? (
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={gpuData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="time" stroke="#9ca3af" fontSize={10} />
                      <YAxis stroke="#9ca3af" fontSize={10} domain={[0, 100]} />
                      <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
                      <Line type="monotone" dataKey="usage" stroke="#ef4444" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-48 flex items-center justify-center text-gray-500">No GPU allocated for this project</div>
                )}
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2"><Server size={16} className="text-green-400" /> Resource Utilization</h3>
              <div className="space-y-4">
                {resourceData.filter(r => r.usage > 0).map(res => (
                  <div key={res.name}>
                    <div className="flex justify-between text-sm mb-1"><span className="text-gray-400">{res.name}</span><span className="text-white font-mono">{res.usage}%</span></div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full rounded-full transition-all duration-500" style={{ width: `${res.usage}%`, backgroundColor: res.color }}></div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === 'team' && (
          <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2"><Users size={16} className="text-purple-400" /> Team Members ({employees.length})</h3>
            {employees.length === 0 ? (
              <p className="text-gray-400 text-center py-8">No team members assigned yet.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {employees.map(emp => (
                  <div key={emp.id} className="flex items-center justify-between p-3 bg-black/30 rounded-lg hover:bg-black/50 transition">
                    <div><p className="text-white font-medium">{emp.name}</p><p className="text-xs text-gray-400">{emp.role}</p></div>
                    <div className="flex items-center gap-2"><div className="w-16 h-1.5 bg-white/10 rounded-full"><div className="h-full bg-green-500 rounded-full" style={{ width: `${emp.performance}%` }}></div></div><span className="text-xs text-green-400">{emp.performance}%</span></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Roadmap Tab */}
        {activeTab === 'roadmap' && (
          <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2"><Activity size={16} className="text-yellow-400" /> Project Roadmap</h3>
            <div className="space-y-4">
              {project.roadmap?.map((phase, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold group-hover:scale-110 transition">{idx+1}</div>
                  <div className="flex-1"><p className="text-white">{phase}</p><div className="h-1 w-full bg-white/5 rounded-full mt-2"><div className="h-full w-3/4 bg-blue-500/50 rounded-full"></div></div></div>
                </div>
              ))}
            </div>
            <h3 className="text-white font-semibold mt-6 mb-3 flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> Deliverables</h3>
            <div className="flex flex-wrap gap-2">
              {project.deliverables?.map((d, i) => <span key={i} className="px-3 py-1.5 bg-green-500/10 text-green-400 rounded-full text-sm flex items-center gap-1"><CheckCircle size={12} /> {d}</span>)}
            </div>
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2"><HelpCircle size={16} className="text-blue-400" /> Frequently Asked Questions</h3>
            {project.faq?.length > 0 ? (
              <div className="space-y-4">
                {project.faq.map((item, idx) => (
                  <div key={idx} className="border-b border-gray-700 pb-3 last:border-0">
                    <p className="text-white font-medium flex items-start gap-2"><span className="text-blue-400">?</span> {item.question}</p>
                    <p className="text-gray-400 text-sm mt-1 pl-6"><span className="text-green-400">?</span> {item.answer}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-center py-8">No FAQ available for this project.</p>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
