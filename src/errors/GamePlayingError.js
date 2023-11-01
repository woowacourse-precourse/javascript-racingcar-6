export default class GamePlayingError extends Error {
  #TEMPLETE = '[ERROR]';

  constructor(message) {
    super();
    super.message = `${this.#TEMPLETE} ${message}`;
    this.type = this.constructor.name;
  }
}
