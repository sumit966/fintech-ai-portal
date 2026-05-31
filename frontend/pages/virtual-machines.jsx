import { withAuth } from '../utils/withAuth';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Server, Cpu, HardDrive } from 'lucide-react';

function VirtualMachines() {
  const vms = [
    { id: 1, name: 'Web Server-01', status: 'Running', cpu: '45%', ram: '8GB/16GB', disk: '120GB/250GB' },
    { id: 2, name: 'Database Server', status: 'Running', cpu: '32%', ram: '12GB/32GB', disk: '450GB/1TB' },
    { id: 3, name: 'Dev Environment', status: 'Running', cpu: '15%', ram: '4GB/8GB', disk: '80GB/120GB' },
  ];

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-4xl font-bold gradient-text">Virtual Machines</h1>
        <p className="text-gray-400 mt-2">Manage your VM infrastructure</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vms.map((vm, idx) => (
          <motion.div key={vm.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-4"><Server className="w-8 h-8 text-green-400" /><h3 className="text-xl font-semibold text-white">{vm.name}</h3></div>
            <div className="space-y-2 text-sm"><div className="flex items-center text-gray-300"><Cpu className="w-4 h-4 mr-2" />CPU: {vm.cpu}</div><div className="flex items-center text-gray-300"><HardDrive className="w-4 h-4 mr-2" />RAM: {vm.ram}</div><div className="text-gray-300">Disk: {vm.disk}</div></div>
            <span className="inline-block mt-3 text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">{vm.status}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default withAuth(VirtualMachines);
VirtualMachines.getLayout = (page) => <Layout>{page}</Layout>;
