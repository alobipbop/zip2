import express from 'express';
import { createServer as createViteServer } from 'vite';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Import routes
import authRoutes from './server/routes/auth.routes.js';
import typesRoutes from './server/routes/types.routes.js';
import goalsRoutes from './server/routes/goals.routes.js';
import tasksRoutes from './server/routes/tasks.routes.js';
import trackingsRoutes from './server/routes/trackings.routes.js';

// Import middleware & db
import { initDB } from './server/db/init.js';
import { errorHandler } from './server/middleware/errorHandler.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || '3000', 10);

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Initialize Database
  if (process.env.DATABASE_URL) {
    await initDB();
  } else {
    console.warn('⚠️  DATABASE_URL not set. Skipping DB initialization.');
  }

  // ========================
  // API Routes
  // ========================
  app.use('/api/auth', authRoutes);
  app.use('/api/types', typesRoutes);
  app.use('/api/goals', goalsRoutes);
  app.use('/api', tasksRoutes);
  app.use('/api', trackingsRoutes);

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  // Error Handler (MUST BE LAST)
  app.use(errorHandler);

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((error) => {
  console.error('❌ Failed to start server:', error);
  process.exit(1);
});