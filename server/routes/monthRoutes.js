import express from 'express';

import {
	getMonths,
	addMonth,
	updateMonth,
	deleteMonth,
} from '../controllers/monthController.js';

// TODO: setup JWT route protection
// const { protect } = require("../middleware/authMiddleware.cjs");

const router = express.Router();

router.get('/', getMonths);
router.post('/add', addMonth);
router.put('/:id', updateMonth);
router.delete('/:id', deleteMonth);

export default router;
