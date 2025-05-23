const RoleModel = require('../models/roles.model');

exports.assignRole = (req, res) => {
  const { user_id, company_id, role } = req.body;
  RoleModel.assign(user_id, company_id, role, (err, id) => {
    if (err) return res.status(400).json({ error: "Erreur d'assignation de rôle."});
    res.json({ message: 'Rôle assigné', id });
  });
};

exports.getRolesByUser = (req, res) => {
  const userId = req.params.userId;
  RoleModel.getByUserId(userId, (err, rows) => {
    if (err) return res.status(500).json({ error: 'Erreur de récupération des rôles.' });
    res.json(rows);
  });
};