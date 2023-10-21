// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./routes/auth');
const posts = require('./routes/posts');
const comments = require('./routes/comments');

const app = express();

// Database configuration and connection
const db = process.env.MONGODB_URI || 'mongodb://localhost/instagram-clone'; // Replace with your actual database URI
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport configuration
app.use(passport.initialize());
require('./config/passport')(passport); // Assuming your Passport configuration is in a separate file

// Routes configuration
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/comments', comments);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
