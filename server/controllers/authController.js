// Imports
import asyncHandler from 'express-async-handler';
import HTTP_STATUS from '../data/httpStatus.js';
import _ from 'lodash';
import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Database
import User from '../models/userModel.js';

// Error handlers
import {
	BadRequestError,
	UnauthenticatedError,
} from '../errors/customErrors.js';

// Helper functions

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES_IN,
	});
};

const hashPassword = async (password) => {
	const salt = await bycrypt.genSalt(10);
	const hashedPassword = await bycrypt.hash(password, salt);
	return hashedPassword;
};

const comparePassword = async (enteredPassword, dbPassword) => {
	const isMatched = await bycrypt.compare(enteredPassword, dbPassword);
	return isMatched;
};

// Managing login and registration

// @description   Get users list
// @route         GET /api/auth
// @access        Private
const getUsers = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id).select('-password');
	res.send(`User: ${user}`);
});

// @description   Login user
// @route         POST /api/auth/login
// @access        Public
const login = asyncHandler(async (req, res, next) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			throw new BadRequestError('Please provide email and password.');
		}

		const user = await User.findOne({ email }).select('+password');

		if (!user) {
			throw new BadRequestError('Invalid login credentials.');
		}

		const passwordMatched = await comparePassword(password, user.password);

		if (user && passwordMatched) {
			res.status(HTTP_STATUS.OK).json({
				_id: user.id,
				name: user.name,
				email: user.email,
				token: generateToken(user.id),
			});
		} else {
			throw new UnauthenticatedError('Invalid login credentials.');
		}
	} catch (error) {
		next(error);
	}
});

// @description   Register user
// @route         POST /api/auth/register
// @access        Public
const register = asyncHandler(async (req, res, next) => {
	try {
		const { name, email, password } = req.body;

		if (!name || !email || !password) {
			throw new BadRequestError('Please provide data in all fields');
		}

		if (password && password.length < 8) {
			throw new BadRequestError(
				'Invalid password, must be at least 8 characters'
			);
		}

		const userAlreadyRegistered = await User.findOne({ email });

		if (userAlreadyRegistered) {
			throw new BadRequestError('Already registered. Please login.');
		}

		const newUser = await User.create({
			name: _.capitalize(name),
			email: _.toLower(email),
			password: password && (await hashPassword(password)),
		});

		res.status(HTTP_STATUS.OK).json({
			_id: newUser.id,
			name: newUser.name,
			email: newUser.email,
			token: generateToken(newUser.id),
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
