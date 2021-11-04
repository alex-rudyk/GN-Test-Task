const { calculatingStringByNumber, validateInputValue } = require("../services/appGN");
const { HttpException, HttpStatus } = require("../utils/httpException");

describe('Calculating String By Number', () => {
	it('If the integer is a multiple of 3, it should return "G"', () => {
		const number = 6;

		const output = calculatingStringByNumber(number);

		expect(output).toEqual('G');
	});

	it('If the integer is a multiple of 5, it should return "N"', () => {
		const number = 5;

		const output = calculatingStringByNumber(number);

		expect(output).toEqual('N');
	});

	it('If the integer is a multiple of both 3 and 5, it should return "GN"', () => {
		const number = 15;

		const output = calculatingStringByNumber(number);
		
		expect(output).toEqual('GN');
	});

	it('If the integer is a multiple of 3 or 5, the provided integer should be returned.', () => {
		const number = 11;

		const output = calculatingStringByNumber(number);

		expect(output).toEqual(`${number}`);
	});
});

describe('Input value validator', () => {
	it('Passing correct data to validate function', () => {
		const input = 5;

		const result = validateInputValue(input);

		expect(result).toEqual(true);
	});

	it('Passing string value to validate function', () => {
		const input = '5';

		const fn = () => {
			validateInputValue(input);
		}

		expect(fn).toThrowError(new HttpException('Param must be a number', HttpStatus.BAD_REQUEST));
	});
});