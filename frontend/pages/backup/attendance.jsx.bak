import { useState } from 'react';
import Layout from '../components/Layout';
import { Calendar, Clock, CheckCircle, Users, UserPlus, Search, Edit, Save } from 'lucide-react';

export default function Attendance() {
  const [attendance, setAttendance] = useState([
    { id:1, name:'Sumit Raj', date:'2025-12-18', status:'Present', checkIn:'09:00 AM', checkOut:'06:00 PM', hours:9 },
    { id:2, name:'Rajesh Kumar', date:'2025-12-18', status:'Present', checkIn:'09:15 AM', checkOut:'06:30 PM', hours:9.25 },
    { id:3, name:'Priya Sharma', date:'2025-12-18', status:'Present', checkIn:'09:00 AM', checkOut:'05:30 PM', hours:8.5 },
    { id:4, name:'Amit Patel', date:'2025-12-18', status:'Late', checkIn:'10:30 AM', checkOut:'07:00 PM', hours:8.5 },
    { id:5, name:'Sneha Reddy', date:'2025-12-18', status:'WFH', checkIn:'09:00 AM', checkOut:'05:00 PM', hours:8 },
  ]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showMarkAttendance, setShowMarkAttendance] = useState(false);
  const [newAttendance, setNewAttendance] = useState({ name:'', status:'Present', checkIn:'09:00 AM', checkOut:'06:00 PM' });

  const markAttendance = () => {
    if(newAttendance.name) {
      setAttendance([...attendance, { ...newAttendance, id: attendance.length + 1, date: selectedDate, hours: 9 }]);
      setNewAttendance({ name:'', status:'Present', checkIn:'09:00 AM', checkOut:'06:00 PM' });
      setShowMarkAttendance(false);
      alert('Attendance marked successfully!');
    }
  };

  const presentCount = attendance.filter(a => a.status === 'Present').length;
  const lateCount = attendance.filter(a => a.status === 'Late').length;
  const wfhCount = attendance.filter(a => a.status === 'WFH').length;
  const totalEmployees = 50;

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <div><h1 className="text-2xl font-bold text-white mb-1">?? Attendance Management</h1><p className="text-gray-400 text-sm">Biometric System | Real-time Tracking</p></div>
        <button onClick={()=>setShowMarkAttendance(true)} className="bg-green-600 px-4 py-2 rounded-lg text-sm flex items-center"><UserPlus className="w-4 h-4 mr-2"/>Mark Attendance</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="glass-card p-4 text-center"><Calendar className="w-6 h-6 text-blue-400 mx-auto mb-2"/><div className="text-2xl text-white font-bold">{Math.round((presentCount/totalEmployees)*100)}%</div><div className="text-xs text-gray-400">Attendance Rate</div><div className="text-xs text-green-400 mt-1">? 2% from last month</div></div>
        <div className="glass-card p-4 text-center"><Clock className="w-6 h-6 text-green-400 mx-auto mb-2"/><div className="text-2xl text-white font-bold">8.5 hrs</div><div className="text-xs text-gray-400">Avg Work Hours</div><div className="text-xs text-gray-400">Daily Average</div></div>
        <div className="glass-card p-4 text-center"><CheckCircle className="w-6 h-6 text-purple-400 mx-auto mb-2"/><div className="text-2xl text-white font-bold">98%</div><div className="text-xs text-gray-400">Punctuality Rate</div><div className="text-xs text-green-400">On-time arrivals</div></div>
        <div className="glass-card p-4 text-center"><Users className="w-6 h-6 text-yellow-400 mx-auto mb-2"/><div className="text-2xl text-white font-bold">{presentCount}</div><div className="text-xs text-gray-400">Present Today</div><div className="text-xs text-gray-400">Out of {totalEmployees}</div></div>
        <div className="glass-card p-4 text-center"><input type="date" value={selectedDate} onChange={e=>setSelectedDate(e.target.value)} className="bg-white/10 rounded-lg px-3 py-2 text-white text-sm w-full"/></div>
      </div>

      <div className="glass-card p-5">
        <h2 className="text-white font-semibold mb-4">Today's Attendance - {selectedDate}</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/10"><tr><th className="p-3 text-left text-white">Employee</th><th className="p-3 text-left text-white">Status</th><th className="p-3 text-left text-white">Check In</th><th className="p-3 text-left text-white">Check Out</th><th className="p-3 text-left text-white">Hours</th></tr></thead>
            <tbody>{attendance.map(a=>(<tr key={a.id} className="border-b border-white/10"><td className="p-3 text-white">{a.name}</td><td className="p-3"><span className={`px-2 py-1 rounded text-xs ${a.status==='Present'?'bg-green-500/20 text-green-400':a.status==='Late'?'bg-yellow-500/20 text-yellow-400':'bg-blue-500/20 text-blue-400'}`}>{a.status}</span></td><td className="p-3 text-gray-300">{a.checkIn}</td><td className="p-3 text-gray-300">{a.checkOut}</td><td className="p-3 text-gray-300">{a.hours}h</td></tr>))}</tbody>
          </table>
        </div>
      </div>

      {showMarkAttendance && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={()=>setShowMarkAttendance(false)}>
          <div className="glass-card p-6 max-w-md w-full" onClick={e=>e.stopPropagation()}>
            <h2 className="text-xl font-bold text-white mb-4">Mark Attendance for {selectedDate}</h2>
            <div className="space-y-3">
              <input type="text" placeholder="Employee Name" value={newAttendance.name} onChange={e=>setNewAttendance({...newAttendance, name:e.target.value})} className="w-full bg-white/10 rounded-lg px-4 py-2 text-white"/>
              <select value={newAttendance.status} onChange={e=>setNewAttendance({...newAttendance, status:e.target.value})} className="w-full bg-white/10 rounded-lg px-4 py-2 text-white"><option>Present</option><option>Late</option><option>WFH</option><option>Absent</option></select>
              <div className="flex gap-2"><input type="time" value={newAttendance.checkIn} onChange={e=>setNewAttendance({...newAttendance, checkIn:e.target.value})} className="flex-1 bg-white/10 rounded-lg px-4 py-2 text-white"/><input type="time" value={newAttendance.checkOut} onChange={e=>setNewAttendance({...newAttendance, checkOut:e.target.value})} className="flex-1 bg-white/10 rounded-lg px-4 py-2 text-white"/></div>
              <div className="flex gap-3"><button onClick={markAttendance} className="flex-1 bg-green-600 py-2 rounded-lg">Mark Attendance</button><button onClick={()=>setShowMarkAttendance(false)} className="flex-1 bg-red-600/20 text-red-400 py-2 rounded-lg">Cancel</button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
Attendance.getLayout = (page) => <Layout>{page}</Layout>;
