//Use Express
const express = require("express");
const app = express();

// import the routes
const appRoutes = require("./src/routes/app.router");

//Server Port
app.listen(process.env.PORT || 2000);

// CORS Middleware
app.use(cors({origin: 'http://localhost:3000'}));

// Middleware for json reading.
app.use(express.json());

// Middleware for routes
app.use("/", appRoutes);