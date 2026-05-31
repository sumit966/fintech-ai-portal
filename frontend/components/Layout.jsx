import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Cpu, Microchip, Rocket, Database, GraduationCap,
  Users, Wallet, Calendar, Briefcase, Settings, Bot, Activity,
  Shield, Zap, Menu, X, Bell, Search, HardDrive, FileCode,
  Server, Cloud, Box, Video, BookOpen, CheckSquare, Clock
} from 'lucide-react';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Virtual Machines', href: '/virtual-machines', icon: Server },
    { name: 'GPU Monitoring', href: '/gpu-monitoring', icon: Cpu },
    { name: 'AI Models', href: '/ai-models', icon: Microchip },
    { name: 'Projects', href: '/projects', icon: Rocket },
    { name: 'Employees', href: '/employees', icon: Users },
    { name: 'Deployments', href: '/deployments', icon: Cloud },
    { name: 'Resources', href: '/resources', icon: Database },
    { name: 'Training Jobs', href: '/training-jobs', icon: Activity },
    { name: 'Datasets', href: '/datasets', icon: FileCode },
    { name: 'Payroll', href: '/payroll', icon: Wallet },
    { name: 'Exams', href: '/exams', icon: GraduationCap },
    { name: 'Interviews', href: '/interviews', icon: Briefcase },
    { name: 'HRMS', href: '/hrms', icon: Users },
    { name: 'AI Assistant', href: '/ai-assistant', icon: Bot },
    { name: 'Attendance', href: '/attendance', icon: Calendar },
    { name: 'Portal', href: '/portal', icon: Box },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -280 }}
        animate={{ x: sidebarOpen ? 0 : -280 }}
        className="fixed top-0 left-0 z-50 h-screen w-72 bg-white/10 backdrop-blur-xl border-r border-white/20 overflow-y-auto"
      >
        <div className="p-6 border-b border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AI Portal</h1>
                <p className="text-xs text-gray-300">Enterprise Suite</p>
              </div>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-white/10 transition-all duration-300 group"
              >
                <item.icon className="w-4 h-4 text-gray-400 group-hover:text-purple-400" />
                <span className="text-sm text-gray-300 group-hover:text-white">{item.name}</span>
              </motion.div>
            </Link>
          ))}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className={`${sidebarOpen ? 'lg:ml-72' : 'ml-0'} transition-all duration-300`}>
        <div className="sticky top-0 z-40 bg-white/5 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center justify-between px-6 py-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-white/10">
              <Menu className="w-5 h-5 text-white" />
            </button>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-sm font-bold text-white">AD</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
