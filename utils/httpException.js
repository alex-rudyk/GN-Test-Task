
exports.HttpException = class HttpException extends Error {
	constructor(message, code = HttpStatus.BAD_REQUEST) {
		super(message);

		this.code = code;
	}
}

exports.HttpStatus = {
	OK: 200,
	BAD_REQUEST: 400,
	INTERNAL_SERVER_ERROR: 500
}