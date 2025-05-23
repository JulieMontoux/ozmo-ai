const db = require('../config/db');

const UserModel = {
  create: (email, password, name, cb) => {
    db.run(`INSERT INTO users (email, password, name) VALUES (?, ?, ?)`, [email, password, name], function (err) {
      cb(err, this?.lastID);
    });
  },

  findByEmail: (email, cb) => {
    db.get(`SELECT * FROM users WHERE email = ?`, [email], cb);
  },

  findAll: (cb) => {
    db.all(`SELECT * FROM users`, [], cb);
  }
};

module.exports = UserModel;
