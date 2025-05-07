const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const messageRouter = require('./routes/messageRouter');

const app = express();
const PORT = 3003;
const DB_PATH = "mongodb+srv://Ayush9756:Ayush9756@firstcluster.kabexbf.mongodb.net/portfolio?retryWrites=true&w=majority&appName=firstcluster";
// CORS must come early
app.use(cors({
  origin: 'http://localhost:5173', // frontend URL
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
mongoose.connect(DB_PATH)
  .then(() => {
    console.log('Connected to Mongo');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
