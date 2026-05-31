import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Cpu, Microchip, Rocket, Database, GraduationCap,
  Users, Wallet, Calendar, Briefcase, Settings, Bot, Activity,
  Shield, Zap, Menu, X, Bell, Search, Sun, Moon
} from 'lucide-react';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'GPU Monitoring', href: '/gpu-monitoring', icon: Cpu },
    { name: 'AI Models', href: '/ai-models', icon: Microchip },
    { name: 'Deployments', href: '/deployments', icon: Rocket },
    { name: 'Training Jobs', href: '/training-jobs', icon: Activity },
    { name: 'HRMS', href: '/hrms', icon: Users },
    { name: 'Payroll', href: '/payroll', icon: Wallet },
    { name: 'AI Assistant', href: '/ai-assistant', icon: Bot },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      {/* Glassmorphism Sidebar */}
      <motion.aside 
        initial={{ x: -280 }}
        animate={{ x: sidebarOpen ? 0 : -280 }}
        className="fixed top-0 left-0 z-50 h-screen w-72 bg-white/10 backdrop-blur-xl border-r border-white/20 shadow-2xl"
      >
        <div className="flex flex-col h-full">
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

          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.div
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                >
                  <item.icon className="w-5 h-5 text-purple-400 group-hover:text-blue-400 transition" />
                  <span className="text-gray-200 group-hover:text-white transition">{item.name}</span>
                </motion.div>
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-white/20">
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-xs text-gray-300">System Status</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">All Systems Operational</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className={`${sidebarOpen ? 'lg:ml-72' : 'ml-0'} transition-all duration-300`}>
        {/* Top Bar */}
        <div className="sticky top-0 z-40 bg-white/5 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center justify-between px-6 py-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-white/10">
              <Menu className="w-5 h-5 text-white" />
            </button>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-white/10 rounded-lg px-3 py-2">
                <Search className="w-4 h-4 text-gray-400" />
                <input type="text" placeholder="Search..." className="bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none ml-2" />
              </div>
              
              <button className="p-2 rounded-lg hover:bg-white/10 relative">
                <Bell className="w-5 h-5 text-white" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg hover:bg-white/10">
                {darkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-white" />}
              </button>

              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
                <span className="text-sm font-bold text-white">AD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
