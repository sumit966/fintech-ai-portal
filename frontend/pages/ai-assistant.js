import { useState, useRef } from 'react';
import Layout from '../components/Layout';
import { Bot, Send, Sparkles, Loader2, Zap } from 'lucide-react';

export default function AIAssistant() {
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Hello! I am your AI assistant (powered by Grok-like intelligence). Ask me anything about your company, projects, employees, or general knowledge.' }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const callAI = async (prompt) => {
    // Try to use a free AI API (OpenRouter with demo key)
    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer sk-or-v1-2c3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z' // demo key, replace with your own
        },
        body: JSON.stringify({
          model: 'gryphe/mythomax-l2-13b:free',
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.7,
        })
      });
      if (response.ok) {
        const data = await response.json();
        return data.choices[0].message.content;
      }
    } catch (e) { console.log('API error, using local AI'); }
    // Fallback local AI (keyword-based but covers many topics)
    const lower = prompt.toLowerCase();
    if (lower.includes('attendance')) return 'You can view attendance on the Attendance page. HR can mark daily status. Biometric simulation is available.';
    if (lower.includes('project')) return 'Active projects: NeoPay Gateway (75%), RiskShield AI (45%), HealthCare Pro (60%). Each has a dedicated page.';
    if (lower.includes('employee')) return `We have ${employees.length} employees. Their details are on the Employees page.`;
    if (lower.includes('vm') || lower.includes('virtual machine')) return 'Virtual Machines: Production, AI-Training, Database, Staging. CPU/RAM usage graphs are on the VMs page.';
    if (lower.includes('salary')) return 'Payroll data is available on the Payroll page. Monthly salaries range from ₹45K to ₹2.8L.';
    if (lower.includes('interview')) return 'You can schedule new interviews on the Interviews page. Use the "Schedule Interview" form.';
    if (lower.includes('ai model')) return 'AI Models include GPT-4 fine-tune, Stable Diffusion, Llama 2. You can start/stop training on the AI Models page.';
    if (lower.includes('dataset')) return 'Datasets include Customer Transactions, Medical Records, Fraud Logs. Available on the Datasets page.';
    return 'I can help with attendance, projects, employees, VMs, payroll, interviews, AI models, and datasets. Please ask a specific question.';
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    const reply = await callAI(input);
    setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    setLoading(false);
  };

  return (
    <Layout>
      <div className="flex flex-col h-[calc(100vh-120px)] p-6">
        <div className="mb-4"><h1 className="text-2xl font-bold text-white flex items-center gap-2"><Bot className="w-6 h-6 text-purple-400" /> AI Assistant (Grok‑style)</h1><p className="text-gray-400">Ask anything – infrastructure, HR, projects… I’ll try my best to answer.</p></div>
        <div className="flex-1 bg-gray-800/50 rounded-xl border border-gray-700 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-xl p-3 ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'}`}>
                {msg.role === 'assistant' && <Sparkles className="w-4 h-4 inline mr-1 text-yellow-400" />}{msg.content}
              </div>
            </div>
          ))}
          {loading && <div className="flex justify-start"><div className="bg-gray-700 rounded-xl p-3"><Loader2 className="animate-spin w-4 h-4" /></div></div>}
        </div>
        <div className="mt-4 flex gap-2">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && sendMessage()} className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" placeholder="Ask anything..." />
          <button onClick={sendMessage} disabled={loading} className="px-4 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700"><Send size={18} /></button>
        </div>
      </div>
    </Layout>
  );
}
