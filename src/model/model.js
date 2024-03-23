const mongoose = require('mongoose');

// Define a mongoose schema for the 'addDatas' collection
const addDatasSchema = new mongoose.Schema({
    // Define schema fields
    Id: {
        type: String,    
        required: true   
    },
    Name: {
        type: String,   
        required: true    
    },
    employeeId:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
        required:true
    }
}, { timestamps: true });  // Include timestamps for createdAt and updatedAt fields

// Create and export a mongoose model based on the schema
module.exports = mongoose.model('demoNew', addDatasSchema);
