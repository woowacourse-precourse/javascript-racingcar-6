export default class RacingGameError extends Error {
  static PREFIX = "[ERROR]";

  constructor(message) {
    super(`\n${RacingGameError.PREFIX} : ${message}\n`);
    this.name = this.constructor.name;
  }
}
