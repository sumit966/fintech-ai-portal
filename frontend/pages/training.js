import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { GraduationCap, BookOpen, Users, Calendar, Clock, Award, CheckCircle, Play, TrendingUp, Filter } from 'lucide-react';
import API_URL from '../utils/api';

export default function Training() {
  const [trainings, setTrainings] = useState([
    { id: 1, name: 'React Advanced', type: 'Technical', duration: '4 weeks', status: 'ongoing', enrolled: 18, max: 25, progress: 65, trainer: 'Rahul Verma' },
    { id: 2, name: 'Python for Data Science', type: 'Technical', duration: '6 weeks', status: 'upcoming', enrolled: 12, max: 20, progress: 0, trainer: 'Anjali Desai' },
    { id: 3, name: 'Soft Skills', type: 'Soft Skills', duration: '2 weeks', status: 'completed', enrolled: 22, max: 30, progress: 100, trainer: 'Priya Sharma' },
    { id: 4, name: 'DevOps Essentials', type: 'Technical', duration: '5 weeks', status: 'ongoing', enrolled: 10, max: 15, progress: 42, trainer: 'Rajesh Kumar' }
  ]);
  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div><h1 className="text-2xl font-bold text-white">Training & Development</h1><p className="text-gray-400 mt-1">Employee skill enhancement programs</p></div>
        <div className="grid grid-cols-1 gap-5">
          {trainings.map(t => (
            <div key={t.id} className="bg-gray-800/50 border border-gray-700 rounded-xl p-5">
              <div className="flex justify-between items-start"><div><h3 className="text-white font-semibold">{t.name}</h3><p className="text-sm text-gray-400">Trainer: {t.trainer} • {t.duration}</p></div><span className={`px-2 py-0.5 rounded-full text-xs ${t.status==='ongoing'?'bg-green-500/20 text-green-400':t.status==='upcoming'?'bg-blue-500/20 text-blue-400':'bg-purple-500/20 text-purple-400'}`}>{t.status}</span></div>
              <div className="flex gap-4 mt-2 text-sm text-gray-400"><span><Users size={14} className="inline" /> {t.enrolled}/{t.max} enrolled</span><span><Clock size={14} className="inline" /> {t.duration}</span></div>
              <div className="mt-3"><div className="flex justify-between text-xs mb-1"><span>Progress</span><span>{t.progress}%</span></div><div className="h-2 bg-white/10 rounded-full"><div className="h-full bg-blue-500 rounded-full" style={{width:`${t.progress}%`}}></div></div></div>
              {t.status === 'ongoing' && <button className="mt-3 px-4 py-1.5 bg-green-600/20 text-green-400 rounded-lg text-sm">Continue Training</button>}
              {t.status === 'upcoming' && <button className="mt-3 px-4 py-1.5 bg-blue-600/20 text-blue-400 rounded-lg text-sm">Enroll Now</button>}
              {t.status === 'completed' && <button className="mt-3 px-4 py-1.5 bg-purple-600/20 text-purple-400 rounded-lg text-sm">View Certificate</button>}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
