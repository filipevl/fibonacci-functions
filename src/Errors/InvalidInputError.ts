export class InvalidInputError extends Error {
	constructor() {
		super("Length must be a non-negative number");
	}
}