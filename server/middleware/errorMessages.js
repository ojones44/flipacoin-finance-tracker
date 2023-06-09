import HTTP_STATUS from '../data/httpStatus.js';

const defaultError = {
	statusCode: HTTP_STATUS.BAD,
	message: 'Unexpected error. Please try again.',
};

const setDefaultError = (err) => {
	(defaultError.statusCode =
		err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR),
		(defaultError.message =
			`${err.message}` || 'Something went wrong, please try again later.');
};

const setValidationError = (err) => {
	defaultError.statusCode = HTTP_STATUS.BAD;
	defaultError.message = `${Object.values(err.errors)
		.map((item) => item.message)
		.join(', ')}`;
};

const setDuplicateError = (err) => {
	defaultError.statusCode = HTTP_STATUS.BAD;
	defaultError.message = `${err.keyValue.email} already exists. Please login.`;
};

export { defaultError, setDefaultError, setValidationError, setDuplicateError };
