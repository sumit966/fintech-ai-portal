import { useState } from "react";
import Layout from "../components/Layout";
import { Bot, Send, MessageCircle } from "lucide-react";
export default function AiAssistant() {
  const [messages, setMessages] = useState([{ role:"assistant", content:"Hello! I am your FinTech AI Assistant. How can I help you today?" }]);
  const [input, setInput] = useState("");
  const send = () => { if(!input.trim()) return; setMessages([...messages, { role:"user", content:input }]); setTimeout(() => setMessages(prev => [...prev, { role:"assistant", content:"I am processing your request. Our AI team will assist you shortly." }]), 500); setInput(""); };
  return (<div><h1 className="text-2xl font-bold text-white mb-1">AI Assistant</h1><div className="glass-card h-[500px] flex flex-col"><div className="flex-1 overflow-y-auto p-4 space-y-3">{messages.map((m,i)=>(<div key={i} className={`flex ${m.role==="user"?"justify-end":"justify-start"}`}><div className={`max-w-md rounded-2xl px-4 py-2 ${m.role==="user"?"bg-purple-600 text-white":"bg-white/10 text-gray-300"}`}>{m.content}</div></div>))}</div>
  <div className="p-4 border-t border-white/10 flex gap-2"><input value={input} onChange={e=>setInput(e.target.value)} onKeyPress={e=>e.key==="Enter"&&send()} placeholder="Ask about company policies, HR, payroll..." className="flex-1 bg-white/10 rounded-xl px-4 py-2 text-white"/><button onClick={send} className="bg-purple-600 px-4 py-2 rounded-xl"><Send className="w-4 h-4 text-white"/></button></div></div></div>);}
AiAssistant.getLayout = (page) => <Layout>{page}</Layout>;
