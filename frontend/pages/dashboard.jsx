import { useState, useEffect } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    gpu: 78,
    models: 24,
    deployments: 156,
    users: 1247
  });

  return (
    <div style={{ padding: "20px", background: "#0f0f23", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ color: "white", fontSize: "32px", marginBottom: "30px" }}>Dashboard</h1>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "30px" }}>
          <div style={{ background: "rgba(255,255,255,0.1)", padding: "20px", borderRadius: "12px" }}>
            <h3 style={{ color: "#a0aec0", fontSize: "14px" }}>GPU Utilization</h3>
            <p style={{ color: "white", fontSize: "32px", fontWeight: "bold" }}>{stats.gpu}%</p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", padding: "20px", borderRadius: "12px" }}>
            <h3 style={{ color: "#a0aec0", fontSize: "14px" }}>Active Models</h3>
            <p style={{ color: "white", fontSize: "32px", fontWeight: "bold" }}>{stats.models}</p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", padding: "20px", borderRadius: "12px" }}>
            <h3 style={{ color: "#a0aec0", fontSize: "14px" }}>Total Deployments</h3>
            <p style={{ color: "white", fontSize: "32px", fontWeight: "bold" }}>{stats.deployments}</p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", padding: "20px", borderRadius: "12px" }}>
            <h3 style={{ color: "#a0aec0", fontSize: "14px" }}>Active Users</h3>
            <p style={{ color: "white", fontSize: "32px", fontWeight: "bold" }}>{stats.users}</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          <div style={{ background: "rgba(255,255,255,0.1)", padding: "20px", borderRadius: "12px" }}>
            <h2 style={{ color: "white", fontSize: "20px", marginBottom: "15px" }}>Recent Activity</h2>
            <ul style={{ color: "#cbd5e0", listStyle: "none", padding: 0 }}>
              <li style={{ padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>✓ New model deployed</li>
              <li style={{ padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>✓ GPU cluster updated</li>
              <li style={{ padding: "10px 0" }}>✓ Training job completed</li>
            </ul>
          </div>
          
          <div style={{ background: "rgba(255,255,255,0.1)", padding: "20px", borderRadius: "12px" }}>
            <h2 style={{ color: "white", fontSize: "20px", marginBottom: "15px" }}>System Health</h2>
            <div style={{ marginBottom: "15px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                <span style={{ color: "#cbd5e0" }}>CPU Usage</span>
                <span style={{ color: "white" }}>45%</span>
              </div>
              <div style={{ background: "#2d3748", height: "8px", borderRadius: "4px", overflow: "hidden" }}>
                <div style={{ width: "45%", height: "100%", background: "#4299e1", borderRadius: "4px" }}></div>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                <span style={{ color: "#cbd5e0" }}>Memory Usage</span>
                <span style={{ color: "white" }}>62%</span>
              </div>
              <div style={{ background: "#2d3748", height: "8px", borderRadius: "4px", overflow: "hidden" }}>
                <div style={{ width: "62%", height: "100%", background: "#9f7aea", borderRadius: "4px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
