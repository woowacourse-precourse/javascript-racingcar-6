class InputError extends Error {
  constructor(message) {
    super("[ERROR] " + message);
    this.name = "InputError";
  }
}

export default InputError;
