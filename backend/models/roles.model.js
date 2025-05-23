const db = require('../config/db');

const RoleModel = {
  assign: (user_id, company_id, role, cb) => {
    db.run(`INSERT INTO user_company_roles (user_id, company_id, role) VALUES (?, ?, ?)`, [user_id, company_id, role], function (err) {
      cb(err, this?.lastID);
    });
  },

  getByUserId: (userId, cb) => {
    db.all(`
      SELECT ucr.id, u.name AS user_name, c.name AS company_name, ucr.role
      FROM user_company_roles ucr
      JOIN users u ON ucr.user_id = u.id
      JOIN companies c ON ucr.company_id = c.id
      WHERE ucr.user_id = ?
    `, [userId], cb);
  }
};

module.exports = RoleModel;
