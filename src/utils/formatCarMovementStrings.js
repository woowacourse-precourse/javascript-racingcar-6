import { NEW_LINE, STICK } from '../constants/constants.js';

export default function formatCarMovementStrings(carName, moveCount) {
  return `${carName} : ${STICK.repeat(moveCount)}${NEW_LINE}`;
}
