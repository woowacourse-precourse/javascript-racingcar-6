export default class RacingCarError extends Error {
  constructor(message) {
    super(`[ERROR] ${message}`);
  }
}
