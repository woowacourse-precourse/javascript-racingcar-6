import CustomError from './CustomError.js';

class DriverNamesError extends CustomError {
	constructor(message) {
		super(message);
	}
}

export default DriverNamesError;
