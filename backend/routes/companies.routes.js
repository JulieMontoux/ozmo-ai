const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companies.controller');

/**
 * @swagger
 * tags:
 *   name: Companies
 *   description: Gestion des entreprises
 */

/**
 * @swagger
 * /companies:
 *   post:
 *     summary: Créer une entreprise
 *     tags: [Companies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               industry:
 *                 type: string
 *     responses:
 *       200:
 *         description: Entreprise créée
 */
router.post('/', companyController.create);

/**
 * @swagger
 * /companies:
 *   get:
 *     summary: Liste des entreprises
 *     tags: [Companies]
 *     responses:
 *       200:
 *         description: Liste retournée
 */
router.get('/', companyController.getAll);

module.exports = router;
