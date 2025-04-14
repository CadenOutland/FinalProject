const express = require('express');
const db = require('./db');
const cors = require('cors');

const clientRoutes = require('./routes/clients');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/clients', clientRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

module.exports = app;