const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();

const app = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => res.json({ message: 'Varsha Portfolio API Running' }));

app.use((req, res) => res.status(404).json({ message: 'Route not found' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));