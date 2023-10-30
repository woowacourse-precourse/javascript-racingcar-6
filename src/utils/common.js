import { validateBetweenOneAndNine } from './validation.js';

export function parseNames(str) {
  return str.split(',');
}

export function parseNumber(args) {
  return Number(args);
}

export function getDistanceToMove(randomNumber) {
  validateBetweenOneAndNine(randomNumber);

  if (randomNumber < 3) return 0;

  return 1;
}

export function getDistanceString(distanceNumber) {
  return '-'.repeat(distanceNumber);
}
