const express = require("express");
const app = express();
const db = require("./db"); // Ensure this file properly initializes your database connection
const Person = require("./models/person");
const bodyParser = require("body-parser");

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Root route


// POST route for creating a new person
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes);


// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
