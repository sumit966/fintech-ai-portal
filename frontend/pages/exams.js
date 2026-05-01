import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { FileText, Calendar, Clock, Award, CheckCircle, Search, Users } from 'lucide-react';
import API_URL from '../utils/api';

export default function Exams() {
  const [exams, setExams] = useState([]);
  const [results, setResults] = useState([]);
  const [selectedExam, setSelectedExam] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    Promise.all([
      fetch(`${API_URL}/exams`).then(r => r.json()),
      fetch(`${API_URL}/exam-results`).then(r => r.json())
    ]).then(([examsData, resultsData]) => {
      setExams(examsData);
      setResults(resultsData);
    }).catch(err => console.error(err));
  }, []);

  const pastExams = exams.filter(e => e.type === 'past');
  const upcomingExams = exams.filter(e => e.type === 'upcoming');

  const getExamStats = (examId) => {
    const examResults = results.filter(r => r.examId === examId);
    const passed = examResults.filter(r => r.status === 'PASS').length;
    const avgScore = examResults.length ? Math.round(examResults.reduce((s, r) => s + r.score, 0) / examResults.length) : 0;
    return { total: examResults.length, passed, failed: examResults.length - passed, avgScore };
  };

  const filteredResults = selectedExam
    ? results.filter(r => r.examId === selectedExam && r.employeeName.toLowerCase().includes(search.toLowerCase()))
    : [];

  return (
    <Layout>
      <div className="space-y-6 p-6">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-400" /> Examinations & Assessments
          </h1>
          <p className="text-gray-400 mt-1">Technical and soft skills assessments for all employees</p>
        </div>

        {/* Past Exams */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">📝 Past Exams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pastExams.map(exam => {
              const stats = getExamStats(exam.id);
              return (
                <div
                  key={exam.id}
                  className={`bg-gray-800/50 border rounded-xl p-5 cursor-pointer transition-all hover:scale-105 ${
                    selectedExam === exam.id ? 'border-blue-500 bg-blue-500/10' : 'border-gray-700 hover:border-blue-500/50'
                  }`}
                  onClick={() => setSelectedExam(selectedExam === exam.id ? null : exam.id)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-white font-semibold">{exam.name}</h3>
                      <p className="text-xs text-gray-400">Type: Technical</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400">Date</p>
                      <p className="text-sm text-white">{exam.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 mb-3">
                    <div className="flex items-center gap-1 text-gray-400"><Clock size={12} /> Duration: 90 min</div>
                    <div className="flex items-center gap-1 text-gray-400"><Award size={12} /> Passing: {exam.passingMarks}%</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center pt-3 border-t border-gray-700">
                    <div><p className="text-xs text-gray-500">Total</p><p className="text-sm text-white">{stats.total}</p></div>
                    <div><p className="text-xs text-gray-500">Passed</p><p className="text-sm text-green-400">{stats.passed}</p></div>
                    <div><p className="text-xs text-gray-500">Avg Score</p><p className="text-sm text-white">{stats.avgScore}%</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Exams */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">📅 Upcoming Exams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {upcomingExams.map(exam => (
              <div key={exam.id} className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-xl p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-white font-semibold">{exam.name}</h3>
                    <p className="text-xs text-gray-400">Type: Technical</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-xs bg-yellow-500/20 text-yellow-400">Upcoming</span>
                </div>
                <div className="flex gap-3 mb-3">
                  <div className="flex items-center gap-1 text-gray-400"><Calendar size={12} /> {exam.date}</div>
                  <div className="flex items-center gap-1 text-gray-400"><Clock size={12} /> Duration: 90 min</div>
                  <div className="flex items-center gap-1 text-gray-400"><Award size={12} /> Passing: {exam.passingMarks}%</div>
                </div>
                <button className="mt-2 px-4 py-1.5 bg-blue-600/20 text-blue-400 rounded-lg text-sm hover:bg-blue-600/30 transition">Register</button>
              </div>
            ))}
          </div>
        </div>

        {/* Exam Results Table */}
        {selectedExam && (
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-semibold">Exam Results – {exams.find(e => e.id === selectedExam)?.name}</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
                <input
                  type="text"
                  placeholder="Search employee..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 pr-3 py-1.5 bg-gray-700 rounded-lg text-white text-sm"
                />
              </div>
            </div>
            <div className="overflow-x-auto max-h-[400px] overflow-y-auto">
              <table className="w-full">
                <thead className="border-b border-gray-700 sticky top-0 bg-gray-800">
                  <tr className="text-left text-gray-400 text-sm">
                    <th className="pb-3">Employee</th><th className="pb-3">Score</th><th className="pb-3">Status</th><th className="pb-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredResults.map(r => (
                    <tr key={r.id} className="border-b border-gray-700/50">
                      <td className="py-3 text-white">{r.employeeName}</td>
                      <td className="py-3 text-white">{r.score}%</td>
                      <td className="py-3">
                        <span className={`px-2 py-0.5 rounded-full text-xs ${r.status === 'PASS' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                          {r.status}
                        </span>
                      </td>
                      <td className="py-3 text-gray-400">{r.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
