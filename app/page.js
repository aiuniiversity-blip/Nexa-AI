export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#090909",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
      padding: "24px"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "700px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: "12px" }}>
          Nexa AI
        </h1>

        <p style={{
          color: "#aaa",
          fontSize: "18px",
          marginBottom: "40px"
        }}>
          Your AI study assistant.
        </p>

        <div style={{
          background: "#151515",
          border: "1px solid #292929",
          borderRadius: "16px",
          padding: "20px"
        }}>
          <textarea
            placeholder="Ask Nexa AI anything..."
            style={{
              width: "100%",
              height: "140px",
              background: "#101010",
              color: "white",
              border: "1px solid #333",
              borderRadius: "10px",
              padding: "15px",
              fontSize: "16px",
              boxSizing: "border-box",
              resize: "vertical"
            }}
          />

          <button style={{
            marginTop: "15px",
            width: "100%",
            padding: "14px",
            background: "#e50914",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: "bold"
          }}>
            Ask Nexa
          </button>
        </div>
      </div>
    </main>
  );
}
