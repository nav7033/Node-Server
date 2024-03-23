// Import the model module which contains the mongoose model for database operations
const addModel = require('../model/model');

// Function to check if a value is valid
const isValid = function (value) {
    if (typeof value == 'undefined' || value === null) return false;
    if (typeof value == 'string' && value.trim().length === 0) return false;
    return true;
};

// Variables to keep track of add and update counts
let addCount = 0;
let updateCount = 0;

// Function to create new data
const createData = async function (req, res) {
    try {
        const Data = req.body;
        // Check if request body is empty
        if (Object.keys(Data).length === 0) {
            return res.status(400).send({ status: false, msg: "Data is required" });
        }
        // Validate Id and addData fields
        if (!isValid(Data.Id)) {
            return res.status(400).send({ status: false, msg: "Id is required" });
        }
        if (!isValid(Data.addData)) {
            return res.status(400).send({ status: false, msg: "Data is required" });
        }
        // Create new document based on request data
        const addDatas = {
            Id: Data.Id.toString(),
            addData: Data.addData.toString()
        };
        // Increment add count
        addCount++;
        // Save data to the database
        const result = await addModel.create(addDatas);
        return res.status(201).send({ status: true, data: result });
    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message });
    }
};

// Function to update existing data
const updateData = async function (req, res) {
    try {
        const id = req.params.id;
        const Data = req.body;
        // Check if request body is empty
        if (Object.keys(Data).length === 0) {
            return res.status(400).send({ status: false, msg: "Enter the data to update" });
        }
        // Validate id and addData fields
        if (!isValid(id)) {
            return res.status(400).send({ status: false, msg: "Id is required" });
        }
        if (!isValid(Data.addData)) {
            return res.status(400).send({ status: false, msg: "Enter the data to update" });
        }
        // Update data in the database
        const addDatas = {
            addData: Data.addData.toString()
        };
        // Increment update count
        updateCount++;
        // Find and update document in the database
        let updated = await addModel.findOneAndUpdate({ Id: id.toString() }, { $set: addDatas }, { new: true });
        // Check if document was found and updated
        if (!updated) {
            return res.status(404).send({ status: false, msg: "Data not found" });
        }
        return res.status(200).send({ status: true, data: updated });
    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message });
    }
};

// Function to get count of add and update requests
const resCount = async function (req, res) {
    try {
        return res.status(200).send({ status: true, data: { addCount: addCount, updateCount: updateCount } });
    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message });
    }
};

// Export the controller functions to make them accessible in other modules
module.exports.createData = createData;
module.exports.updateData = updateData;
module.exports.resCount = resCount;
