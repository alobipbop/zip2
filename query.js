import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config({ path: 'e:/G/Kairoly/zip2/.env' });

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

async function run() {
  try {
    const goals = await pool.query('SELECT id, title, status FROM goals;');
    console.log("Goals:", goals.rows);
    const types = await pool.query('SELECT id, goal_id, name FROM types;');
    console.log("Types:", types.rows);
    const tasks = await pool.query('SELECT id, goal_id, type_id, title FROM tasks;');
    console.log("Tasks:", tasks.rows);
  } catch (e) {
    console.error(e);
  } finally {
    await pool.end();
  }
}
run();
