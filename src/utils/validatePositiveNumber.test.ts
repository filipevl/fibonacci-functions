import { InvalidInputError } from "../Errors/InvalidInputError";
import { validatePositiveNumber } from "./validatePositiveNumber";

describe("validatePositiveNumber", () => {
	const values = [-1, -2, -3, "um", [], {}, null, undefined];

	test("validatePositiveNumber must correctly handle invalid inputs", () => {
		values.map((v) => {
			expect(() => validatePositiveNumber(values)).toThrowError(InvalidInputError);
		});
	});
});
