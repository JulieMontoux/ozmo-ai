require('dotenv').config();
const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/users.routes');
const companyRoutes = require('./routes/companies.routes');
const roleRoutes = require('./routes/roles.routes');

const { swaggerUi, swaggerSpec } = require('./swagger');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/roles', roleRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
