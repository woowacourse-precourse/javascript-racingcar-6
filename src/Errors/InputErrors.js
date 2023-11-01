import {
  NAME_MAX,
  NAME_MIN,
  IS_EMPTY_ERROR,
  VALIDATE_CAR_NAME_ERROR,
  VALIDATE_GAME_ROUND_ERROR,
} from '../Utils/Define';

export const isEmpty = (input) =>
  input.trim() === '' || input.trim() === ' ' ? IS_EMPTY_ERROR : null;

export const validateCarName = (input) =>
  input.length < NAME_MIN || input.length > NAME_MAX
    ? VALIDATE_CAR_NAME_ERROR
    : null;

export const validateGameRound = (input) =>
  Number.isNaN(Number(input)) ? VALIDATE_GAME_ROUND_ERROR : null;
