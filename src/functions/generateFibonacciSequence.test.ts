import { InvalidInputError } from "../Errors/InvalidInputError";
import { generateFibonacciSequence } from "./generateFibonacciSequence";

describe("generateFibonacciSequence", () => {
	const sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21];

	test("generateFibonacciSequence must correctly handle invalid inputs", () => {
		const text = "abc";
		const negativeNumber = -5;
		expect(() => generateFibonacciSequence(text as unknown as number)).toThrowError(InvalidInputError);
		expect(() => generateFibonacciSequence(negativeNumber)).toThrowError(InvalidInputError);
	});

	test("generateFibonacciSequence must return the correct sequence for a given size", () => {
		for (let size = 0; size < 9; size++) {
			let expected = generateFibonacciSequence(size);
			let arr = sequence.slice(0, size);
			if (size === 0) {
				arr = [];
			}
			if (size === 1) {
				arr = [0, 1];
			}
			expect(expected).toEqual(arr);
		}
	});
});
