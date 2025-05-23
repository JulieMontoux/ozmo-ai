const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../database/ozmo.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erreur de connexion à la base SQLite', err.message);
  } else {
    console.log('Connexion à la base SQLite réussie');
  }
});

// Création des tables à l'initialisation
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      password TEXT,
      name TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS companies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      industry TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS user_company_roles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      company_id INTEGER NOT NULL,
      role TEXT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (company_id) REFERENCES companies(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS strategies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      mois TEXT,
      objectif TEXT,
      canal_prioritaire TEXT,
      messages_cles TEXT,
      checklist TEXT,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS contents (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      type TEXT,
      texte TEXT,
      objectif TEXT,
      statut TEXT,
      date_creation TEXT,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS stats (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      mois TEXT,
      canal TEXT,
      vues INTEGER,
      clics INTEGER,
      engagement INTEGER,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS reports (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      mois TEXT,
      fichier_path TEXT,
      recommandations TEXT,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  console.log("Toutes les tables SQLite ont été initialisées.");
});

module.exports = db;
