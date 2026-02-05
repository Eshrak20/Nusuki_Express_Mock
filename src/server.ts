import express from "express";
import cors from "cors";
import os from "os";
import apiRoutes from "./routes";

const app = express();
const allowedOrigins = ["http://localhost:5173", "http://192.168.0.129:5173"];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));
app.use(express.json());

app.use("/api/v1", apiRoutes);



/* ---------- Root route (for browser) ---------- */
app.get("/", (req, res) => {
  res.send(`
    <div style="
      font-family: system-ui, -apple-system, BlinkMacSystemFont;
      background: #0f172a;
      color: #e5e7eb;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <div style="text-align:center">
        <h1 style="color:#38bdf8;">🚀 Mock API Server Running</h1>
        <p>Environment: <b>Development (Mock)</b></p>
        <p>Base URL:</p>
        <code style="
          background:#020617;
          padding:8px 12px;
          border-radius:6px;
          color:#22c55e;
        ">
          /api/v1
        </code>
        <p style="margin-top:16px; font-size:14px; color:#94a3b8;">
          Built by Eshrak
        </p>
      </div>
    </div>
  `);
});

/* ---------- Helper: get local Wi-Fi IP ---------- */
function getLocalIP(): string {
  const interfaces = os.networkInterfaces();

  for (const name of Object.keys(interfaces)) {
    for (const net of interfaces[name] || []) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address;
      }
    }
  }
  return "localhost";
}

/* ---------- Server listen ---------- */
const PORT = 5000;
const localIP = getLocalIP();

app.listen(PORT, "0.0.0.0", () => {
  console.log("\n🚀 Mock API Server Started");
  console.log("──────────────────────────────");
  console.log(`🔹 Local   → http://localhost:${PORT}`);
  console.log(`🔹 Network → http://${localIP}:${PORT}`);
  console.log(`🔹 API     → http://${localIP}:${PORT}/api/v1`);
  console.log("──────────────────────────────\n");
});
