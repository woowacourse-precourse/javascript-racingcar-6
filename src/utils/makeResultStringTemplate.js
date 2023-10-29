import {
  COUNT_END,
  DECREASE_COUNT,
  NEW_LINE,
  STICK,
} from '../constants/constants.js';

function makeStick(moveCount) {
  let count = moveCount;
  let sticks = STICK.newSticks;
  while (count !== COUNT_END) {
    sticks += STICK.oneStick;
    count -= DECREASE_COUNT;
  }
  return sticks;
}

export default function makeResultStringTemplate(carName, moveCount) {
  return `${carName} : ${makeStick(moveCount)}${NEW_LINE}`;
}
