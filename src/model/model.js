const mongoose = require('mongoose');

// Define a mongoose schema for the 'addDatas' collection
const addDatasSchema = new mongoose.Schema({
    // Define schema fields
    Id: {
        type: String,    
        required: true   
    },
    addData: {
        type: String,   
        required: true    
    }
}, { timestamps: true });  // Include timestamps for createdAt and updatedAt fields

// Create and export a mongoose model based on the schema
module.exports = mongoose.model('data', addDatasSchema);
