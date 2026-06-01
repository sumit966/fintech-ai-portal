import Layout from '../components/Layout';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { Users, Cpu, DollarSign, TrendingUp, Briefcase, Calendar, CheckCircle, Award, Activity } from 'lucide-react';

export default function Dashboard() {
  const revenueData = [
    { month: 'Jan', revenue: 45, expenses: 32 },
    { month: 'Feb', revenue: 52, expenses: 35 },
    { month: 'Mar', revenue: 61, expenses: 38 },
    { month: 'Apr', revenue: 58, expenses: 36 },
    { month: 'May', revenue: 67, expenses: 41 },
    { month: 'Jun', revenue: 75, expenses: 45 },
  ];
  const projectStatus = [
    { name: 'Completed', value: 2, color: '#10B981' },
    { name: 'In Progress', value: 5, color: '#8B5CF6' },
    { name: 'Planning', value: 2, color: '#F59E0B' },
  ];
  const stats = [
    { label: 'Employees', value: '50', change: '+12%', icon: Users },
    { label: 'Projects', value: '9', change: '+2', icon: Briefcase },
    { label: 'Revenue', value: '?8.2 Cr', change: '+28%', icon: TrendingUp },
    { label: 'GPU Usage', value: '87%', change: '+12%', icon: Cpu },
  ];
  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <div><h1 className="text-3xl font-bold text-white mb-1">FinTech AI Portal</h1><p className="text-gray-400">Welcome back, <span className="text-purple-400 font-semibold">Sumit Raj</span> (CEO & Founder)</p></div>
        <div className="text-right"><div className="text-sm text-gray-400">Founded</div><div className="text-white font-bold">January 2025</div></div>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-8">{stats.map((s,i)=>{const Icon=s.icon;return(<div key={i} className="glass-card p-4 hover:scale-105 transition"><div className="flex justify-between"><div className="p-2 bg-purple-500/20 rounded-lg"><Icon className="w-4 h-4 text-purple-400"/></div><span className="text-green-400 text-xs">{s.change}</span></div><div className="text-2xl text-white font-bold">{s.value}</div><div className="text-xs text-gray-400">{s.label}</div></div>)})}</div>
      <div className="grid grid-cols-2 gap-6 mb-6"><div className="glass-card p-4"><h2 className="text-white mb-4">?? Financial Performance 2025</h2><ResponsiveContainer width="100%" height={250}><AreaChart data={revenueData}><CartesianGrid stroke="#374151"/><XAxis dataKey="month" stroke="#9CA3AF"/><YAxis stroke="#9CA3AF"/><Tooltip/><Area type="monotone" dataKey="revenue" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} name="Revenue (Lakhs)"/><Area type="monotone" dataKey="expenses" stroke="#EF4444" fill="#EF4444" fillOpacity={0.3} name="Expenses (Lakhs)"/></AreaChart></ResponsiveContainer></div>
      <div className="glass-card p-4"><h2 className="text-white mb-4">?? Project Status</h2><ResponsiveContainer width="100%" height={250}><PieChart><Pie data={projectStatus} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value" label>{projectStatus.map((e,i)=><Cell key={i} fill={e.color}/>)}</Pie><Tooltip/></PieChart></ResponsiveContainer></div></div>
      <div className="glass-card p-4"><h2 className="text-white mb-3">?? Company Achievements</h2><div className="grid grid-cols-2 gap-2">{['?? Best AI Startup 2025 - FinTech Award','?? 10+ Enterprise Clients Onboarded','?? 5 AI Models Successfully Deployed','?? 200% Revenue Growth YoY','? 4.9/5 Client Satisfaction','?? Expanded to 3 International Markets'].map((a,i)=><div key={i} className="flex items-center text-sm text-gray-300"><CheckCircle className="w-3 h-3 text-green-400 mr-2"/>{a}</div>)}</div></div>
    </div>
  );
}
Dashboard.getLayout = (page) => <Layout>{page}</Layout>;
