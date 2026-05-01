import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Search, Mail, MapPin, Briefcase, DollarSign, Calendar, Award, TrendingUp, UserPlus } from 'lucide-react';
import API_URL from '../utils/api';

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch(`${API_URL}/employees`)
      .then(res => res.json())
      .then(data => setEmployees(data))
      .catch(err => console.error(err));
  }, []);

  const filteredEmployees = employees.filter(emp => {
    if (filter === 'fresher') return emp.experience === 'fresher';
    if (filter === 'experienced') return emp.experience === 'experienced';
    return true;
  }).filter(emp => emp.name.toLowerCase().includes(search.toLowerCase()) || emp.role.toLowerCase().includes(search.toLowerCase()));

  return (
    <Layout>
      <div className="space-y-6 p-6">
        <div className="flex justify-between items-center">
          <div><h1 className="text-2xl font-bold text-white">Employees</h1><p className="text-gray-400 mt-1">{employees.length} total employees • {employees.filter(e => e.experience === 'fresher').length} Freshers • {employees.filter(e => e.experience === 'experienced').length} Experienced</p></div>
          <button className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition flex items-center gap-2"><UserPlus size={16} /> Add Employee</button>
        </div>
        
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative"><Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} /><input type="text" placeholder="Search employees..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white" /></div>
          <div className="flex gap-2"><button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-blue-600' : 'bg-gray-800'} text-white`}>All</button><button onClick={() => setFilter('fresher')} className={`px-4 py-2 rounded-lg ${filter === 'fresher' ? 'bg-blue-600' : 'bg-gray-800'} text-white`}>Freshers</button><button onClick={() => setFilter('experienced')} className={`px-4 py-2 rounded-lg ${filter === 'experienced' ? 'bg-blue-600' : 'bg-gray-800'} text-white`}>Experienced</button></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredEmployees.map(emp => (
            <div key={emp.id} className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 hover:border-blue-500/50 hover:scale-105 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3"><div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">{emp.name.charAt(0)}</div><div><h3 className="text-white font-semibold">{emp.name}</h3><p className="text-sm text-gray-400">{emp.role}</p></div></div>
                <span className={`px-2 py-1 rounded-full text-xs ${emp.experience === 'fresher' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{emp.experience}</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-400"><Mail size={14} /> {emp.email}</div>
                <div className="flex items-center gap-2 text-gray-400"><MapPin size={14} /> {emp.city}</div>
                <div className="flex items-center gap-2 text-gray-400"><Briefcase size={14} /> {emp.department}</div>
                <div className="flex items-center gap-2 text-gray-400"><DollarSign size={14} /> ₹{emp.salary.toLocaleString()}/month</div>
                <div className="flex items-center gap-2 text-gray-400"><Calendar size={14} /> Joined: {emp.joinDate}</div>
                <div className="flex items-center gap-2 text-gray-400"><TrendingUp size={14} /> Project: {emp.projectName || 'Internal'}</div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700"><div className="flex justify-between items-center"><span className="text-sm text-gray-400">Performance</span><div className="flex items-center gap-2"><div className="w-24 h-1.5 bg-white/10 rounded-full"><div className="h-full bg-blue-500 rounded-full" style={{ width: `${emp.performance}%` }}></div></div><span className="text-sm text-white">{emp.performance}%</span></div></div></div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
