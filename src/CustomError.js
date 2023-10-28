
class CustomError extends Error {
	constructor(value, ...params) {
		super(...params);
		this.message = [...params];
		this.name = value;
	}
}
export default CustomError;
