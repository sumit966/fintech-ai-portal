import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Brain, Play, Square, Pause, Rocket, TrendingUp, Target, Cpu, Activity, BarChart3, Clock, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AIModels() {
  const [models, setModels] = useState([
    { id: 1, name: 'GPT-4 Fine-tune', framework: 'PyTorch', dataset: 'CodeAlpaca 50k', accuracy: 87.4, epoch: 12, totalEpochs: 20, gpu: 'A100', status: 'training', progress: 65, loss: 0.234, valScore: 0.876, logs: ['Epoch 1/20: loss=0.89', 'Epoch 5/20: loss=0.45', 'Epoch 10/20: loss=0.28'] },
    { id: 2, name: 'Stable Diffusion XL', framework: 'TensorFlow', dataset: 'LAION-5B', accuracy: 92.1, epoch: 8, totalEpochs: 15, gpu: 'RTX 4090', status: 'paused', progress: 45, loss: 0.156, valScore: 0.921, logs: [] },
    { id: 3, name: 'Llama 2 7B', framework: 'PyTorch', dataset: 'RedPajama', accuracy: 84.3, epoch: 15, totalEpochs: 25, gpu: 'A100', status: 'training', progress: 78, loss: 0.312, valScore: 0.843, logs: [] },
    { id: 4, name: 'Whisper Large', framework: 'TensorFlow', dataset: 'Common Voice 16', accuracy: 89.2, epoch: 6, totalEpochs: 10, gpu: 'T4', status: 'completed', progress: 100, loss: 0.089, valScore: 0.892, logs: ['Training completed', 'Model saved to registry'] }
  ]);
  const [selectedModel, setSelectedModel] = useState(null);
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    const data = [];
    for (let i = 0; i < 20; i++) {
      data.push({ epoch: i + 1, accuracy: Math.min(60 + i * 1.5, 92), loss: Math.max(1.2 - i * 0.05, 0.15) });
    }
    setMetrics(data);
    const interval = setInterval(() => {
      setModels(prev => prev.map(model => {
        if (model.status === 'training') {
          const newProgress = Math.min(model.progress + 0.5, 100);
          const newLoss = Math.max(model.loss - 0.002, 0.05);
          const newEpoch = Math.min(model.epoch + 0.05, model.totalEpochs);
          return { ...model, progress: newProgress, loss: newLoss, epoch: newEpoch };
        }
        return model;
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleAction = (id, action) => {
    setModels(prev => prev.map(model => {
      if (model.id === id) {
        let newStatus = model.status;
        if (action === 'start') newStatus = 'training';
        if (action === 'stop') newStatus = 'stopped';
        if (action === 'pause') newStatus = 'paused';
        if (action === 'deploy') alert(`Deploying ${model.name}... (mock deployment)`);
        return { ...model, status: newStatus };
      }
      return model;
    }));
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'training': return 'bg-green-500/20 text-green-400';
      case 'paused': return 'bg-yellow-500/20 text-yellow-400';
      case 'completed': return 'bg-blue-500/20 text-blue-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div><h1 className="text-2xl font-bold text-white flex items-center gap-2"><Brain className="w-6 h-6 text-purple-400" /> AI Model Training</h1><p className="text-gray-400">Manage training jobs, monitor metrics, and deploy models</p></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
            <h3 className="text-white font-semibold mb-4"><TrendingUp className="inline mr-1" /> Training Progress</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={metrics}><CartesianGrid stroke="#374151" /><XAxis dataKey="epoch" /><YAxis /><Tooltip /><Line type="monotone" dataKey="accuracy" stroke="#3b82f6" name="Accuracy" /><Line type="monotone" dataKey="loss" stroke="#ef4444" name="Loss" /></LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700"><h3 className="text-white font-semibold mb-3">Active Training Jobs</h3><div className="space-y-2">{models.filter(m => m.status === 'training').map(m => (<div key={m.id} className="flex justify-between items-center"><span><Cpu size={14} className="inline mr-1" /> {m.name}</span><span>{Math.round(m.progress)}%</span></div>))}</div></div>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {models.map(model => (
            <div key={model.id} className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 hover:border-purple-500/50 transition">
              <div className="flex justify-between items-start"><div><div className="flex items-center gap-2"><Brain className="w-5 h-5 text-purple-400" /><h3 className="text-lg font-semibold text-white">{model.name}</h3></div><div className="flex gap-2 mt-1"><span className="text-xs text-gray-500">{model.framework}</span><span className="text-xs text-gray-500">• {model.gpu}</span><span className="text-xs text-gray-500">• {model.dataset}</span></div></div><span className={`px-2 py-0.5 rounded-full text-xs ${getStatusColor(model.status)}`}>{model.status.toUpperCase()}</span></div>
              <div className="grid grid-cols-4 gap-2 my-3 text-center"><div><p className="text-xs text-gray-500">Accuracy</p><p className="font-semibold">{model.accuracy}%</p></div><div><p className="text-xs text-gray-500">Epoch</p><p>{Math.round(model.epoch)}/{model.totalEpochs}</p></div><div><p className="text-xs text-gray-500">Loss</p><p>{model.loss.toFixed(3)}</p></div><div><p className="text-xs text-gray-500">Val Score</p><p>{model.valScore.toFixed(3)}</p></div></div>
              <div className="mb-3"><div className="flex justify-between text-xs mb-1"><span>Progress</span><span>{Math.round(model.progress)}%</span></div><div className="h-2 bg-white/10 rounded-full"><div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: `${model.progress}%` }}></div></div></div>
              <div className="flex gap-2 mb-2">
                <button onClick={() => handleAction(model.id, 'start')} className="flex-1 py-1.5 bg-green-600/20 text-green-400 rounded text-sm flex items-center justify-center gap-1"><Play size={12} /> Start</button>
                <button onClick={() => handleAction(model.id, 'pause')} className="flex-1 py-1.5 bg-yellow-600/20 text-yellow-400 rounded text-sm"><Pause size={12} /> Pause</button>
                <button onClick={() => handleAction(model.id, 'stop')} className="flex-1 py-1.5 bg-red-600/20 text-red-400 rounded text-sm"><Square size={12} /> Stop</button>
                <button onClick={() => handleAction(model.id, 'deploy')} className="flex-1 py-1.5 bg-blue-600/20 text-blue-400 rounded text-sm"><Rocket size={12} /> Deploy</button>
              </div>
              {model.logs.length > 0 && (
                <div className="bg-black/30 rounded p-2 text-xs font-mono text-green-400 max-h-24 overflow-y-auto"><p className="text-gray-400 mb-1">Latest logs:</p>{model.logs.slice(-3).map((log, i) => <div key={i}>{log}</div>)}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
