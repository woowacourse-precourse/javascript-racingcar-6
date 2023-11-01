export default class InputError extends Error {
  constructor(message) {
    super(message);
    this.name = "InputError";
  }
}
