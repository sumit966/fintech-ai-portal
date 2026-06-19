import Layout from '../components/Layout';
import { Database, Cloud, Shield, Users, FileText, DollarSign, Calendar, ExternalLink, Zap, CheckCircle } from 'lucide-react';

export default function SAP() {
  const sapModules = [
    { name: 'HR Management', icon: Users, description: 'Employee records, attendance, payroll', status: 'Connected', color: 'text-green-400' },
    { name: 'Finance & Accounting', icon: DollarSign, description: 'Invoicing, budgeting, expense tracking', status: 'Connected', color: 'text-green-400' },
    { name: 'Project Management', icon: FileText, description: 'Project tracking, resource allocation', status: 'Connected', color: 'text-green-400' },
    { name: 'Supply Chain', icon: Database, description: 'Inventory, procurement, logistics', status: 'Pending', color: 'text-yellow-400' },
  ];

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-3">
          <Database className="w-8 h-8 text-orange-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">SAP Integration</h1>
            <p className="text-gray-400 mt-1">Enterprise Resource Planning (ERP) Integration</p>
          </div>
          <a href="https://www.sap.com" target="_blank" rel="noopener noreferrer" className="ml-auto px-4 py-2 bg-orange-600 rounded-lg text-white hover:bg-orange-700 transition flex items-center gap-2">
            <ExternalLink size={16} /> Open SAP
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {sapModules.map((module, idx) => {
            const Icon = module.icon;
            return (
              <div key={idx} className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 hover:border-orange-500/50 transition">
                <div className="flex items-start gap-3">
                  <Icon className={`w-6 h-6 ${module.color}`} />
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">{module.name}</h3>
                    <p className="text-gray-400 text-sm">{module.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${module.status === 'Connected' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                        {module.status}
                      </span>
                      {module.status === 'Connected' && <CheckCircle className="w-4 h-4 text-green-400" />}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-orange-600/20 to-yellow-600/20 rounded-xl p-6 border border-orange-500/30">
          <h3 className="text-white font-semibold flex items-center gap-2"><Zap size={20} className="text-yellow-400" /> Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            <button className="px-4 py-2 bg-orange-600/20 text-orange-400 rounded-lg hover:bg-orange-600/30 transition">Sync Data</button>
            <button className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition">Export Report</button>
            <button className="px-4 py-2 bg-green-600/20 text-green-400 rounded-lg hover:bg-green-600/30 transition">Run Analytics</button>
            <button className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-600/30 transition">View Dashboard</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
