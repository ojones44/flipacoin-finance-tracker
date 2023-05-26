const notFoundMiddleware = (req, res) => {
	const statusCode = 404;

	res.status(statusCode);
	res.json({
		message: 'Route does not exist',
	});
};

export default notFoundMiddleware;
