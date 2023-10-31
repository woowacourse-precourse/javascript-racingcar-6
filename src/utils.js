import { DIVIDER, ERROR_PREFIX } from './constants.js';

export const errorMessage = (issue) => {
  return `${ERROR_PREFIX}${issue}`;
};

export const stringToArray = (input) => {
  return input.split(DIVIDER);
};

export const getGreatestNumber = (array) => {
  let greatestNumber = 0;
  array.forEach((item) => {
    if (item > greatestNumber) greatestNumber = item;
  });

  return greatestNumber;
};
