const UserModel = require('../models/users.model');

exports.register = (req, res) => {
  const { email, password, name } = req.body;
  UserModel.create(email, password, name, (err, id) => {
    if (err) return res.status(400).json({ error: 'Erreur création utilisateur.' });
    res.json({ message: 'Utilisateur créé', id });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  UserModel.findByEmail(email, (err, user) => {
    if (!user || user.password !== password) return res.status(401).json({ error: 'Login invalide' });
    res.json({ message: 'Connecté', user });
  });
};

exports.getAllUsers = (_, res) => {
  UserModel.findAll((err, rows) => {
    if (err) return res.status(500).json({ error: 'Erreur récupération utilisateurs.' });
    res.json(rows);
  });
};
