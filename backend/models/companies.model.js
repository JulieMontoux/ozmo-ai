const db = require('../config/db');

const CompanyModel = {
  create: (name, industry, cb) => {
    db.run(`INSERT INTO companies (name, industry) VALUES (?, ?)`, [name, industry], function (err) {
      cb(err, this?.lastID);
    });
  },

  findAll: (cb) => {
    db.all(`SELECT * FROM companies`, [], cb);
  }
};

module.exports = CompanyModel;