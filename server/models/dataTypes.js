// Validator
import validator from 'validator';

// Creating objects for model types

const requiredString = {
	type: String,
	required: [true, 'This field is required'],
};

const requiredNameString = {
	type: String,
	required: [true, 'Please input your name'],
	minlength: 2,
	maxlength: 20,
	trim: true,
};

const requiredEmailString = {
	type: String,
	required: [true, 'Please input your email address'],
	validate: {
		validator: validator.isEmail,
		message: 'Please provide a valid email address',
	},
	unique: true,
};

const requiredPasswordString = {
	type: String,
	required: [true, 'Please input a password'],
	minlength: 8,
	select: false,
};

const avatarModel = {
	top: String,
	accessories: String,
	hairColor: String,
	facialHair: String,
	facialHairColor: String,
	clothes: String,
	fabricColor: String,
	eyes: String,
	eyebrows: String,
	mouth: String,
	skin: String,
};

export {
	requiredString,
	requiredNameString,
	requiredEmailString,
	requiredPasswordString,
	avatarModel,
};
