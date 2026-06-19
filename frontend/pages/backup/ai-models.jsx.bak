import Layout from "../components/Layout";
import { Brain, TrendingUp, CheckCircle } from "lucide-react";
export default function AiModels() {
  const models = [{ name:"GPT-4 FinTech", type:"LLM", accuracy:"94%", status:"Deployed", version:"2.0" },{ name:"Fraud Detection", type:"Classification", accuracy:"98%", status:"Active", version:"1.5" },{ name:"Stock Predictor", type:"Time Series", accuracy:"87%", status:"Training", version:"3.1" },{ name:"Risk Analyzer", type:"Analytics", accuracy:"96%", status:"Deployed", version:"2.2" }];
  return (<div><h1 className="text-2xl font-bold text-white mb-1">AI Models</h1><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{models.map(m=>(<div key={m.name} className="glass-card p-4"><Brain className="w-8 h-8 text-purple-400 mb-2"/><h3 className="text-white font-semibold">{m.name}</h3><p className="text-xs text-gray-400">{m.type}</p><div className="mt-2 flex justify-between"><span className="text-green-400">{m.accuracy}</span><span className="text-xs text-gray-400">{m.status}</span></div></div>))}</div></div>);}
AiModels.getLayout = (page) => <Layout>{page}</Layout>;
