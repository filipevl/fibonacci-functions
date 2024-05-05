import { validatePositiveNumber } from "../utils/validatePositiveNumber";
import { generateFibonacciSequence } from "./generateFibonacciSequence";

export const getFibonacciValueAtPosition = (position: number) => {
	validatePositiveNumber(position);

	const sequence = generateFibonacciSequence(position + 1);

	return sequence[position];
};
