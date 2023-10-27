import { MissionUtils } from "@woowacourse/mission-utils";

function generateRandomNumber() {
  return MissionUtils.Random.pickNumberInRange(0, 9);
}

function isCarForward(number) {
  if (number >= 4) {
    return true;
  } else {
    return false;
  }
}

function whoIsWinner(score, name) {
  let LARGEST_SCORE = Math.max.apply(null, score);
  let WINNER_NAME = [];
  for (let i = 0; i < score.length; i++) {
    if (score[i] === LARGEST_SCORE) {
      WINNER_NAME.push(name[i]);
    }
  }
  return WINNER_NAME;
}
