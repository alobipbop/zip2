import express from 'express';
import { createServer as createViteServer } from 'vite';
import cors from 'cors';
import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function initDB() {
  try {
    const client = await pool.connect();
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255),
        avatar TEXT,
        last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      
      CREATE TABLE IF NOT EXISTS types (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        name VARCHAR(100) NOT NULL,
        color VARCHAR(50) DEFAULT '#ffdac1',
        weight NUMERIC DEFAULT 10,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      ALTER TABLE types ADD COLUMN IF NOT EXISTS color VARCHAR(50) DEFAULT '#ffdac1';
      ALTER TABLE types ADD COLUMN IF NOT EXISTS weight NUMERIC DEFAULT 10;

      CREATE TABLE IF NOT EXISTS goals (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        title VARCHAR(200) NOT NULL,
        description TEXT,
        status VARCHAR(50) DEFAULT 'active',
        start_date TIMESTAMP,
        end_date TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS tasks (
        id SERIAL PRIMARY KEY,
        goal_id INTEGER REFERENCES goals(id) ON DELETE CASCADE,
        type_id INTEGER REFERENCES types(id) ON DELETE SET NULL,
        title VARCHAR(200) NOT NULL,
        description TEXT,
        status INTEGER DEFAULT 1,
        unit VARCHAR(50),
        target_value NUMERIC,
        target_total NUMERIC,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS trackings (
        id SERIAL PRIMARY KEY,
        task_id INTEGER REFERENCES tasks(id) ON DELETE CASCADE,
        value NUMERIC NOT NULL,
        track_date TIMESTAMP NOT NULL,
        track_note TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Database initialized successfully');
    client.release();
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Initialize DB
  if (process.env.DATABASE_URL) {
    await initDB();
  } else {
    console.warn('DATABASE_URL not set. Skipping DB initialization.');
  }

  // API Routes
  app.get('/api/health', async (req, res) => {
    try {
      const result = await pool.query('SELECT NOW()');
      res.json({ status: 'ok', db_time: result.rows[0].now });
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Database connection failed' });
    }
  });

  // Auth Routes
  app.post('/api/auth/login', async (req, res) => {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
    try {
      const result = await pool.query(
        'INSERT INTO users (email, name) VALUES ($1, $2) ON CONFLICT (email) DO UPDATE SET last_login = CURRENT_TIMESTAMP RETURNING *',
        [email, email.split('@')[0]]
      );
      res.json({ user: result.rows[0] });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Login failed' });
    }
  });

  app.put('/api/users/:id', async (req, res) => {
    const { name, age, gender, job, hobbies, goals, onboarding_completed } = req.body;
    try {
      // Add missing columns to users table if they don't exist
      await pool.query(`
        ALTER TABLE users 
        ADD COLUMN IF NOT EXISTS age INTEGER,
        ADD COLUMN IF NOT EXISTS gender VARCHAR(50),
        ADD COLUMN IF NOT EXISTS job VARCHAR(255),
        ADD COLUMN IF NOT EXISTS hobbies TEXT,
        ADD COLUMN IF NOT EXISTS goals TEXT,
        ADD COLUMN IF NOT EXISTS onboarding_completed BOOLEAN DEFAULT false;
      `);

      const result = await pool.query(
        'UPDATE users SET name = $1, age = $2, gender = $3, job = $4, hobbies = $5, goals = $6, onboarding_completed = $7 WHERE id = $8 RETURNING *',
        [name, age, gender, job, hobbies, goals, onboarding_completed, req.params.id]
      );
      res.json(result.rows[0]);
    } catch (error) {
      console.error('Update user error:', error);
      res.status(500).json({ error: 'Failed to update user' });
    }
  });

  // Types Routes
  app.get('/api/types', async (req, res) => {
    const userId = req.query.userId;
    if (!userId) return res.status(400).json({ error: 'userId is required' });
    try {
      const result = await pool.query('SELECT * FROM types WHERE user_id = $1 ORDER BY created_at DESC', [userId]);
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch types' });
    }
  });

  app.post('/api/types', async (req, res) => {
    const { userId, name, color, weight } = req.body;
    try {
      const result = await pool.query(
        'INSERT INTO types (user_id, name, color, weight) VALUES ($1, $2, $3, $4) RETURNING *',
        [userId, name, color || '#ffdac1', weight || 10]
      );
      res.json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create type' });
    }
  });

  app.put('/api/types/:id', async (req, res) => {
    const { name, color, weight } = req.body;
    try {
      // Fetch existing to handle partial updates properly
      const existingRes = await pool.query('SELECT * FROM types WHERE id = $1', [req.params.id]);
      if (existingRes.rows.length === 0) return res.status(404).json({ error: 'Not found' });
      const existing = existingRes.rows[0];

      const newName = name !== undefined ? name : existing.name;
      const newColor = color !== undefined ? color : existing.color;
      const newWeight = weight !== undefined ? weight : existing.weight;

      const result = await pool.query(
        'UPDATE types SET name = $1, color = $2, weight = $3 WHERE id = $4 RETURNING *',
        [newName, newColor, newWeight, req.params.id]
      );
      res.json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update type' });
    }
  });

  app.delete('/api/types/:id', async (req, res) => {
    try {
      await pool.query('DELETE FROM types WHERE id = $1', [req.params.id]);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete type' });
    }
  });

  // Goals Routes
  app.get('/api/goals', async (req, res) => {
    const userId = req.query.userId;
    if (!userId) return res.status(400).json({ error: 'userId is required' });
    try {
      const result = await pool.query('SELECT * FROM goals WHERE user_id = $1 ORDER BY created_at DESC', [userId]);
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch goals' });
    }
  });

  app.post('/api/goals', async (req, res) => {
    const { userId, title, description, startDate, endDate } = req.body;
    try {
      const result = await pool.query(
        'INSERT INTO goals (user_id, title, description, start_date, end_date) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [userId, title, description, startDate, endDate]
      );
      res.json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create goal' });
    }
  });

  app.get('/api/goals/:id', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM goals WHERE id = $1', [req.params.id]);
      if (result.rows.length === 0) return res.status(404).json({ error: 'Goal not found' });
      res.json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch goal' });
    }
  });

  app.put('/api/goals/:id', async (req, res) => {
    const { title, description, startDate, endDate, status } = req.body;
    try {
      const result = await pool.query(
        'UPDATE goals SET title = $1, description = $2, start_date = $3, end_date = $4, status = $5 WHERE id = $6 RETURNING *',
        [title, description, startDate, endDate, status, req.params.id]
      );
      res.json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update goal' });
    }
  });

  app.delete('/api/goals/:id', async (req, res) => {
    try {
      await pool.query('DELETE FROM goals WHERE id = $1', [req.params.id]);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete goal' });
    }
  });

  // Tasks Routes
  app.get('/api/goals/:goalId/tasks', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM tasks WHERE goal_id = $1 ORDER BY created_at ASC', [req.params.goalId]);
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  });

  app.post('/api/goals/:goalId/tasks', async (req, res) => {
    const { typeId, title, description, unit, targetValue, targetTotal } = req.body;
    try {
      const result = await pool.query(
        'INSERT INTO tasks (goal_id, type_id, title, description, unit, target_value, target_total) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [req.params.goalId, typeId, title, description, unit, targetValue, targetTotal]
      );
      res.json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create task' });
    }
  });

  app.put('/api/tasks/:id', async (req, res) => {
    const { typeId, title, description, unit, targetValue, targetTotal, status } = req.body;
    try {
      const result = await pool.query(
        'UPDATE tasks SET type_id = $1, title = $2, description = $3, unit = $4, target_value = $5, target_total = $6, status = $7 WHERE id = $8 RETURNING *',
        [typeId, title, description, unit, targetValue, targetTotal, status, req.params.id]
      );
      res.json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update task' });
    }
  });

  app.delete('/api/tasks/:id', async (req, res) => {
    try {
      await pool.query('DELETE FROM tasks WHERE id = $1', [req.params.id]);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete task' });
    }
  });

  // Trackings Routes
  app.get('/api/tasks/:taskId/trackings', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM trackings WHERE task_id = $1 ORDER BY track_date DESC', [req.params.taskId]);
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch trackings' });
    }
  });

  app.post('/api/tasks/:taskId/trackings', async (req, res) => {
    const { value, trackDate, trackNote } = req.body;
    try {
      const result = await pool.query(
        'INSERT INTO trackings (task_id, value, track_date, track_note) VALUES ($1, $2, $3, $4) RETURNING *',
        [req.params.taskId, value, trackDate, trackNote]
      );
      res.json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create tracking' });
    }
  });

  app.delete('/api/trackings/:id', async (req, res) => {
    try {
      await pool.query('DELETE FROM trackings WHERE id = $1', [req.params.id]);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete tracking' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
