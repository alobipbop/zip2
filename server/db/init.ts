import pool from './connection.js';

export async function initDB() {
  try {
    const client = await pool.connect();
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash TEXT,
        name VARCHAR(255),
        avatar TEXT,
        age INTEGER,
        gender VARCHAR(50),
        onboarding_completed BOOLEAN DEFAULT FALSE,
        last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS goals (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        title VARCHAR(200) NOT NULL,
        description TEXT,
        status VARCHAR(50) DEFAULT 'active',
        start_date TIMESTAMP,
        end_date TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS types (
        id SERIAL PRIMARY KEY,
        goal_id INTEGER REFERENCES goals(id) ON DELETE CASCADE,
        name VARCHAR(64) NOT NULL,
        color VARCHAR(50) DEFAULT '#ffdac1',
        weight NUMERIC DEFAULT 10,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS tasks (
        id SERIAL PRIMARY KEY,
        goal_id INTEGER REFERENCES goals(id) ON DELETE CASCADE,
        type_id INTEGER REFERENCES types(id) ON DELETE CASCADE,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255),
        status INTEGER DEFAULT 1,
        unit VARCHAR(50),
        target_value NUMERIC,
        target_total NUMERIC,
        weight NUMERIC DEFAULT 10,
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

    // Migration: add weight column to tasks if not exists
    await client.query(`
      ALTER TABLE tasks ADD COLUMN IF NOT EXISTS weight NUMERIC DEFAULT 10;
    `);

    console.log('✅ Database initialized successfully');
    client.release();
  } catch (error) {
    console.error('❌ Error initializing database:', error);
    throw error;
  }
}