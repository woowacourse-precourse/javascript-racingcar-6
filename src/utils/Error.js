import { ERROR_MESSAGE } from "../constants/message.js";

export class CustomError extends Error {
  constructor(message) {
    super(`${ERROR_MESSAGE.COMMON} ${message}`);
    this.name = this.constructor.name;
  }
}

export class NoInputError extends CustomError {}

export class LongNameError extends CustomError {}

export class DuplicatedNameError extends CustomError {}

export class OneNameError extends CustomError {}

export class NotNumberError extends CustomError {}

export class InvalidMinNumberError extends CustomError {}

export class NotIntegerError extends CustomError {}
