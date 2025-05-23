const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gestion des utilisateurs
 */

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Enregistrer un nouvel utilisateur
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Utilisateur créé
 */
router.post('/register', userController.register);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Connexion utilisateur
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Connexion réussie
 */
router.post('/login', userController.login);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Liste des utilisateurs
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Liste retournée
 */
router.get('/', userController.getAllUsers);

module.exports = router;
