import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Calendar, Clock, UserCheck, UserX, Fingerprint, Plus, Save, Trash2, Search } from 'lucide-react';

export default function Attendance() {
  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [search, setSearch] = useState('');

  // Load employees from backend (or mock)
  useEffect(() => {
    fetch('http://localhost:5003/api/employees')
      .then(res => res.json())
      .then(data => setEmployees(data))
      .catch(() => {
        // fallback mock
        setEmployees([
          { id: 1, name: 'Priya Sharma', role: 'COO' },
          { id: 2, name: 'Rahul Verma', role: 'HR Manager' },
          { id: 3, name: 'Neha Gupta', role: 'Project Manager' },
          { id: 4, name: 'Amit Patel', role: 'Tech Lead' },
        ]);
      });
  }, []);

  // Load attendance for selected date from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(`attendance_${selectedDate}`);
    if (stored) {
      setAttendance(JSON.parse(stored));
    } else {
      // default all absent
      const defaultAtt = {};
      employees.forEach(emp => { defaultAtt[emp.id] = 'Absent'; });
      setAttendance(defaultAtt);
    }
  }, [selectedDate, employees]);

  const saveAttendance = () => {
    localStorage.setItem(`attendance_${selectedDate}`, JSON.stringify(attendance));
    alert('Attendance saved!');
  };

  const markBiometric = async () => {
    // Simulate biometric check-in/out (current time)
    const now = new Date();
    alert(`Biometric recorded at ${now.toLocaleTimeString()} for today. You can manually set status.`);
  };

  const updateStatus = (empId, status) => {
    setAttendance(prev => ({ ...prev, [empId]: status }));
  };

  const filteredEmployees = employees.filter(emp => emp.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div><h1 className="text-2xl font-bold text-white">Employee Attendance</h1><p className="text-gray-400">Mark daily attendance (biometric + manual)</p></div>
          <button onClick={markBiometric} className="px-4 py-2 bg-blue-600 rounded-lg text-white flex items-center gap-2"><Fingerprint size={16} /> Biometric Check</button>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="px-3 py-2 bg-gray-700 rounded-lg text-white" />
          <button onClick={saveAttendance} className="px-4 py-2 bg-green-600 rounded-lg text-white flex items-center gap-2"><Save size={16} /> Save Attendance</button>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
          <div className="flex justify-between mb-4"><h3 className="text-white font-semibold">Attendance List</h3><div className="relative"><Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} /><input type="text" placeholder="Search employee" value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 pr-3 py-1 bg-gray-700 rounded-lg text-white text-sm" /></div></div>
          <div className="overflow-x-auto">
            <table className="w-full"><thead className="border-b border-gray-700"><tr className="text-left text-gray-400"><th className="pb-2">Employee</th><th className="pb-2">Role</th><th className="pb-2">Status</th><th className="pb-2">Action</th></tr></thead>
            <tbody>
              {filteredEmployees.map(emp => (
                <tr key={emp.id} className="border-b border-gray-700/50">
                  <td className="py-2 text-white">{emp.name}</td>
                  <td className="py-2 text-gray-400">{emp.role}</td>
                  <td className="py-2"><span className={`px-2 py-0.5 rounded-full text-xs ${attendance[emp.id] === 'Present' ? 'bg-green-500/20 text-green-400' : attendance[emp.id] === 'Leave' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}>{attendance[emp.id] || 'Absent'}</span></td>
                  <td className="py-2"><select value={attendance[emp.id] || 'Absent'} onChange={(e) => updateStatus(emp.id, e.target.value)} className="bg-gray-700 rounded px-2 py-1 text-sm"><option value="Present">Present</option><option value="Absent">Absent</option><option value="Leave">Leave</option></select></td>
                </tr>
              ))}
            </tbody></table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
