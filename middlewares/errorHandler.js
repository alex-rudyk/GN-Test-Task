const { HttpException, HttpStatus } = require("../utils/httpException")

exports.errorHandler = (error, req, res, next) => {
	if (error instanceof HttpException) {
		res.status(error.code).json({ message: error.message });
	} else {
		console.error(error);

		res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Something went wrong...' });
	}
}