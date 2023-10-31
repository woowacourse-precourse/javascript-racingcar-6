import {
  MAX_NAME_LENGTH,
  MAX_NUMBER_OF_PLAYERS,
  MIN_NAME_LENGTH,
  MIN_NUMBER_OF_PLAYERS,
} from '../constants/carNameConstants.js';
import {
  ERROR_NAME_LENGTH,
  ERROR_NUMBER_OF_PLAYERS,
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
    throw new Error(ERROR_NUMBER_OF_PLAYERS);
  }
}

export default function validateNames(names) {
  validateLengthOfNames(names);
  validateNumberOfPlayers(names);
}
