import HTTP_STATUS from '../data/httpStatus.js';

const defaultError = {
	statusCode: HTTP_STATUS.BAD,
	message: 'There has been an unexptected error. Please try again.',
};

const setDefaultError = (err) => {
	(defaultError.statusCode =
		err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR),
		(defaultError.message =
			`Invalid Data: ${err.message}` ||
			'Something went wrong, please try again later.');
};

const setValidationError = (err) => {
	defaultError.statusCode = HTTP_STATUS.BAD;
	defaultError.message = `Invalid Data: ${Object.values(err.errors)
		.map((item) => item.message)
		.join(', ')}`;
};

const setDuplicateError = (err) => {
	defaultError.statusCode = HTTP_STATUS.BAD;
	defaultError.message = `${err.keyValue.email} already exists. Please use another email address or login.`;
};

export { defaultError, setDefaultError, setValidationError, setDuplicateError };
