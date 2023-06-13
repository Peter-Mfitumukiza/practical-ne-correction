const express = require('express');
const cors  = require('cors');
const authRoutes = require('./routes/auth.routes');
const ownerRoutes = require('./routes/owner.routes');
const vehicleRoutes = require('./routes/vehicle.routes');

// connect to database
require('./utils/dbConnection');

// configure env variables
require('dotenv').config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/owner", ownerRoutes);
app.use("/api/v1/vehicle", vehicleRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Vehicle Managment System!');
});


// server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
});