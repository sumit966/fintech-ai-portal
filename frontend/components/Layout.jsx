import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { LayoutDashboard, Cpu, Microchip, Rocket, Database, GraduationCap, Users, Wallet, Calendar, Briefcase, Bot, Activity, Settings, Shield, Zap, Menu, LogOut, Server, FileCode, Box, TrendingUp, Bell, Search } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'GPU Monitoring', href: '/gpu-monitoring', icon: Cpu },
  { name: 'AI Models', href: '/ai-models', icon: Microchip },
  { name: 'Virtual Machines', href: '/virtual-machines', icon: Server },
  { name: 'Deployments', href: '/deployments', icon: Rocket },
  { name: 'Resources', href: '/resources', icon: Database },
  { name: 'Training Jobs', href: '/training-jobs', icon: Activity },
  { name: 'Datasets', href: '/datasets', icon: FileCode },
  { name: 'Projects', href: '/projects', icon: Box },
  { name: 'Employees', href: '/employees', icon: Users },
  { name: 'HRMS', href: '/hrms', icon: TrendingUp },
  { name: 'Payroll', href: '/payroll', icon: Wallet },
  { name: 'Attendance', href: '/attendance', icon: Calendar },
  { name: 'Exams', href: '/exams', icon: GraduationCap },
  { name: 'Interviews', href: '/interviews', icon: Briefcase },
  { name: 'AI Assistant', href: '/ai-assistant', icon: Bot },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <motion.aside initial={{ x: -280 }} animate={{ x: sidebarOpen ? 0 : -280 }} className="fixed top-0 left-0 z-50 h-screen w-72 bg-white/10 backdrop-blur-xl border-r border-white/20 overflow-y-auto">
        <div className="p-6 border-b border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div><h1 className="text-xl font-bold gradient-text">AI Portal</h1><p className="text-xs text-gray-400">Enterprise Suite</p></div>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden"><Menu className="w-5 h-5 text-white" /></button>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = router.pathname === item.href;
            return (
              <Link key={item.name} href={item.href}>
                <motion.div whileHover={{ x: 5 }} className={`flex items-center space-x-3 px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-purple-500/30' : 'hover:bg-white/10'}`}>
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-purple-400' : 'text-gray-400'}`} />
                  <span className={`text-sm ${isActive ? 'text-white' : 'text-gray-300'}`}>{item.name}</span>
                  {isActive && <div className="ml-auto w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>}
                </motion.div>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/20 mt-auto">
          <button onClick={logout} className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl hover:bg-red-500/20 transition-all duration-300 text-red-400">
            <LogOut className="w-5 h-5" /><span className="text-sm">Logout</span>
          </button>
        </div>
      </motion.aside>

      <main className={`${sidebarOpen ? 'lg:ml-72' : 'ml-0'} transition-all duration-300`}>
        <div className="sticky top-0 z-40 bg-white/5 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center justify-between px-6 py-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-white/10"><Menu className="w-5 h-5 text-white" /></button>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-white/10 rounded-lg px-3 py-2"><Search className="w-4 h-4 text-gray-400" /><input type="text" placeholder="Search..." className="bg-transparent ml-2 text-sm text-white placeholder-gray-400 focus:outline-none" /></div>
              <button className="relative p-2 rounded-lg hover:bg-white/10"><Bell className="w-5 h-5 text-gray-400" /><span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span></button>
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition"><span className="text-sm font-bold text-white">AD</span></div>
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={router.pathname} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="p-6">
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
