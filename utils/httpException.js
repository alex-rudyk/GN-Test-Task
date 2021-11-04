
exports.HttpException = class HttpException extends Error {
	constructor(message, code = HttpStatus.BAD_REQUEST) {
		super(message);

		this.code = code;
	}
}

exports.HttpStatus = {
	OK: 200,
	CREATED: 201,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	INTERNAL_SERVER_ERROR: 500
}