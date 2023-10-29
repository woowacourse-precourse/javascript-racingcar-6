import { NEW_LINE, ONE, STICK, ZERO } from '../constants/constants.js';

function makeStick(moveCount) {
  let count = moveCount;
  let sticks = STICK.newSticks;
  while (count !== ZERO) {
    sticks += STICK.oneStick;
    count -= ONE;
  }
  return sticks;
}

export default function makeResultStringTemplate(carName, moveCount) {
  return `${carName} : ${makeStick(moveCount)}${NEW_LINE}`;
}
