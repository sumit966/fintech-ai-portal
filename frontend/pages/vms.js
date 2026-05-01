import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Server, Cpu, Activity, HardDrive, Play, Square, RefreshCw, Terminal, Eye, ChevronDown, ChevronUp, Network, Clock, AlertTriangle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

export default function VirtualMachines() {
  const [vms, setVms] = useState([
    { id: 1, name: 'Production-VM-01', cpu: 45, ram: 52, disk: 38, status: 'running', ip: '10.0.1.101', uptime: '14d', networkRx: 125, networkTx: 80, cpuHistory: [], ramHistory: [], logs: ['2025-04-14 08:00: System started', '2025-04-14 10:30: High load alert'] },
    { id: 2, name: 'AI-Training-01', cpu: 78, ram: 64, disk: 45, status: 'running', ip: '10.0.1.102', uptime: '3d', gpu: 'A100', networkRx: 450, networkTx: 320, cpuHistory: [], ramHistory: [], logs: ['2025-04-14 07:00: GPU driver loaded', '2025-04-14 09:00: Training job started'] },
    { id: 3, name: 'Database-Node', cpu: 23, ram: 48, disk: 72, status: 'running', ip: '10.0.1.103', uptime: '21d', networkRx: 89, networkTx: 45, cpuHistory: [], ramHistory: [], logs: ['2025-04-13 23:00: Backup completed', '2025-04-14 06:00: Replication synced'] },
    { id: 4, name: 'Staging-VM', cpu: 0, ram: 0, disk: 45, status: 'stopped', ip: '10.0.1.104', uptime: '0d', networkRx: 0, networkTx: 0, cpuHistory: [], ramHistory: [], logs: [] }
  ]);
  const [expandedVM, setExpandedVM] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setVms(prev => prev.map(vm => {
        if (vm.status === 'running') {
          const newCpu = Math.min(95, Math.max(5, vm.cpu + (Math.random() - 0.5) * 10));
          const newRam = Math.min(95, Math.max(10, vm.ram + (Math.random() - 0.5) * 5));
          const newHistoryCpu = [...(vm.cpuHistory || []), { time: new Date().toLocaleTimeString(), value: newCpu }].slice(-30);
          const newHistoryRam = [...(vm.ramHistory || []), { time: new Date().toLocaleTimeString(), value: newRam }].slice(-30);
          const newRx = Math.max(0, vm.networkRx + (Math.random() - 0.5) * 50);
          const newTx = Math.max(0, vm.networkTx + (Math.random() - 0.5) * 30);
          return { ...vm, cpu: Math.round(newCpu), ram: Math.round(newRam), cpuHistory: newHistoryCpu, ramHistory: newHistoryRam, networkRx: Math.round(newRx), networkTx: Math.round(newTx) };
        }
        return vm;
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleAction = (id, action) => {
    setVms(prev => prev.map(vm => vm.id === id ? { ...vm, status: action === 'start' ? 'running' : 'stopped', cpu: 0, ram: 0, networkRx: 0, networkTx: 0 } : vm));
  };

  return (
    <Layout>
      <div className="p-6 space-y-5">
        <div><h1 className="text-2xl font-bold text-white">Virtual Machines</h1><p className="text-gray-400">Monitor and manage compute instances with real-time metrics</p></div>
        {vms.map(vm => {
          const isExpanded = expandedVM === vm.id;
          return (
            <div key={vm.id} className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition">
              <div className="p-4 cursor-pointer flex justify-between items-center" onClick={() => setExpandedVM(isExpanded ? null : vm.id)}>
                <div className="flex items-center gap-3"><div className={`w-2 h-2 rounded-full ${vm.status === 'running' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div><div><h3 className="text-white font-semibold">{vm.name}</h3><p className="text-xs text-gray-500">{vm.ip} • Uptime: {vm.uptime}</p></div></div>
                <div className="flex items-center gap-3"><span className={`px-2 py-0.5 rounded-full text-xs ${vm.status === 'running' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>{vm.status}</span>{isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</div>
              </div>
              {isExpanded && (
                <div className="border-t border-gray-700 p-4 bg-black/30 space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                    <div><p className="text-xs text-gray-500">CPU</p><p className="text-xl font-bold text-white">{vm.cpu}%</p><div className="h-1.5 bg-white/10 rounded-full mt-1"><div className="h-full bg-blue-500 rounded-full" style={{width:`${vm.cpu}%`}}></div></div></div>
                    <div><p className="text-xs text-gray-500">RAM</p><p className="text-xl font-bold text-white">{vm.ram}%</p><div className="h-1.5 bg-white/10 rounded-full mt-1"><div className="h-full bg-purple-500 rounded-full" style={{width:`${vm.ram}%`}}></div></div></div>
                    <div><p className="text-xs text-gray-500">Disk</p><p className="text-xl font-bold text-white">{vm.disk}%</p><div className="h-1.5 bg-white/10 rounded-full mt-1"><div className="h-full bg-green-500 rounded-full" style={{width:`${vm.disk}%`}}></div></div></div>
                    <div><p className="text-xs text-gray-500">Network</p><p className="text-sm font-semibold text-white">↓{vm.networkRx} ↑{vm.networkTx} Mbps</p></div>
                  </div>
                  {vm.cpuHistory && vm.cpuHistory.length > 0 && (
                    <div><h4 className="text-sm text-white mb-2">CPU & RAM Trends (last 30 samples)</h4><ResponsiveContainer width="100%" height={120}><LineChart data={vm.cpuHistory}><CartesianGrid stroke="#374151" /><XAxis dataKey="time" hide /><YAxis hide /><Tooltip /><Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={false} /></LineChart></ResponsiveContainer></div>
                  )}
                  <div><h4 className="text-sm text-white mb-1">Recent Console Logs</h4><div className="bg-black/50 rounded-lg p-2 font-mono text-xs text-green-400 max-h-32 overflow-y-auto">{vm.logs.map((log, idx) => <div key={idx}>{log}</div>)}<div className="text-gray-500">$ _</div></div></div>
                  <div className="flex gap-2">
                    {vm.status !== 'running' && <button onClick={() => handleAction(vm.id, 'start')} className="flex-1 py-2 bg-green-600/20 text-green-400 rounded-lg text-sm flex items-center justify-center gap-2"><Play size={14} /> Start</button>}
                    {vm.status === 'running' && <button onClick={() => handleAction(vm.id, 'stop')} className="flex-1 py-2 bg-red-600/20 text-red-400 rounded-lg text-sm flex items-center justify-center gap-2"><Square size={14} /> Stop</button>}
                    <button className="flex-1 py-2 bg-blue-600/20 text-blue-400 rounded-lg text-sm"><Terminal size={14} className="inline mr-1" /> SSH</button>
                    <button className="flex-1 py-2 bg-gray-600/20 text-gray-400 rounded-lg text-sm"><Eye size={14} className="inline mr-1" /> Logs</button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-4"><h3 className="text-white font-semibold">Quick Provision</h3><p className="text-gray-400 text-sm">Launch a new VM instance in minutes.</p><button className="mt-2 px-4 py-1.5 bg-blue-600 rounded-lg text-white">+ New VM</button></div>
      </div>
    </Layout>
  );
}
