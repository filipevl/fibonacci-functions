import { InvalidInputError } from "../Errors/InvalidInputError";
import { getFibonacciValueAtPosition } from "./getFibonacciValueAtPosition";

describe("getFibonacciValueAtPosition", () => {
	const sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21];

	test("getFibonacciValueAtPosition must correctly handle invalid inputs", () => {
		const text = "abc";
		const negativeNumber = -5;

		expect(() => getFibonacciValueAtPosition(text as unknown as number)).toThrowError(InvalidInputError);
		expect(() => getFibonacciValueAtPosition(negativeNumber)).toThrowError(InvalidInputError);
	});

	test("getFibonacciValueAtPosition must return the correct value", () => {
		let position = 5;
		expect(getFibonacciValueAtPosition(position)).toBe(sequence[position]);
		position = 7;
		expect(getFibonacciValueAtPosition(7)).toBe(sequence[position]);
	});
});
