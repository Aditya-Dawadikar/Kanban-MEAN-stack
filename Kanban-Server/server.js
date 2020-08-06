const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

//routes
const columnRoutes = require('./app/routes/column');
const cardRoutes = require('./app/routes/card');

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connect DB
mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected to database");
});

app.use('/column', columnRoutes);
app.use('/card', cardRoutes);

//start server
app.listen(3000, () => {
    console.log("server is running on port 3000");
})