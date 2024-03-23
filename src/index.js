// Import necessary modules
const express = require('express'); // Express framework for Node.js
const bodyParser = require('body-parser'); // Middleware to parse request body
const route = require('./routes/route'); // Import route handler
const mongoose = require('mongoose'); // MongoDB ORM

// Initialize Express application
const app = express();

// Middleware to parse JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB database
mongoose.connect("mongodb+srv://nav7033:n2cGJvLjcd2n6Jsk@cluster0.uhbum.mongodb.net/neuron?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("Connected to MongoDB...")) // Success message upon successful connection
    .catch((err) => console.error("Connection failed:", err)); // Error message if connection fails

// Define root route and use route handler
app.use('/', route);

// Start the server, listen on the specified port or default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Express app running on port ' + PORT);
});
