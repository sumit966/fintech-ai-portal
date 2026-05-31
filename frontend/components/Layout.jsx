import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'Projects', href: '/projects', icon: '🚀' },
    { name: 'Employees', href: '/employees', icon: '👥' },
    { name: 'Expenses', href: '/expenses', icon: '💰' },
    { name: 'Virtual Machines', href: '/virtual-machines', icon: '🖥️' },
    { name: 'GPU Monitoring', href: '/gpu-monitoring', icon: '🎮' },
    { name: 'AI Models', href: '/ai-models', icon: '🤖' },
    { name: 'Deployments', href: '/deployments', icon: '🚀' },
    { name: 'Resources', href: '/resources', icon: '📦' },
    { name: 'Training Jobs', href: '/training-jobs', icon: '📚' },
    { name: 'Datasets', href: '/datasets', icon: '📊' },
    { name: 'Payroll', href: '/payroll', icon: '💰' },
    { name: 'Exams', href: '/exams', icon: '📝' },
    { name: 'Interviews', href: '/interviews', icon: '🎯' },
    { name: 'HRMS', href: '/hrms', icon: '🏢' },
    { name: 'AI Assistant', href: '/ai-assistant', icon: '💬' },
    { name: 'Attendance', href: '/attendance', icon: '📅' },
    { name: 'Portal', href: '/portal', icon: '🔗' },
    { name: 'Settings', href: '/settings', icon: '⚙️' },
  ];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        {/* Sidebar */}
        <aside className={"fixed top-0 left-0 z-40 h-screen transition-transform " + (sidebarOpen ? 'translate-x-0' : '-translate-x-full') + " bg-white dark:bg-gray-800 shadow-lg w-64"}>
          <div className="h-full px-3 py-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-5 pb-3 border-b dark:border-gray-700">
              <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">Company Portal</h2>
              <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-500 dark:text-gray-400">
                ✕
              </button>
            </div>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <span className={"flex items-center p-2 rounded-lg cursor-pointer transition " + (router.pathname === item.href ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700')}>
                      <span className="mr-3">{item.icon}</span>
                      <span>{item.name}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Mobile sidebar toggle */}
        {!sidebarOpen && (
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-lg shadow-lg">
            ☰
          </button>
        )}

        {/* Dark mode toggle */}
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 z-50 p-2 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        {/* Main content */}
        <main className={(sidebarOpen ? 'lg:ml-64' : '') + " p-4 transition-all duration-300"}>
          <div className="container mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
