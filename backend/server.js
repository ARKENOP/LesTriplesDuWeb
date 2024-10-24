const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const userRoutes = require('./server/routes/userRoutes');
app.use('/api/users', userRoutes);

// Connexion à MongoDB
mongoose.connect('mongodb://localhost/dbName', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Démarrer le serveur
app.listen(3000, () => console.log('Server is running on port 3000'));
