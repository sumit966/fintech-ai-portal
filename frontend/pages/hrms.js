import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Calendar, Clock, UserCheck, UserX, Briefcase, Bell, Plus, CheckCircle, XCircle, TrendingUp } from 'lucide-react';

export default function HRMS() {
  const [attendance, setAttendance] = useState([]);
  const [timetable, setTimetable] = useState([]);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    // Generate attendance for last 30 days
    const att = [];
    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const isPresent = Math.random() > 0.2;
      att.push({
        date: date.toISOString().split('T')[0],
        status: isPresent ? 'Present' : (Math.random() > 0.5 ? 'Leave' : 'Absent'),
        checkIn: isPresent ? `09:${Math.floor(Math.random() * 30)}` : '-',
        checkOut: isPresent ? `18:${Math.floor(Math.random() * 30)}` : '-',
        hoursWorked: isPresent ? Math.floor(Math.random() * 3) + 7 : 0
      });
    }
    setAttendance(att);

    setTimetable([
      { day: 'Monday', tasks: ['10:00 Standup', '11:00 Development', '14:00 Code Review', '16:00 Client Call'] },
      { day: 'Tuesday', tasks: ['10:00 Sprint Planning', '12:00 UI/UX Review', '15:00 Testing', '17:00 Documentation'] },
      { day: 'Wednesday', tasks: ['10:00 Tech Talk', '11:30 Pair Programming', '14:00 Database Optimization', '16:30 Retrospective'] },
      { day: 'Thursday', tasks: ['09:30 Security Audit', '11:00 API Integration', '14:00 DevOps Meeting', '16:00 Deployment'] },
      { day: 'Friday', tasks: ['10:00 Demo Day', '12:00 Knowledge Sharing', '14:00 Code Freeze', '16:00 Weekly Report'] }
    ]);

    setLeaveRequests([
      { id: 1, employee: 'Priya Sharma', type: 'Sick Leave', from: '2025-04-20', to: '2025-04-22', status: 'Approved' },
      { id: 2, employee: 'Rahul Verma', type: 'Casual Leave', from: '2025-04-25', to: '2025-04-25', status: 'Pending' },
    ]);
  }, []);

  const todaysEntry = attendance.find(a => a.date === selectedDate);
  const presentDays = attendance.filter(a => a.status === 'Present').length;
  const totalHours = attendance.reduce((s, a) => s + a.hoursWorked, 0);

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div><h1 className="text-2xl font-bold text-white">HRMS Portal</h1><p className="text-gray-400">Attendance, Timetable, and Leave Management</p></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-4 border border-blue-500/30"><p className="text-gray-400">Present Days (Month)</p><p className="text-2xl font-bold text-white">{presentDays}</p></div>
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-4 border border-green-500/30"><p className="text-gray-400">Pending Leaves</p><p className="text-2xl font-bold text-white">{leaveRequests.filter(l => l.status === 'Pending').length}</p></div>
          <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl p-4 border border-orange-500/30"><p className="text-gray-400">Total Work Hours</p><p className="text-2xl font-bold text-white">{totalHours} hrs</p></div>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
          <h3 className="text-white font-semibold mb-3">📅 Daily Attendance</h3>
          <div className="flex flex-wrap gap-4 items-center mb-4">
            <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="px-3 py-1.5 bg-gray-700 rounded-lg text-white" />
            {todaysEntry ? (
              <div className="flex gap-3 text-sm flex-wrap">
                <span className={`px-2 py-1 rounded ${todaysEntry.status === 'Present' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>{todaysEntry.status}</span>
                <span>In: {todaysEntry.checkIn}</span><span>Out: {todaysEntry.checkOut}</span><span>Hours: {todaysEntry.hoursWorked}</span>
              </div>
            ) : <p className="text-gray-400">No data</p>}
          </div>
          <button className="px-4 py-1.5 bg-blue-600 rounded-lg text-white text-sm">Mark Attendance</button>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
          <h3 className="text-white font-semibold mb-3">📋 Weekly Timetable</h3>
          <div className="space-y-3">
            {timetable.map(day => (
              <div key={day.day} className="border-b border-gray-700 pb-2">
                <p className="text-white font-medium">{day.day}</p>
                <ul className="list-disc list-inside text-gray-400 text-sm ml-4">{day.tasks.map((t,i)=><li key={i}>{t}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
          <h3 className="text-white font-semibold mb-3">📝 Leave Requests</h3>
          {leaveRequests.map(req => (
            <div key={req.id} className="flex justify-between items-center p-2 bg-black/30 rounded-lg mb-2">
              <div><p className="text-white font-medium">{req.employee}</p><p className="text-xs text-gray-400">{req.type} • {req.from} → {req.to}</p></div>
              <span className={`px-2 py-0.5 rounded-full text-xs ${req.status === 'Approved' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{req.status}</span>
            </div>
          ))}
          <button className="mt-2 flex items-center gap-1 text-blue-400"><Plus size={14} /> New Request</button>
        </div>
      </div>
    </Layout>
  );
}
