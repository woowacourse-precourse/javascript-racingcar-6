import { MAX_VALUE_OF_ATTEMPTS } from '../constants/attemptsConstants.js';
import {
  MAX_NAME_LENGTH,
  MAX_NUMBER_OF_PLAYERS,
  MIN_NAME_LENGTH,
  MIN_NUMBER_OF_PLAYERS,
} from '../constants/carNameConstants.js';
import {
  ERROR_ATTEMPTS,
  ERROR_NAME_LENGTH,
  ERROR_NUMBEOR_OF_PLAYERS,
} from '../constants/messagesConstants.js';

function isLengthInvalid(name) {
  return name.length < MIN_NAME_LENGTH || name.length > MAX_NAME_LENGTH;
}

function isNumberOfPlayersInvalid(players) {
  return (
    players.length < MIN_NUMBER_OF_PLAYERS ||
    players.length > MAX_NUMBER_OF_PLAYERS
  );
}

function validateLengthOfNames(names) {
  names.forEach((name) => {
    if (isLengthInvalid(name)) {
      throw new Error(ERROR_NAME_LENGTH);
    }
  });
}

function validateNumberOfPlayers(players) {
  if (isNumberOfPlayersInvalid(players)) {
    throw new Error(ERROR_NUMBEOR_OF_PLAYERS);
  }
}

export function validateNames(names) {
  validateLengthOfNames(names);
  validateNumberOfPlayers(names);
}

function isNaturalNumber(number) {
  const pattern = /^[1-9]\d*$/; // 1~9로 시작하는 정수 문자열
  return pattern.test(number);
}

function isTooBig(number) {
  return number > MAX_VALUE_OF_ATTEMPTS;
}

export function validateAttempts(attempts) {
  if (!isNaturalNumber(attempts)) {
    throw new Error(ERROR_ATTEMPTS);
  }

  if (isTooBig(attempts)) {
    throw new Error(ERROR_ATTEMPTS);
  }
}
