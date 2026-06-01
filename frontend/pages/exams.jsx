import { useState } from 'react';
import Layout from '../components/Layout';
import { GraduationCap, Calendar, CheckCircle, Users, FileText, Plus, Clock } from 'lucide-react';

export default function Exams() {
  const [exams, setExams] = useState([
    { id:1, name:'Python Programming Certification', date:'2025-12-20', duration:'2 hours', participants:45, status:'Scheduled', department:'Engineering' },
    { id:2, name:'Data Science Foundation', date:'2025-12-22', duration:'3 hours', participants:32, status:'Scheduled', department:'Data Science' },
    { id:3, name:'AWS Cloud Practitioner', date:'2026-01-05', duration:'2.5 hours', participants:28, status:'Scheduled', department:'Engineering' },
  ]);
  const [showAddExam, setShowAddExam] = useState(false);
  const [newExam, setNewExam] = useState({ name:'', date:'', duration:'2 hours', department:'Engineering' });

  const addExam = () => {
    if(newExam.name && newExam.date) {
      setExams([...exams, { ...newExam, id: exams.length + 1, participants:0, status:'Scheduled' }]);
      setNewExam({ name:'', date:'', duration:'2 hours', department:'Engineering' });
      setShowAddExam(false);
      alert('Exam scheduled successfully!');
    }
  };

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <div><h1 className="text-2xl font-bold text-white mb-1">?? Exam Portal</h1><p className="text-gray-400 text-sm">Total Exams Taken: 156 | Average Score: 78% | Pass Rate: 85%</p></div>
        <button onClick={()=>setShowAddExam(true)} className="bg-green-600 px-4 py-2 rounded-lg text-sm flex items-center"><Plus className="w-4 h-4 mr-2"/>Schedule Exam</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="glass-card p-4 text-center"><GraduationCap className="w-6 h-6 text-purple-400 mx-auto mb-2"/><div className="text-2xl text-white font-bold">{exams.length}</div><div className="text-xs text-gray-400">Upcoming Exams</div></div>
        <div className="glass-card p-4 text-center"><CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2"/><div className="text-2xl text-white font-bold">156</div><div className="text-xs text-gray-400">Completed Exams</div></div>
        <div className="glass-card p-4 text-center"><Users className="w-6 h-6 text-blue-400 mx-auto mb-2"/><div className="text-2xl text-white font-bold">892</div><div className="text-xs text-gray-400">Total Participants</div></div>
        <div className="glass-card p-4 text-center"><FileText className="w-6 h-6 text-yellow-400 mx-auto mb-2"/><div className="text-2xl text-white font-bold">85%</div><div className="text-xs text-gray-400">Pass Rate</div></div>
      </div>

      <div className="glass-card p-5"><h2 className="text-white font-semibold mb-4">Upcoming Examinations</h2>
        {exams.map(e=>(<div key={e.id} className="p-3 bg-white/5 rounded-lg mb-3"><div className="flex justify-between"><h3 className="text-white font-medium">{e.name}</h3><span className="text-xs text-green-400">{e.status}</span></div><p className="text-xs text-gray-400">{e.department}</p><div className="flex justify-between mt-2 text-xs"><span><Calendar className="w-3 h-3 inline mr-1"/>{e.date}</span><span><Clock className="w-3 h-3 inline mr-1"/>{e.duration}</span><span><Users className="w-3 h-3 inline mr-1"/>{e.participants} enrolled</span></div></div>))}
      </div>

      {showAddExam && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={()=>setShowAddExam(false)}>
          <div className="glass-card p-6 max-w-md w-full" onClick={e=>e.stopPropagation()}>
            <h2 className="text-xl font-bold text-white mb-4">Schedule New Exam</h2>
            <div className="space-y-3">
              <input type="text" placeholder="Exam Name" value={newExam.name} onChange={e=>setNewExam({...newExam, name:e.target.value})} className="w-full bg-white/10 rounded-lg px-4 py-2 text-white"/>
              <input type="date" value={newExam.date} onChange={e=>setNewExam({...newExam, date:e.target.value})} className="w-full bg-white/10 rounded-lg px-4 py-2 text-white"/>
              <select value={newExam.duration} onChange={e=>setNewExam({...newExam, duration:e.target.value})} className="w-full bg-white/10 rounded-lg px-4 py-2 text-white"><option>1 hour</option><option>2 hours</option><option>3 hours</option></select>
              <select value={newExam.department} onChange={e=>setNewExam({...newExam, department:e.target.value})} className="w-full bg-white/10 rounded-lg px-4 py-2 text-white"><option>Engineering</option><option>Data Science</option><option>HR</option><option>Marketing</option></select>
              <div className="flex gap-3"><button onClick={addExam} className="flex-1 bg-green-600 py-2 rounded-lg">Schedule Exam</button><button onClick={()=>setShowAddExam(false)} className="flex-1 bg-red-600/20 text-red-400 py-2 rounded-lg">Cancel</button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
Exams.getLayout = (page) => <Layout>{page}</Layout>;
