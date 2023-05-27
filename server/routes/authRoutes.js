import express from 'express';

import {
	getUsers,
	login,
	register,
	updateUser,
	deleteUser,
} from '../controllers/authController.js';

// TODO: setup JWT route protection
// const { protect } = require("../middleware/authMiddleware.cjs");

const router = express.Router();

router.get('/', getUsers);
router.post('/login', login);
router.post('/register', register);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
