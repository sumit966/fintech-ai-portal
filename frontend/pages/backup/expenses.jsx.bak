import Layout from '../components/Layout';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';
import { DollarSign, TrendingDown, Wallet, CreditCard, Receipt, TrendingUp } from 'lucide-react';

export default function Expenses() {
  const categoryData = [
    { name: 'Salary', amount: 85, color: '#8B5CF6', spent: '?2.18 Cr' },
    { name: 'Infrastructure', amount: 8, color: '#3B82F6', spent: '?20.5 Lakhs' },
    { name: 'Marketing', amount: 4, color: '#10B981', spent: '?10.2 Lakhs' },
    { name: 'Software Licenses', amount: 2, color: '#F59E0B', spent: '?5.1 Lakhs' },
    { name: 'Travel', amount: 1, color: '#EF4444', spent: '?2.5 Lakhs' },
  ];
  const monthlyData = [
    { month: 'Jan', amount: 18.5, budget: 25, variance: 6.5 },
    { month: 'Feb', amount: 19.2, budget: 25, variance: 5.8 },
    { month: 'Mar', amount: 20.1, budget: 25, variance: 4.9 },
    { month: 'Apr', amount: 19.8, budget: 25, variance: 5.2 },
    { month: 'May', amount: 20.5, budget: 25, variance: 4.5 },
    { month: 'Jun', amount: 21.2, budget: 25, variance: 3.8 },
    { month: 'Jul', amount: 22.5, budget: 25, variance: 2.5 },
    { month: 'Aug', amount: 21.8, budget: 25, variance: 3.2 },
    { month: 'Sep', amount: 23.2, budget: 25, variance: 1.8 },
    { month: 'Oct', amount: 22.5, budget: 25, variance: 2.5 },
    { month: 'Nov', amount: 23.8, budget: 25, variance: 1.2 },
    { month: 'Dec', amount: 24.2, budget: 25, variance: 0.8 },
  ];
  const totalYTD = 257.5;
  const annualBudget = 300;
  const remaining = annualBudget - totalYTD;
  const currentMonth = 24.2;
  
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-white mb-1">?? Expense Management</h1>
        <p className="text-gray-400 text-sm">Annual Budget: ?{annualBudget} Lakhs | Spent YTD: ?{totalYTD} Lakhs | Remaining: ?{remaining} Lakhs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="glass-card p-4 text-center"><DollarSign className="w-6 h-6 text-red-400 mx-auto mb-2"/><div className="text-2xl text-white font-bold">?{currentMonth}L</div><div className="text-xs text-gray-400">This Month</div><div className="text-xs text-green-400">? 15% from last month</div></div>
        <div className="glass-card p-4 text-center"><Wallet className="w-6 h-6 text-green-400 mx-auto mb-2"/><div className="text-2xl text-white font-bold">?{remaining}L</div><div className="text-xs text-gray-400">Budget Remaining</div><div className="text-xs text-green-400">{Math.round((remaining/annualBudget)*100)}% left</div></div>
        <div className="glass-card p-4 text-center"><TrendingUp className="w-6 h-6 text-blue-400 mx-auto mb-2"/><div className="text-2xl text-white font-bold">?{totalYTD}L</div><div className="text-xs text-gray-400">YTD Expenses</div><div className="text-xs text-blue-400">{Math.round((totalYTD/annualBudget)*100)}% of budget</div></div>
        <div className="glass-card p-4 text-center"><Receipt className="w-6 h-6 text-purple-400 mx-auto mb-2"/><div className="text-2xl text-white font-bold">?25L</div><div className="text-xs text-gray-400">Monthly Budget</div><div className="text-xs text-gray-400">Fixed allocation</div></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="glass-card p-5">
          <h2 className="text-white font-semibold mb-4">Expense Breakdown by Category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={categoryData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="amount" label>
                {categoryData.map((entry, idx) => (<Cell key={idx} fill={entry.color} />))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
            {categoryData.map(cat => (<div key={cat.name} className="flex justify-between"><span className="text-gray-400">{cat.name}</span><span className="text-white">{cat.spent}</span></div>))}
          </div>
        </div>

        <div className="glass-card p-5">
          <h2 className="text-white font-semibold mb-4">Monthly vs Budget Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
              <Legend />
              <Line type="monotone" dataKey="amount" stroke="#EF4444" strokeWidth={2} name="Actual Expenses (Lakhs)" />
              <Line type="monotone" dataKey="budget" stroke="#10B981" strokeWidth={2} strokeDasharray="5 5" name="Budget (Lakhs)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass-card p-5">
        <h2 className="text-white font-semibold mb-4">Quarterly Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white/5 rounded-lg"><h3 className="text-white font-medium mb-2">Q1 2025 (Jan-Mar)</h3><div className="space-y-2 text-sm"><div className="flex justify-between"><span className="text-gray-400">Total Spend</span><span className="text-white">?57.8L</span></div><div className="flex justify-between"><span className="text-gray-400">Vs Budget</span><span className="text-green-400">?2.8L under</span></div><div className="flex justify-between"><span className="text-gray-400">Top Category</span><span className="text-white">Salary</span></div></div></div>
          <div className="p-4 bg-white/5 rounded-lg"><h3 className="text-white font-medium mb-2">Q2 2025 (Apr-Jun)</h3><div className="space-y-2 text-sm"><div className="flex justify-between"><span className="text-gray-400">Total Spend</span><span className="text-white">?62.3L</span></div><div className="flex justify-between"><span className="text-gray-400">Vs Budget</span><span className="text-green-400">?2.7L under</span></div><div className="flex justify-between"><span className="text-gray-400">Top Category</span><span className="text-white">Salary</span></div></div></div>
          <div className="p-4 bg-white/5 rounded-lg"><h3 className="text-white font-medium mb-2">Q3 2025 (Jul-Sep)</h3><div className="space-y-2 text-sm"><div className="flex justify-between"><span className="text-gray-400">Total Spend</span><span className="text-white">?67.5L</span></div><div className="flex justify-between"><span className="text-gray-400">Vs Budget</span><span className="text-red-400">?2.5L over</span></div><div className="flex justify-between"><span className="text-gray-400">Top Category</span><span className="text-white">Infrastructure</span></div></div></div>
        </div>
      </div>
    </div>
  );
}
Expenses.getLayout = (page) => <Layout>{page}</Layout>;
