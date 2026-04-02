import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config({ path: 'e:/G/Kairoly/zip2/.env' });

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

async function run() {
  try {
    // We already have some types/tasks. Simplest is to drop and recreate or alter.
    await pool.query('ALTER TABLE tasks DROP CONSTRAINT IF EXISTS tasks_type_id_fkey;');
    await pool.query('DROP TABLE types CASCADE;');
    await pool.query(`
      CREATE TABLE IF NOT EXISTS types (
        id SERIAL PRIMARY KEY,
        goal_id INTEGER REFERENCES goals(id) ON DELETE CASCADE,
        name VARCHAR(100) NOT NULL,
        color VARCHAR(50) DEFAULT '#ffdac1',
        weight NUMERIC DEFAULT 10,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    await pool.query('ALTER TABLE tasks ADD CONSTRAINT tasks_type_id_fkey FOREIGN KEY (type_id) REFERENCES types(id) ON DELETE CASCADE;');
    console.log('DB Altered successfully!');
  } catch (e) {
    console.error(e);
  } finally {
    await pool.end();
  }
}
run();
