const { doSomeLogic } = require("../services/appGN");

exports.appGNCtr = async (req, res) => {
	const number = parseInt(req.params.number);

	// Check our params.
	if (!number || typeof number !== 'number') {
		res.status(400).json({ message: 'Param must be a number' })
		return;
	}
	
	const output = doSomeLogic(number);

	res.status(200).json({ output });
}