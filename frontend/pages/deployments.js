import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Cloud, CheckCircle, XCircle, Clock, RefreshCw, Globe, GitBranch, Terminal, ArrowUp, ArrowDown } from 'lucide-react';
import API_URL from '../utils/api';

export default function Deployments() {
  const [deployments, setDeployments] = useState([
    { id: 1, project: 'NeoPay Gateway', version: 'v2.4.1', environment: 'Production', status: 'success', time: '2025-04-10 14:32:00', duration: '4m 23s', commit: 'a3f2d1c' },
    { id: 2, project: 'RiskShield AI', version: 'v1.2.0', environment: 'Staging', status: 'running', time: '2025-04-12 09:15:00', duration: '12m 05s', commit: 'b4e5f6g' },
    { id: 3, project: 'HealthCare Pro', version: 'v3.0.1', environment: 'Production', status: 'success', time: '2025-04-09 22:10:00', duration: '6m 12s', commit: 'c7d8e9f' },
    { id: 4, project: 'EcomPulse', version: 'v1.5.2', environment: 'Production', status: 'failed', time: '2025-04-11 11:00:00', duration: '2m 01s', commit: 'd0e1f2g', error: 'Build timeout' },
    { id: 5, project: 'SecureNet', version: 'v0.9.3', environment: 'Development', status: 'pending', time: '2025-04-12 08:00:00', duration: 'pending', commit: 'e1f2g3h' }
  ]);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'success': return <span className="px-2 py-0.5 rounded-full text-xs bg-green-500/20 text-green-400 flex items-center gap-1"><CheckCircle size={12} /> Success</span>;
      case 'running': return <span className="px-2 py-0.5 rounded-full text-xs bg-blue-500/20 text-blue-400 flex items-center gap-1"><RefreshCw size={12} class="animate-spin" /> Running</span>;
      case 'failed': return <span className="px-2 py-0.5 rounded-full text-xs bg-red-500/20 text-red-400 flex items-center gap-1"><XCircle size={12} /> Failed</span>;
      default: return <span className="px-2 py-0.5 rounded-full text-xs bg-yellow-500/20 text-yellow-400 flex items-center gap-1"><Clock size={12} /> Pending</span>;
    }
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div><h1 className="text-2xl font-bold text-white">Deployments</h1><p className="text-gray-400 mt-1">Manage application deployments across environments</p></div>
        <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-700"><tr className="text-left text-gray-400"><th className="pb-2">Project</th><th className="pb-2">Version</th><th className="pb-2">Environment</th><th className="pb-2">Status</th><th className="pb-2">Time</th><th className="pb-2">Duration</th><th className="pb-2">Commit</th><th className="pb-2">Actions</th></tr></thead>
              <tbody>
                {deployments.map(d => (
                  <tr key={d.id} className="border-b border-gray-700/50"><td className="py-2 text-white">{d.project}</td><td className="py-2 text-gray-300">{d.version}</td><td className="py-2 text-gray-300">{d.environment}</td><td className="py-2">{getStatusBadge(d.status)}</td><td className="py-2 text-gray-400">{d.time}</td><td className="py-2 text-gray-400">{d.duration}</td><td className="py-2 text-gray-400 font-mono">{d.commit}</td><td className="py-2"><button className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs hover:bg-blue-600/30"><RefreshCw size={12} /></button></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-5"><h3 className="text-white font-semibold">Quick Deploy</h3><p className="text-gray-400 text-sm mt-2">Use CI/CD pipeline to deploy new versions.</p><button className="mt-3 px-4 py-2 bg-blue-600 rounded-lg text-white">Trigger New Deployment</button></div>
      </div>
    </Layout>
  );
}
