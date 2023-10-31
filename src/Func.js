import { MissionUtils } from "@woowacourse/mission-utils";

export async function getCarName() {
  try {
    let NAME_CAR = MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    return NAME_CAR;
  } catch (e) {
    MissionUtils.Console.print("[ERROR]");
  }
}

export async function getIteration() {
  try {
    let ITERATION_RACE =
      MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    return ITERATION_RACE;
  } catch (e) {
    MissionUtils.Console.print("[ERROR]");
  }
}

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

export function startOneIteration(score) {
  for (let i = 0; i < score.length; i++) {
    let RAND_NUM = generateRandomNumber();
    if (isCarForward(RAND_NUM)) {
      score[i]++;
    }
  }
}

export function printCurrentIteration(score, name) {
  for (let i = 0; i < score.length; i++) {
    MissionUtils.Console.print(`${name[i]} : ${"-".repeat(score[i])}`);
  }
  MissionUtils.Console.print("");
}

export function whoIsWinner(score, name) {
  let LARGEST_SCORE = Math.max.apply(null, score);
  let NAME_WINNER = [];
  for (let i = 0; i < score.length; i++) {
    if (score[i] === LARGEST_SCORE) {
      NAME_WINNER.push(name[i]);
    }
  }
  return NAME_WINNER;
}

export function printWinner(NAME_WINNER) {
  for (let i = 0; i < NAME_WINNER.length; i++) {
    MissionUtils.Console.print();
  }
}