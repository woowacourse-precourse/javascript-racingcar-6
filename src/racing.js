import { randomNumber } from "./randomNumber.js";
import { printRacing } from "./print.js";

function racing(carNames, count) {
  let racingObj = initRacing(carNames);
  for (let i = 0; i < count; i++) {
    racingObj = calculateMoving(racingObj);
    printRacing(racingObj);
  }
  return racingObj;
}

function calculateMoving(racingObj) {
  Object.keys(racingObj).forEach((key) => {
    if (isNumFour()) {
      racingObj[key]++;
    }
  });
  return racingObj;
}

function initRacing(carNames) {
  let racingObj = {};
  carNames.forEach((name) => {
    racingObj[name] = 0;
  });
  return racingObj;
}

function isNumFour() {
  return randomNumber() >= 4;
}
export default racing;
