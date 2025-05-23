const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'OZMO AI API',
      version: '1.0.0',
      description: 'Documentation de l’API OZMO AI',
    },
    servers: [
      {
        url: 'http://localhost:5001/api',
        description: 'Serveur local',
      },
    ],
  },
  apis: ['./routes/*.routes.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerUi, swaggerSpec };
