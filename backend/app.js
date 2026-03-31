const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv=require('dotenv')
dotenv.config()
const messageRouter = require('./routes/messageRouter');

const app = express();
const PORT = 3003;

// CORS must come early
app.use(cors({
  origin: process.env.CLIENT_URL, // frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

// JSON parsers BEFORE routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount route
app.use("/api/contact", messageRouter);

// Root
app.get('/', (req, res) => res.send('API Working'));

// MongoDB Connect & Start Server
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to Mongo');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
