import Layout from '../components/Layout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Wallet, TrendingUp, Users } from 'lucide-react';

export default function Payroll() {
  const data = [{ month: 'Jan', amount: 18.5, bonus: 1.2 }, { month: 'Feb', amount: 18.5, bonus: 1.5 }, { month: 'Mar', amount: 19.2, bonus: 2.0 }, { month: 'Apr', amount: 19.8, bonus: 1.8 }, { month: 'May', amount: 20.5, bonus: 2.2 }, { month: 'Jun', amount: 21.2, bonus: 2.5 }];
  return (<div><h1 className="text-2xl font-bold text-white mb-1">?? Payroll Management</h1><p className="text-gray-400 text-sm mb-4">Company started Jan 2025 | Total YTD: ?1.17Cr</p>
  <div className="grid grid-cols-4 gap-4 mb-6"><div className="glass-card p-4 text-center"><Wallet className="w-6 h-6 text-purple-400 mx-auto mb-2"/><div className="text-2xl text-white font-bold">?1.17Cr</div><div className="text-xs text-gray-400">Total Payroll</div></div>
  <div className="glass-card p-4 text-center"><TrendingUp className="w-6 h-6 text-green-400 mx-auto mb-2"/><div className="text-2xl text-white font-bold">?39,000</div><div className="text-xs text-gray-400">Avg Salary</div></div>
  <div className="glass-card p-4 text-center"><Users className="w-6 h-6 text-blue-400 mx-auto mb-2"/><div className="text-2xl text-white font-bold">50</div><div className="text-xs text-gray-400">Employees</div></div>
  <div className="glass-card p-4 text-center"><div className="text-2xl text-white font-bold">35</div><div className="text-xs text-gray-400">Freshers</div></div></div>
  <div className="glass-card p-5"><h2 className="text-white mb-4">Monthly Payroll Trend</h2><ResponsiveContainer width="100%" height={300}><BarChart data={data}><CartesianGrid stroke="#374151"/><XAxis dataKey="month" stroke="#9CA3AF"/><YAxis stroke="#9CA3AF"/><Tooltip/><Legend/><Bar dataKey="amount" fill="#8B5CF6" name="Salary (Lakhs)"/><Bar dataKey="bonus" fill="#10B981" name="Bonus (Lakhs)"/></BarChart></ResponsiveContainer></div></div>);}
Payroll.getLayout = (page) => <Layout>{page}</Layout>;
