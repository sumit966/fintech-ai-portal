import Layout from '../components/Layout';
import Link from 'next/link';
import { Calendar, Bot, Award } from 'lucide-react';

export default function Portal() {
  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div><h1 className="text-2xl font-bold text-white">Integrated Services</h1><p className="text-gray-400">Access HRMS, AI Assistant, and proctored exams</p></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/hrms" className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-5 border border-blue-500/30 hover:scale-105 transition flex items-center justify-between group">
            <div><h2 className="text-xl font-bold text-white">HRMS Portal</h2><p className="text-gray-400">Attendance, timetable, leave management</p></div><Calendar className="text-blue-400 group-hover:translate-x-1 transition" />
          </Link>
          <Link href="/ai-assistant" className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-5 border border-green-500/30 hover:scale-105 transition flex items-center justify-between group">
            <div><h2 className="text-xl font-bold text-white">AI Assistant</h2><p className="text-gray-400">Ask anything about infrastructure or HR data</p></div><Bot className="text-green-400 group-hover:translate-x-1 transition" />
          </Link>
          <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700"><h3 className="text-white font-semibold">Proctored Exams</h3><ul className="mt-2 space-y-2"><li><a href="#" className="text-blue-400 hover:underline">JavaScript Fundamentals - April 20</a></li><li><a href="#" className="text-blue-400 hover:underline">Python Advanced - April 25</a></li><li><a href="#" className="text-blue-400 hover:underline">System Design - April 28</a></li></ul><p className="text-xs text-gray-500 mt-2">External exam links will be added here.</p></div>
          <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700"><h3 className="text-white font-semibold">My Certifications</h3><div className="flex items-center gap-2 mt-2"><Award className="text-yellow-400" /><span>AWS Certified Solutions Architect</span></div><div className="flex items-center gap-2 mt-1"><Award className="text-yellow-400" /><span>Kubernetes Administrator (CKA)</span></div></div>
        </div>
      </div>
    </Layout>
  );
}
