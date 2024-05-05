import { InvalidInputError } from "../Errors/InvalidInputError";

export const validatePositiveNumber = (value: any) => {
	if (typeof value !== "number" || value < 0) {
		throw new InvalidInputError();
	}
};
