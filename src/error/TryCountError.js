import CustomError from './CustomError.js';

class TryCountError extends CustomError {
	constructor(message) {
		super(message);
	}
}

export default TryCountError;
