//Use Express
const express = require("express");
const cors = require("cors");
const app = express();

// import the routes
const appRoutes = require("./src/routes/app.router");

//Server Port
app.listen(process.env.PORT || 2000);

// CORS Middleware
const corsOptions = {
  origin: ["https://tiein.ca", "http://localhost:3000"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

// Middleware for json reading.
app.use(express.json());

// Middleware for routes
app.use("/", appRoutes);
