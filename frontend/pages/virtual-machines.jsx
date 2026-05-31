import { useState } from 'react';
import Layout from '../components/Layout';

export default function VirtualMachines() {
  const [vms] = useState([
    { id: 1, name: 'Web Server-01', status: 'Running', cpu: '45%', ram: '8GB/16GB', disk: '120GB/250GB', ip: '10.0.1.10', os: 'Ubuntu 22.04', uptime: '45 days', type: 'Production' },
    { id: 2, name: 'Database Server', status: 'Running', cpu: '32%', ram: '12GB/32GB', disk: '450GB/1TB', ip: '10.0.1.20', os: 'CentOS 8', uptime: '120 days', type: 'Production' },
    { id: 3, name: 'Dev Environment', status: 'Running', cpu: '15%', ram: '4GB/8GB', disk: '80GB/120GB', ip: '10.0.2.30', os: 'Ubuntu 22.04', uptime: '10 days', type: 'Development' },
    { id: 4, name: 'Testing Server', status: 'Stopped', cpu: '0%', ram: '0GB/16GB', disk: '60GB/200GB', ip: '10.0.2.40', os: 'Windows Server', uptime: '0 days', type: 'Testing' },
    { id: 5, name: 'Backup Server', status: 'Running', cpu: '12%', ram: '6GB/16GB', disk: '800GB/2TB', ip: '10.0.1.50', os: 'Ubuntu 20.04', uptime: '90 days', type: 'Storage' },
    { id: 6, name: 'AI Training VM', status: 'Running', cpu: '89%', ram: '28GB/64GB', disk: '350GB/500GB', ip: '10.0.3.60', os: 'Ubuntu 22.04', uptime: '30 days', type: 'GPU' },
    { id: 7, name: 'Staging Server', status: 'Running', cpu: '8%', ram: '4GB/16GB', disk: '100GB/250GB', ip: '10.0.2.70', os: 'Debian 11', uptime: '15 days', type: 'Staging' },
    { id: 8, name: 'Monitoring VM', status: 'Running', cpu: '23%', ram: '5GB/8GB', disk: '45GB/100GB', ip: '10.0.1.80', os: 'CentOS 9', uptime: '60 days', type: 'Monitoring' }
  ]);

  const getStatusColor = (status) => status === 'Running' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';

  return (
    <Layout>
      <div className='p-6'>
        <h1 className='text-3xl font-bold mb-6 dark:text-white'>Virtual Machines</h1>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>Total VMs: {vms.length} | Running: {vms.filter(v => v.status === 'Running').length} | Stopped: {vms.filter(v => v.status === 'Stopped').length}</p>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {vms.map(vm => (
            <div key={vm.id} className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition'>
              <div className='flex justify-between items-start mb-3'>
                <h3 className='text-xl font-bold dark:text-white'>{vm.name}</h3>
                <span className={'px-2 py-1 rounded text-xs ' + getStatusColor(vm.status)}>{vm.status}</span>
              </div>
              <div className='space-y-2 text-sm'>
                <p><strong className='dark:text-gray-300'>Type:</strong> <span className='dark:text-gray-400'>{vm.type}</span></p>
                <p><strong className='dark:text-gray-300'>OS:</strong> <span className='dark:text-gray-400'>{vm.os}</span></p>
                <p><strong className='dark:text-gray-300'>CPU:</strong> <span className='dark:text-gray-400'>{vm.cpu}</span></p>
                <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5'><div className='bg-blue-600 rounded-full h-1.5' style={{ width: vm.cpu }}></div></div>
                <p><strong className='dark:text-gray-300'>RAM:</strong> <span className='dark:text-gray-400'>{vm.ram}</span></p>
                <p><strong className='dark:text-gray-300'>Disk:</strong> <span className='dark:text-gray-400'>{vm.disk}</span></p>
                <p><strong className='dark:text-gray-300'>IP:</strong> <span className='dark:text-gray-400'>{vm.ip}</span></p>
                <p><strong className='dark:text-gray-300'>Uptime:</strong> <span className='dark:text-gray-400'>{vm.uptime}</span></p>
              </div>
              <div className='mt-4 flex gap-2'>
                <button className='flex-1 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700'>Start</button>
                <button className='flex-1 bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700'>Stop</button>
                <button className='flex-1 bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700'>Console</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
