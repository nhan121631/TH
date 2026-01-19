const express = require('express');
const morgan = require('morgan');
const userRoutes = require('./routes/user.route');

const app = express();

// middleware global
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/users', userRoutes);

// health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

module.exports = app;
