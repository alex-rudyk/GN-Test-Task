const { calculatingStringByNumber, validateInputValue } = require("../services/appGN");
const { HttpStatus } = require("../utils/httpException");

exports.appGNCtr = async (req, res, next) => {
	try {
		const number = parseInt(req.params.number);

		validateInputValue(number);

		const output = calculatingStringByNumber(number);

		res.status(HttpStatus.OK).json({ output });
	} catch(error) {
		next(error);
	}	
}