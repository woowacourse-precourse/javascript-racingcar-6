import { randomNumber } from "./randomNumber.js";
import { printResult } from "./print.js";
import findWinner from "./findWinner.js";

function racing(carNames, count) {
  let racingObj = initRacing(carNames);
  for (let i = 0; i < count; i++) {
    racingObj = calculateScore(racingObj);
    printResult(racingObj);
  }
  findWinner(racingObj);
}
function calculateScore(racingObj) {
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
