const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5001;
// const googleApi = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

// console.log('test googleApi', googleApi);

// Middleware Includes
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route Includes
const userRouter = require('./routes/user.router');
const eventRouter = require('./routes/event.router');
const chatboxRouter = require('./routes/chatbox.router');

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

// Passport Session Configuration
app.use(sessionMiddleware);

// Start Passport Sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/user', userRouter);
app.use('/api/event', eventRouter);
app.use('/api/chatbox', chatboxRouter);

// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
