import { DIVIDER, ERROR_PREFIX } from './constants.js';

export const errorMessage = (issue) => {
  return `${ERROR_PREFIX}${issue}`;
};

export const stringToArray = (input) => {
  return input.split(DIVIDER);
};
