import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { roadmapData } from "./src/data/roadmapData";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API routes
  app.get("/api/roadmaps", (req, res) => {
    res.json(roadmapData);
  });

  app.get("/api/roadmaps/:id", (req, res) => {
    const roadmap = roadmapData.find(r => r.id === req.params.id);
    if (roadmap) {
      res.json(roadmap);
    } else {
      res.status(404).json({ message: "Roadmap not found" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
