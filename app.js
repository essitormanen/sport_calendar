const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { constants } = require('buffer');
const cors = require('cors');

const eventRouter = require('./routes/event');
const teamRouter = require('./routes/team');
const sportRouter = require('./routes/sport');
const venueRouter = require('./routes/venue');
const indexRouter = require('./routes/index');


const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


//these are the routers for each table
app.use('/api/event', eventRouter);
app.use('/api/team', teamRouter);
app.use('/api/sport', sportRouter);
app.use('/api/venue', venueRouter);
app.use('/api', indexRouter);


module.exports = app;
