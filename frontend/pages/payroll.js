import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { DollarSign, TrendingUp, Download, Search, FileText } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import API_URL from '../utils/api';

export default function Payroll() {
  const [payroll, setPayroll] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [selectedEmp, setSelectedEmp] = useState('all');
  const [summary, setSummary] = useState({ total: 0, avg: 0, bonus: 0 });

  useEffect(() => {
    Promise.all([fetch(`${API_URL}/payroll`).then(r => r.json()), fetch(`${API_URL}/employees`).then(r => r.json())])
      .then(([payData, empData]) => { setPayroll(payData); setEmployees(empData); calculateSummary(payData); })
      .catch(err => console.error(err));
  }, []);

  const calculateSummary = (data) => {
    const total = data.reduce((s, p) => s + p.netSalary, 0);
    setSummary({ total: total / 100000, avg: (total / data.length) / 1000, bonus: data.reduce((s, p) => s + p.bonus, 0) / 100000 });
  };

  const filteredPayroll = selectedEmp === 'all' ? payroll : payroll.filter(p => p.employeeId === parseInt(selectedEmp));
  const monthlyData = [];
  const monthMap = {};
  payroll.forEach(p => { const key = `${p.month}/${p.year}`; monthMap[key] = (monthMap[key] || 0) + p.netSalary; });
  Object.entries(monthMap).forEach(([month, amount]) => monthlyData.push({ month, amount: amount / 100000 }));

  return (
    <Layout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6"><div><h1 className="text-2xl font-bold text-white">Payroll Management</h1><p className="text-gray-400 mt-1">March 2025 - April 2026</p></div><button className="px-4 py-2 bg-blue-600 rounded-lg text-white flex items-center gap-2"><Download size={16} /> Export</button></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-4 border border-blue-500/30"><p className="text-gray-400 text-sm">Total Payroll</p><p className="text-2xl font-bold text-white">₹{summary.total.toFixed(1)}L</p></div>
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-4 border border-green-500/30"><p className="text-gray-400 text-sm">Average Salary</p><p className="text-2xl font-bold text-white">₹{summary.avg.toFixed(0)}K</p></div>
          <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl p-4 border border-orange-500/30"><p className="text-gray-400 text-sm">Total Bonuses</p><p className="text-2xl font-bold text-white">₹{summary.bonus.toFixed(1)}L</p></div>
        </div>
        
        <div className="bg-gray-800/50 rounded-xl p-5 mb-6"><h3 className="text-white font-semibold mb-4">Monthly Payroll Trend</h3><ResponsiveContainer width="100%" height={250}><LineChart data={monthlyData}><CartesianGrid strokeDasharray="3 3" stroke="#374151" /><XAxis dataKey="month" stroke="#9ca3af" /><YAxis stroke="#9ca3af" /><Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} /><Line type="monotone" dataKey="amount" stroke="#3b82f6" strokeWidth={2} /></LineChart></ResponsiveContainer></div>
        
        <div className="bg-gray-800/50 rounded-xl p-5">
          <div className="flex gap-4 mb-4"><select value={selectedEmp} onChange={(e) => setSelectedEmp(e.target.value)} className="px-4 py-2 bg-gray-700 rounded-lg text-white"><option value="all">All Employees</option>{employees.map(emp => <option key={emp.id} value={emp.id}>{emp.name}</option>)}</select></div>
          <div className="overflow-x-auto"><table className="w-full"><thead className="border-b border-gray-700"><tr className="text-left text-gray-400"><th className="pb-3">Employee</th><th className="pb-3">Month/Year</th><th className="pb-3">Basic</th><th className="pb-3">Bonus</th><th className="pb-3">Tax</th><th className="pb-3">Net Salary</th><th className="pb-3">Payslip</th></tr></thead><tbody>{filteredPayroll.slice(0, 50).map(p => (<tr key={p.id} className="border-b border-gray-700/50"><td className="py-3 text-white">{p.employeeName}</td><td className="py-3 text-gray-400">{p.month}/{p.year}</td><td className="py-3 text-gray-300">₹{p.basicSalary.toLocaleString()}</td><td className="py-3 text-green-400">₹{p.bonus.toLocaleString()}</td><td className="py-3 text-red-400">₹{p.taxDeduction.toLocaleString()}</td><td className="py-3 text-white font-semibold">₹{p.netSalary.toLocaleString()}</td><td className="py-3"><button className="text-blue-400 hover:text-blue-300"><FileText size={16} /></button></td></tr>))}</tbody></table></div>
        </div>
      </div>
    </Layout>
  );
}
