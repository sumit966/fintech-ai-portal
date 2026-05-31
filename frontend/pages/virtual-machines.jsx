import { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Cpu, HardDrive, Activity, Power, Play, Square } from 'lucide-react';

export default function VirtualMachines() {
  const [vms, setVms] = useState([
    { id: 1, name: 'Web Server-01', status: 'Running', cpu: '45%', ram: '8GB/16GB', disk: '120GB/250GB', ip: '10.0.1.10', os: 'Ubuntu 22.04', uptime: '45 days', type: 'Production' },
    { id: 2, name: 'Database Server', status: 'Running', cpu: '32%', ram: '12GB/32GB', disk: '450GB/1TB', ip: '10.0.1.20', os: 'CentOS 8', uptime: '120 days', type: 'Production' },
    { id: 3, name: 'Dev Environment', status: 'Running', cpu: '15%', ram: '4GB/8GB', disk: '80GB/120GB', ip: '10.0.2.30', os: 'Ubuntu 22.04', uptime: '10 days', type: 'Development' },
    { id: 4, name: 'Testing Server', status: 'Stopped', cpu: '0%', ram: '0GB/16GB', disk: '60GB/200GB', ip: '10.0.2.40', os: 'Windows Server', uptime: '0 days', type: 'Testing' },
    { id: 5, name: 'Backup Server', status: 'Running', cpu: '12%', ram: '6GB/16GB', disk: '800GB/2TB', ip: '10.0.1.50', os: 'Ubuntu 20.04', uptime: '90 days', type: 'Storage' },
    { id: 6, name: 'AI Training VM', status: 'Running', cpu: '89%', ram: '28GB/64GB', disk: '350GB/500GB', ip: '10.0.3.60', os: 'Ubuntu 22.04', uptime: '30 days', type: 'GPU' },
    { id: 7, name: 'Staging Server', status: 'Running', cpu: '8%', ram: '4GB/16GB', disk: '100GB/250GB', ip: '10.0.2.70', os: 'Debian 11', uptime: '15 days', type: 'Staging' },
    { id: 8, name: 'Monitoring VM', status: 'Running', cpu: '23%', ram: '5GB/8GB', disk: '45GB/100GB', ip: '10.0.1.80', os: 'CentOS 9', uptime: '60 days', type: 'Monitoring' }
  ]);

  const toggleVM = (id) => {
    setVms(vms.map(vm => vm.id === id ? { ...vm, status: vm.status === 'Running' ? 'Stopped' : 'Running' } : vm));
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Virtual Machines</h1>
        <p className="text-gray-400 mt-2">Total: {vms.length} | Running: {vms.filter(v => v.status === 'Running').length} | Stopped: {vms.filter(v => v.status === 'Stopped').length}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vms.map((vm, idx) => (
          <motion.div key={vm.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Server className={`w-10 h-10 ${vm.status === 'Running' ? 'text-green-400' : 'text-red-400'}`} />
                <div><h3 className="text-lg font-semibold text-white">{vm.name}</h3><p className="text-xs text-gray-400">{vm.type}</p></div>
              </div>
              <span className={`text-xs px-2 py-1 rounded ${vm.status === 'Running' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>{vm.status}</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-300"><Cpu className="w-4 h-4 mr-2" />CPU: {vm.cpu}</div>
              <div className="flex items-center text-gray-300"><HardDrive className="w-4 h-4 mr-2" />RAM: {vm.ram}</div>
              <div className="flex items-center text-gray-300"><Activity className="w-4 h-4 mr-2" />Disk: {vm.disk}</div>
              <div className="text-xs text-gray-500 mt-2">IP: {vm.ip} | OS: {vm.os} | Uptime: {vm.uptime}</div>
            </div>
            <button onClick={() => toggleVM(vm.id)} className={`mt-4 w-full py-2 rounded-lg flex items-center justify-center space-x-2 ${vm.status === 'Running' ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'} transition`}>
              {vm.status === 'Running' ? <Square className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{vm.status === 'Running' ? 'Stop' : 'Start'}</span>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
