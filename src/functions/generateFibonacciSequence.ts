import { validatePositiveNumber } from "../utils/validatePositiveNumber";

export const generateFibonacciSequence = (size: number) => {
	const sequence: number[] = [0, 1];

	validatePositiveNumber(size);

	if (size === 0) {
		return [];
	}

	for (let i = 2; i < size; i++) {
		const { length: sequenceLength } = sequence;
		const last = sequence[sequenceLength - 1];
		const penultimate = sequence[sequenceLength - 2];

		sequence.push(last + penultimate);
	}

	return sequence;
};
