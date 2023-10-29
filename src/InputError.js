class InputError extends Error {
  constructor(phrase) {
    super(`[ERROR] ${phrase}`);
  }
}

export default InputError;
