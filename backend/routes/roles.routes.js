const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roles.controller');

/**
 * @swagger
 * tags:
 *   name: Roles
 *   description: Rattachement des utilisateurs aux entreprises
 */

/**
 * @swagger
 * /roles:
 *   post:
 *     summary: Assigner un utilisateur à une entreprise avec un rôle
 *     tags: [Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *               company_id:
 *                 type: integer
 *               role:
 *                 type: string
 *     responses:
 *       200:
 *         description: Rôle assigné
 */
router.post('/', roleController.assignRole);

/**
 * @swagger
 * /roles/{userId}:
 *   get:
 *     summary: Rôles de l'utilisateur par ID
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Rôles retournés
 */
router.get('/:userId', roleController.getRolesByUser);

module.exports = router;
