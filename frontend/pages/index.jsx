export default function Home() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      color: "white"
    }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Enterprise AI Portal</h1>
      <p style={{ fontSize: "18px", opacity: 0.9 }}>Your AI Infrastructure Management Platform</p>
      <div style={{ marginTop: "40px", display: "flex", gap: "20px" }}>
        <a href="/dashboard" style={{ 
          padding: "12px 24px", 
          background: "white", 
          color: "#667eea", 
          textDecoration: "none", 
          borderRadius: "8px",
          fontWeight: "bold"
        }}>Go to Dashboard</a>
      </div>
    </div>
  );
}
