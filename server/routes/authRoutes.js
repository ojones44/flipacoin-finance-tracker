import express from 'express';

import {
	getUsers,
	login,
	register,
	updateUser,
	deleteUser,
} from '../controllers/authController.js';

import protectRoute from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protectRoute, getUsers);
router.post('/login', login);
router.post('/register', register);
router.put('/:id', protectRoute, updateUser);
router.delete('/:id', protectRoute, deleteUser);

export default router;
