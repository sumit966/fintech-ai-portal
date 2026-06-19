import { useState } from 'react';
import Layout from '../components/Layout';
import { Users, TrendingUp, Award, Calendar, UserCheck, UserPlus, Eye, Edit, Trash2 } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

export default function Hrms() {
  const [employees, setEmployees] = useState([
    { id:1, name:'Sumit Raj', role:'CEO', dept:'Leadership', email:'sumit@fintechai.com', doj:'2025-01-01', salary:300000, status:'Active' },
    { id:2, name:'Rajesh Kumar', role:'Senior Engineer', dept:'Engineering', email:'rajesh@fintechai.com', doj:'2025-01-15', salary:150000, status:'Active' },
    { id:3, name:'Priya Sharma', role:'HR Manager', dept:'HR', email:'priya@fintechai.com', doj:'2025-02-10', salary:120000, status:'Active' },
    { id:4, name:'Amit Patel', role:'Frontend Dev', dept:'Engineering', email:'amit@fintechai.com', doj:'2025-06-20', salary:45000, status:'Active' },
    { id:5, name:'Sneha Reddy', role:'Product Manager', dept:'Product', email:'sneha@fintechai.com', doj:'2025-03-05', salary:180000, status:'Active' },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newEmployee, setNewEmployee] = useState({ name:'', role:'', dept:'Engineering', email:'', doj:'', salary:25000 });

  const deptData = [
    { name:'Engineering', value:28, color:'#8B5CF6' },
    { name:'Product', value:8, color:'#3B82F6' },
    { name:'HR', value:5, color:'#10B981' },
    { name:'Marketing', value:6, color:'#F59E0B' },
    { name:'Sales', value:3, color:'#EF4444' },
  ];

  const addEmployee = () => {
    if(newEmployee.name && newEmployee.email) {
      setEmployees([...employees, { ...newEmployee, id: employees.length + 1, status:'Active' }]);
      setNewEmployee({ name:'', role:'', dept:'Engineering', email:'', doj:'', salary:25000 });
      setShowAddForm(false);
      alert('Employee added successfully!');
    }
  };

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <div><h1 className="text-2xl font-bold text-white mb-1">?? HRMS Portal</h1><p className="text-gray-400 text-sm">Complete Human Resource Management System</p></div>
        <button onClick={()=>setShowAddForm(true)} className="bg-green-600 px-4 py-2 rounded-lg text-sm flex items-center"><UserPlus className="w-4 h-4 mr-2"/>Add Employee</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
        <div className="glass-card p-3 text-center"><Users className="w-5 h-5 text-blue-400 mx-auto"/><div className="text-xl text-white font-bold">{employees.length}</div><div className="text-xs text-gray-400">Total Employees</div></div>
        <div className="glass-card p-3 text-center"><TrendingUp className="w-5 h-5 text-green-400 mx-auto"/><div className="text-xl text-white font-bold">12%</div><div className="text-xs text-gray-400">Growth Rate</div></div>
        <div className="glass-card p-3 text-center"><Award className="w-5 h-5 text-yellow-400 mx-auto"/><div className="text-xl text-white font-bold">8</div><div className="text-xs text-gray-400">Open Positions</div></div>
        <div className="glass-card p-3 text-center"><Calendar className="w-5 h-5 text-purple-400 mx-auto"/><div className="text-xl text-white font-bold">92%</div><div className="text-xs text-gray-400">Retention Rate</div></div>
        <div className="glass-card p-3 text-center"><UserCheck className="w-5 h-5 text-emerald-400 mx-auto"/><div className="text-xl text-white font-bold">98%</div><div className="text-xs text-gray-400">Satisfaction</div></div>
        <div className="glass-card p-3 text-center"><Eye className="w-5 h-5 text-cyan-400 mx-auto"/><div className="text-xl text-white font-bold">96%</div><div className="text-xs text-gray-400"><a href="/attendance" className="hover:text-purple-400">Attendance Rate</a></div></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="glass-card p-5"><h2 className="text-white font-semibold mb-4">Department Distribution</h2><ResponsiveContainer width="100%" height={250}><PieChart><Pie data={deptData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value" label>{deptData.map((e,i)=><Cell key={i} fill={e.color}/>)}</Pie><Tooltip/></PieChart></ResponsiveContainer></div>
        <div className="glass-card p-5"><h2 className="text-white font-semibold mb-4">Employee List</h2><div className="overflow-y-auto max-h-64 space-y-2">{employees.map(emp=>(<div key={emp.id} className="flex justify-between items-center p-2 bg-white/5 rounded"><div><div className="text-white text-sm">{emp.name}</div><div className="text-xs text-gray-400">{emp.role} ? {emp.dept}</div></div><div className="text-green-400 text-xs">?{emp.salary.toLocaleString()}</div></div>))}</div></div>
      </div>

      {showAddForm && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={()=>setShowAddForm(false)}>
          <div className="glass-card p-6 max-w-md w-full" onClick={e=>e.stopPropagation()}>
            <h2 className="text-xl font-bold text-white mb-4">Add New Employee</h2>
            <div className="space-y-3">
              <input type="text" placeholder="Full Name" value={newEmployee.name} onChange={e=>setNewEmployee({...newEmployee, name:e.target.value})} className="w-full bg-white/10 rounded-lg px-4 py-2 text-white"/>
              <input type="text" placeholder="Role" value={newEmployee.role} onChange={e=>setNewEmployee({...newEmployee, role:e.target.value})} className="w-full bg-white/10 rounded-lg px-4 py-2 text-white"/>
              <select value={newEmployee.dept} onChange={e=>setNewEmployee({...newEmployee, dept:e.target.value})} className="w-full bg-white/10 rounded-lg px-4 py-2 text-white"><option>Engineering</option><option>HR</option><option>Product</option><option>Marketing</option><option>Sales</option></select>
              <input type="email" placeholder="Email" value={newEmployee.email} onChange={e=>setNewEmployee({...newEmployee, email:e.target.value})} className="w-full bg-white/10 rounded-lg px-4 py-2 text-white"/>
              <input type="date" placeholder="Date of Joining" value={newEmployee.doj} onChange={e=>setNewEmployee({...newEmployee, doj:e.target.value})} className="w-full bg-white/10 rounded-lg px-4 py-2 text-white"/>
              <input type="number" placeholder="Salary (?)" value={newEmployee.salary} onChange={e=>setNewEmployee({...newEmployee, salary:parseInt(e.target.value)})} className="w-full bg-white/10 rounded-lg px-4 py-2 text-white"/>
              <div className="flex gap-3"><button onClick={addEmployee} className="flex-1 bg-green-600 py-2 rounded-lg">Add Employee</button><button onClick={()=>setShowAddForm(false)} className="flex-1 bg-red-600/20 text-red-400 py-2 rounded-lg">Cancel</button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
Hrms.getLayout = (page) => <Layout>{page}</Layout>;
