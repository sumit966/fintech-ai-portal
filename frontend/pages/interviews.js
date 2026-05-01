import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Calendar, Clock, UserPlus, Search, Trash2, CheckCircle, XCircle } from 'lucide-react';

export default function Interviews() {
  const [interviews, setInterviews] = useState([]);
  const [form, setForm] = useState({ candidateName: '', role: '', date: '', time: '', interviewer: '' });
  const [search, setSearch] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('interviews');
    if (stored) setInterviews(JSON.parse(stored));
    else {
      const defaultInt = [
        { id: 1, candidateName: 'Rajesh Sharma', role: 'Senior Developer', date: '2025-04-20', time: '10:00', interviewer: 'Rahul Verma', status: 'Scheduled' },
        { id: 2, candidateName: 'Priya Singh', role: 'Project Manager', date: '2025-04-22', time: '14:00', interviewer: 'Neha Gupta', status: 'Scheduled' }
      ];
      setInterviews(defaultInt);
      localStorage.setItem('interviews', JSON.stringify(defaultInt));
    }
  }, []);

  const scheduleInterview = (e) => {
    e.preventDefault();
    if (!form.candidateName || !form.role || !form.date || !form.time || !form.interviewer) return;
    const newId = interviews.length + 1;
    const newInterview = { ...form, id: newId, status: 'Scheduled' };
    const updated = [...interviews, newInterview];
    setInterviews(updated);
    localStorage.setItem('interviews', JSON.stringify(updated));
    setForm({ candidateName: '', role: '', date: '', time: '', interviewer: '' });
  };

  const deleteInterview = (id) => {
    const updated = interviews.filter(i => i.id !== id);
    setInterviews(updated);
    localStorage.setItem('interviews', JSON.stringify(updated));
  };

  const filtered = interviews.filter(i => i.candidateName.toLowerCase().includes(search.toLowerCase()) || i.role.toLowerCase().includes(search.toLowerCase()));

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div><h1 className="text-2xl font-bold text-white">Interview Management</h1><p className="text-gray-400">Schedule and track interviews</p></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700"><h3 className="text-white font-semibold mb-3">Schedule New Interview</h3>
            <form onSubmit={scheduleInterview} className="space-y-3">
              <input type="text" placeholder="Candidate Name" value={form.candidateName} onChange={(e) => setForm({...form, candidateName: e.target.value})} className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white" required />
              <input type="text" placeholder="Role" value={form.role} onChange={(e) => setForm({...form, role: e.target.value})} className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white" required />
              <input type="date" value={form.date} onChange={(e) => setForm({...form, date: e.target.value})} className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white" required />
              <input type="time" value={form.time} onChange={(e) => setForm({...form, time: e.target.value})} className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white" required />
              <input type="text" placeholder="Interviewer Name" value={form.interviewer} onChange={(e) => setForm({...form, interviewer: e.target.value})} className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white" required />
              <button type="submit" className="w-full py-2 bg-blue-600 rounded-lg text-white flex items-center justify-center gap-2"><UserPlus size={16} /> Schedule</button>
            </form>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700"><div className="flex justify-between mb-3"><h3 className="text-white font-semibold">Upcoming Interviews</h3><div className="relative"><Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} /><input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 pr-3 py-1 bg-gray-700 rounded-lg text-white text-sm" /></div></div>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {filtered.map(i => (
                <div key={i.id} className="flex justify-between items-center p-3 bg-black/30 rounded-lg"><div><p className="text-white font-medium">{i.candidateName}</p><p className="text-xs text-gray-400">{i.role} • Interviewer: {i.interviewer}</p><p className="text-xs text-gray-500">{i.date} at {i.time}</p></div><button onClick={() => deleteInterview(i.id)} className="text-red-400 hover:text-red-300"><Trash2 size={16} /></button></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
