
exports.doSomeLogic = (number) => {
	let output = '';

	if (number % 3 === 0)
		output += 'G';

	if (number % 5 === 0)
		output += 'N';

	if (output.length < 1)
		output = number.toString();

	return output;
}