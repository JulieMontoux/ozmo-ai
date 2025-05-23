const CompanyModel = require('../models/companies.model');

exports.create = (req, res) => {
  const { name, industry } = req.body;
  CompanyModel.create(name, industry, (err, id) => {
    if (err) return res.status(400).json({ error: 'Erreur création entreprise.' });
    res.json({ message: 'Entreprise créée', id });
  });
};

exports.getAll = (_, res) => {
  CompanyModel.findAll((err, rows) => {
    if (err) return res.status(500).json({ error: 'Erreur récupération entreprises.' });
    res.json(rows);
  });
};