import { NEW_LINE, STICK } from '../constants/constants.js';

function makeStick(moveCount) {
  let count = moveCount;
  let sticks = STICK.newSticks;
  while (count !== 0) {
    sticks += STICK.oneStick;
    count -= 1;
  }
  return sticks;
}

export default function makeResultStringTemplate(carName, moveCount) {
  return `${carName} : ${makeStick(moveCount)}${NEW_LINE}`;
}
