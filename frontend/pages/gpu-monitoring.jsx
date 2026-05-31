export default function GpuMonitoring() {
  const gpus = [
    { name: "NVIDIA A100", usage: 87, temp: 72, memory: 8.2 },
    { name: "NVIDIA V100", usage: 92, temp: 75, memory: 10.4 },
    { name: "NVIDIA T4", usage: 45, temp: 58, memory: 4.2 },
    { name: "AMD MI100", usage: 78, temp: 69, memory: 6.8 }
  ];

  return (
    <div style={{ padding: "20px", background: "#0f0f23", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ color: "white", fontSize: "32px", marginBottom: "10px" }}>GPU Monitoring</h1>
        <p style={{ color: "#a0aec0", marginBottom: "30px" }}>Real-time GPU performance metrics</p>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {gpus.map((gpu, idx) => (
            <div key={idx} style={{ background: "rgba(255,255,255,0.1)", padding: "20px", borderRadius: "12px" }}>
              <h2 style={{ color: "white", fontSize: "20px", marginBottom: "15px" }}>{gpu.name}</h2>
              <div style={{ marginBottom: "15px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                  <span style={{ color: "#cbd5e0" }}>Utilization</span>
                  <span style={{ color: "white" }}>{gpu.usage}%</span>
                </div>
                <div style={{ background: "#2d3748", height: "8px", borderRadius: "4px" }}>
                  <div style={{ width: `${gpu.usage}%`, height: "100%", background: "#4299e1", borderRadius: "4px" }}></div>
                </div>
              </div>
              <div style={{ marginBottom: "15px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                  <span style={{ color: "#cbd5e0" }}>Temperature</span>
                  <span style={{ color: "white" }}>{gpu.temp}°C</span>
                </div>
                <div style={{ background: "#2d3748", height: "8px", borderRadius: "4px" }}>
                  <div style={{ width: `${gpu.temp}%`, height: "100%", background: "#e53e3e", borderRadius: "4px" }}></div>
                </div>
              </div>
              <div>
                <span style={{ color: "#cbd5e0" }}>Memory: </span>
                <span style={{ color: "white" }}>{gpu.memory} GB / 12 GB</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
