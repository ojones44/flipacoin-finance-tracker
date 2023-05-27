// Imports
import asyncHandler from 'express-async-handler';

// Managing the monthly finance overviews

// @description   Get month data
// @route         GET /api/month
// @access        Private
const getMonths = asyncHandler(async (req, res) => {
	res.send('Get all months of finances');
});

// @description   Add a new month of data
// @route         PUT /api/month/add
// @access        Private
const addMonth = asyncHandler(async (req, res) => {
	res.send('Added new month of finances');
});

// @description   Update data in the month
// @route         PUT /api/month/:id
// @access        Private
const updateMonth = asyncHandler(async (req, res) => {
	res.send('Update finances for the this month');
});

// @description   Delete month
// @route         DELETE /api/month/:id
// @access        Private
const deleteMonth = asyncHandler(async (req, res) => {
	res.send('Delete month of data');
});

export { getMonths, addMonth, updateMonth, deleteMonth };
