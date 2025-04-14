const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./lancerlink.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS clients (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      phone TEXT
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      client_id INTEGER,
      title TEXT,
      status TEXT,
      FOREIGN KEY(client_id) REFERENCES clients(id)
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS invoices (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      project_id INTEGER,
      amount REAL,
      due_date TEXT,
      is_paid INTEGER DEFAULT 0,
      FOREIGN KEY(project_id) REFERENCES projects(id)
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      content TEXT,
      client_id INTEGER,
      project_id INTEGER,
      FOREIGN KEY(client_id) REFERENCES clients(id),
      FOREIGN KEY(project_id) REFERENCES projects(id)
    );
  `);
});

module.exports = db;