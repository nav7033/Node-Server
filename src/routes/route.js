const express = require('express');

// Create a new router instance using Express's Router middleware
const router = express.Router();

// Import the controller module which contains the functions to handle HTTP requests
const controller = require('../controllers/controller');

// Define routes and associate them with corresponding controller functions
// POST request to create new data
router.post("/api/add", controller.createData); 
 // GET request to get count of requests
router.get("/api/count", controller.resCount); 
// PUT request to update existing data
router.put("/api/update/:id", controller.updateData); 

// Export the router to make it accessible in other modules
module.exports = router;
