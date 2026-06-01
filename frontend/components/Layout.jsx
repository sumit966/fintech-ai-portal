import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  LayoutDashboard, Cpu, Rocket, Users, Wallet, Calendar, Briefcase, Bot, Settings, 
  Server, Activity, Menu, X, Bell, Search, LogOut, DollarSign, GraduationCap, 
  Database, TrendingUp, Box, PieChart, Clock, CheckCircle 
} from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Virtual Machines', href: '/virtual-machines', icon: Server },
  { name: 'GPU Monitoring', href: '/gpu-monitoring', icon: Cpu },
  { name: 'Projects', href: '/projects', icon: Rocket },
  { name: 'Employees', href: '/employees', icon: Users },
  { name: 'Payroll', href: '/payroll', icon: Wallet },
  { name: 'Attendance', href: '/attendance', icon: Calendar },
  { name: 'Expenses', href: '/expenses', icon: DollarSign },
  { name: 'Exams', href: '/exams', icon: GraduationCap },
  { name: 'Interviews', href: '/interviews', icon: Briefcase },
  { name: 'HRMS', href: '/hrms', icon: Database },
  { name: 'Training Jobs', href: '/training-jobs', icon: TrendingUp },
  { name: 'AI Assistant', href: '/ai-assistant', icon: Bot },
  { name: 'Portal', href: '/portal', icon: Box },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Layout({ children }) {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <div className={`fixed left-0 top-0 h-full bg-black/60 backdrop-blur-xl border-r border-white/20 transition-all duration-300 z-50 overflow-y-auto ${open ? 'w-64' : 'w-20'}`}>
        <div className="p-4 border-b border-white/20 flex justify-between items-center">
          {open && <h1 className="text-xl font-bold text-white">?? AI PORTAL</h1>}
          <button onClick={() => setOpen(!open)} className="text-white p-1 hover:bg-white/10 rounded">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        <div className="p-2">
          {menuItems.map((item) => {
            const isActive = router.pathname === item.href;
            return (
              <Link key={item.name} href={item.href}>
                <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg cursor-pointer mb-1 sidebar-item ${isActive ? 'bg-purple-500/30 border border-purple-500/50' : 'hover:bg-white/10'}`}>
                  <item.icon className={`w-4 h-4 ${isActive ? 'text-purple-400' : 'text-gray-400'}`} />
                  {open && <span className={`text-sm ${isActive ? 'text-white' : 'text-gray-300'}`}>{item.name}</span>}
                </div>
              </Link>
            );
          })}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/20">
          <div className="flex items-center space-x-2 px-3 py-2 rounded-lg cursor-pointer hover:bg-red-500/20">
            <LogOut className="w-4 h-4 text-red-400" />
            {open && <span className="text-sm text-red-400">Logout</span>}
          </div>
        </div>
      </div>
      <div className={`transition-all duration-300 ${open ? 'ml-64' : 'ml-20'}`}>
        <div className="sticky top-0 z-40 bg-black/30 backdrop-blur-xl border-b border-white/10 px-4 py-3 flex justify-between items-center">
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input type="text" placeholder="Search employees, projects, documents..." className="w-full bg-white/10 rounded-lg pl-9 pr-4 py-1.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500" />
          </div>
          <div className="flex items-center space-x-3">
            <button className="relative">
              <Bell className="w-4 h-4 text-gray-400" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>
            <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">AD</span>
            </div>
          </div>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
