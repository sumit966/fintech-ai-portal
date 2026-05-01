import { useState } from 'react';
import Layout from '../components/Layout';
import { Database, FileText, HardDrive, Download, Upload, Search, Filter, Plus, Eye } from 'lucide-react';

export default function Datasets() {
  const [datasets, setDatasets] = useState([
    { id: 1, name: 'Customer Transactions', size: '2.5 GB', records: '5.2M', format: 'CSV', updated: '2025-04-01', owner: 'Data Team', description: 'Anonymized transaction data for fraud detection' },
    { id: 2, name: 'Medical Records', size: '1.8 GB', records: '850K', format: 'Parquet', updated: '2025-03-28', owner: 'Healthcare AI', description: 'Patient records with diagnosis codes' },
    { id: 3, name: 'Fraud Logs', size: '4.2 GB', records: '12M', format: 'JSON', updated: '2025-04-10', owner: 'RiskShield', description: 'Real-time fraud alerts' },
    { id: 4, name: 'User Behavior', size: '3.1 GB', records: '8.7M', format: 'CSV', updated: '2025-04-05', owner: 'EcomPulse', description: 'Clickstream and purchase data' },
    { id: 5, name: 'Image Dataset (Medical)', size: '15 GB', records: '50K images', format: 'JPEG', updated: '2025-04-12', owner: 'HealthCare Pro', description: 'X-ray and MRI images' }
  ]);
  const [search, setSearch] = useState('');
  const filtered = datasets.filter(d => d.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center"><div><h1 className="text-2xl font-bold text-white">Datasets</h1><p className="text-gray-400">Manage data assets for AI and analytics</p></div><button className="px-4 py-2 bg-blue-600 rounded-lg text-white flex items-center gap-2"><Plus size={16} /> Upload Dataset</button></div>
        <div className="relative"><Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} /><input type="text" placeholder="Search datasets..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-2 bg-gray-700 rounded-lg text-white" /></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(ds => (
            <div key={ds.id} className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 hover:border-blue-500/50 transition">
              <div className="flex items-start gap-3"><Database size={20} className="text-blue-400 flex-shrink-0" /><div><h3 className="text-white font-semibold">{ds.name}</h3><p className="text-xs text-gray-400">{ds.format} • {ds.size} • {ds.records} records</p><p className="text-xs text-gray-500 mt-1">Updated: {ds.updated} • Owner: {ds.owner}</p><p className="text-xs text-gray-400 mt-2">{ds.description}</p></div></div>
              <div className="flex gap-2 mt-3"><button className="flex-1 py-1.5 bg-blue-600/20 text-blue-400 rounded text-sm flex items-center justify-center gap-1"><Download size={12} /> Download</button><button className="flex-1 py-1.5 bg-green-600/20 text-green-400 rounded text-sm"><Eye size={12} /> Preview</button></div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
