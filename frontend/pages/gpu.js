import Layout from '../components/Layout';
import { Cpu, Activity, Thermometer } from 'lucide-react';

export default function GPU() {
  const gpus = [
    { name: 'NVIDIA A100', utilization: 87, temperature: 72, memory: '40GB', status: 'healthy' },
    { name: 'NVIDIA RTX 4090', utilization: 94, temperature: 78, memory: '24GB', status: 'overloaded' },
    { name: 'NVIDIA T4', utilization: 45, temperature: 62, memory: '16GB', status: 'healthy' }
  ];

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-6">GPU Monitoring</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {gpus.map((gpu, idx) => (
            <div key={idx} className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-5 h-5 text-blue-400" />
                <h3 className="text-white font-semibold">{gpu.name}</h3>
              </div>
              <div className="space-y-2">
                <div><p className="text-xs text-gray-500">Utilization</p><p className="text-lg text-white">{gpu.utilization}%</p></div>
                <div><p className="text-xs text-gray-500">Temperature</p><p className="text-lg text-white">{gpu.temperature}°C</p></div>
                <div><p className="text-xs text-gray-500">Memory</p><p className="text-lg text-white">{gpu.memory}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
