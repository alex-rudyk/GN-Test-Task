
exports.calculatingStringByNumber = (number) => {
	let output = '';

	// If the number is a multiple of 3, add 'G' to the output string
	if (number % 3 === 0)
		output += 'G';

	// If the number is a multiple of 5, add 'N' to the output string
	if (number % 5 === 0)
		output += 'N';

	// If the output string is an empty number does not meet any of the conditions. Add to the output string this number
	if (output.length < 1)
		output = number.toString();

	return output;
}