class UserInputError extends Error {
  #TEMPLETE = '[ERROR]';

  constructor(message) {
    super();
    super.message = `${this.#TEMPLETE} ${message}`;
    this.type = this.constructor.name;
  }
}

export class CarNamesError extends UserInputError {}
export class TryRoundError extends UserInputError {}
