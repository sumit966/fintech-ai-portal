import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  LayoutDashboard, Server, Cpu, Brain, Users, FolderGit2,
  Cloud, Settings, LogOut, Menu, X, ChevronRight,
  Activity, HardDrive, Calendar, FileText, DollarSign, Database,
  Zap, Bot
} from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { name: 'Virtual Machines', icon: Server, path: '/vms' },
  { name: 'GPU Monitoring', icon: Cpu, path: '/gpu' },
  { name: 'AI Models', icon: Brain, path: '/ai-models' },
  { name: 'Projects', icon: FolderGit2, path: '/projects' },
  { name: 'Employees', icon: Users, path: '/employees' },
  { name: 'Deployments', icon: Cloud, path: '/deployments' },
  { name: 'Resources', icon: HardDrive, path: '/resources' },
  { name: 'Training Jobs', icon: Activity, path: '/training' },
  { name: 'Datasets', icon: Database, path: '/datasets' },
  { name: 'Payroll', icon: DollarSign, path: '/payroll' },
  { name: 'Exams', icon: FileText, path: '/exams' },
  { name: 'Interviews', icon: Calendar, path: '/interviews' },
  { name: 'HRMS', icon: Calendar, path: '/hrms' },
  { name: 'AI Assistant', icon: Bot, path: '/ai-assistant' },
    { name: 'Attendance', icon: Calendar, path: '/attendance' },{ name: 'Portal', icon: Zap, path: '/portal' },
  { name: 'Settings', icon: Settings, path: '/settings' }
];

export default function Layout({ children }) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <aside className={`fixed left-0 top-0 h-full bg-gray-900/95 backdrop-blur-xl border-r border-gray-700/50 transition-all duration-300 z-30 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="flex flex-col h-full">
          <div className="p-4 flex items-center justify-between border-b border-gray-700/50">
            {sidebarOpen && <h1 className="text-xl font-bold text-white">Fintech AI</h1>}
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1.5 rounded-lg hover:bg-white/10">
              {sidebarOpen ? <X size={18} className="text-gray-400" /> : <Menu size={18} className="text-gray-400" />}
            </button>
          </div>
          <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = router.pathname === item.path;
              return (
                <Link href={item.path} key={item.path}>
                  <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 cursor-pointer ${isActive ? 'bg-blue-600/20 border border-blue-500/30' : 'hover:bg-white/10'}`}>
                    <Icon size={18} className={isActive ? 'text-blue-400' : 'text-gray-500'} />
                    {sidebarOpen && <span className={`text-sm ${isActive ? 'text-white' : 'text-gray-400'}`}>{item.name}</span>}
                    {isActive && sidebarOpen && <ChevronRight size={14} className="ml-auto text-blue-400" />}
                  </div>
                </Link>
              );
            })}
          </nav>
          <div className="p-4 border-t border-gray-700/50">
            <button onClick={handleLogout} className="w-full flex items-center gap-2 px-3 py-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition">
              <LogOut size={16} /> {sidebarOpen && 'Logout'}
            </button>
          </div>
        </div>
      </aside>
      <main className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <header className="sticky top-0 z-20 bg-gray-800/50 backdrop-blur-xl border-b border-gray-700/50 px-6 py-3">
          <div className="flex justify-end items-center">
            <div className="flex items-center gap-3 px-3 py-1.5 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">SK</div>
              <div><p className="text-sm font-medium text-white">Sumit Kumar</p><p className="text-xs text-gray-400">CEO & Founder</p></div>
            </div>
          </div>
        </header>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
