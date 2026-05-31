import { useState } from "react";

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "assistant", content: "I'm processing your request. How can I assist you further?" }]);
    }, 500);
    setInput("");
  };

  return (
    <div style={{ padding: "20px", background: "#0f0f23", minHeight: "100vh" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ color: "white", fontSize: "32px", marginBottom: "10px" }}>AI Assistant</h1>
        <p style={{ color: "#a0aec0", marginBottom: "30px" }}>Your intelligent enterprise assistant</p>
        
        <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "12px", height: "500px", display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start", marginBottom: "15px" }}>
                <div style={{ 
                  background: msg.role === "user" ? "#4299e1" : "#2d3748", 
                  padding: "10px 15px", 
                  borderRadius: "12px",
                  maxWidth: "70%",
                  color: "white"
                }}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: "20px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", gap: "10px" }}>
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..." 
              style={{ flex: 1, padding: "10px", borderRadius: "8px", border: "none", background: "rgba(255,255,255,0.05)", color: "white" }}
            />
            <button onClick={sendMessage} style={{ padding: "10px 20px", background: "#4299e1", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
