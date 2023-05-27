// Imports
import asyncHandler from 'express-async-handler';
import HTTP_STATUS from '../data/httpStatus.js';
import _ from 'lodash';
import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Database
import User from '../models/userModel.js';

// Managing login and registration

// @description   Get users list
// @route         GET /api/auth
// @access        Private
const getUsers = asyncHandler(async (req, res) => {
	res.send('Get all users');
});

// @description   Login user
// @route         POST /api/auth/login
// @access        Public
const login = asyncHandler(async (req, res) => {
	res.send('Login route');
});

// @description   Register user
// @route         POST /api/auth/register
// @access        Public
const register = asyncHandler(async (req, res, next) => {
	try {
		if (req.body.password.length < 8) {
			throw new Error('Invalid password, must be at least 8 characters');
		}

		const salt = await bycrypt.genSalt(10);
		const hashedPassword = await bycrypt.hash(req.body.password, salt);

		const newUser = await User.create({
			name: _.capitalize(req.body.name),
			email: _.toLower(req.body.email),
			password: hashedPassword,
		});

		res.status(HTTP_STATUS.OK).json({
			_id: newUser.id,
			name: newUser.name,
			email: newUser.email,
		});
	} catch (error) {
		next(error);
	}
});

// @description   Update user
// @route         PUT /api/auth/:id
// @access        Private
const updateUser = asyncHandler(async (req, res) => {
	res.send('Update user');
});

// @description   Delete user
// @route         DELETE /api/auth/:id
// @access        Private
const deleteUser = asyncHandler(async (req, res) => {
	res.send('Delete user');
});

export { getUsers, login, register, updateUser, deleteUser };
