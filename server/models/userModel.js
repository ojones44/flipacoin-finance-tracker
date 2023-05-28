// Mongoose import
import mongoose, { Schema } from 'mongoose';
import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Validator
import validator from 'validator';

// Data types import
import {
	requiredNameString,
	requiredEmailString,
	requiredPasswordString,
} from './dataTypes.js';

// User model
const userModel = {
	name: requiredNameString,
	email: requiredEmailString,
	password: requiredPasswordString,
};

// Create new schema
const userSchema = new Schema(userModel, { timestamps: true });

// Create mongoose model
const userSchemaModel = mongoose.model('User', userSchema);

// Mongoose middleware
// User.pre('save', async function () {
// 	const salt = await bycrypt.genSalt(10);
// 	this.password = await bycrypt.hash(this.password, salt);
// });

// userSchema.methods.generateJWT = function () {
// 	return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
// 		expiresIn: process.env.JWT_EXPIRES_IN,
// 	});
// };

export default userSchemaModel;
