import { Console, Random } from "@woowacourse/mission-utils";

export const carName = async () => {
  try {
    let CAR_NAME = Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    return CAR_NAME;
  } catch (e) {
    Console.print("[ERROR]");
  }
};

export const movingNumber = async () => {
  try {
    let MOVING_NUMBER = Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    return MOVING_NUMBER;
  } catch (e) {
    Console.print("[ERROR]");
  }
};

const randomNumber = () => {
  return Random.pickNumberInRange(0, 9);
};

const checkOverFour = (number) => {
  return number >= 4;
};

export const startRound = (score) => {
  for (let i = 0; i < score.length; i++) {
    let RANDOM_NUMBER = randomNumber();
    if (checkOverFour(RANDOM_NUMBER)) {
      score[i]++;
    }
  }
};

export const currentRound = (score, name) => {
  for (let i = 0; i < score.length; i++) {
    Console.print(`${name[i]} : ${"-".repeat(score[i])}`);
  }
  Console.print("");
};

export const findWinner = (score, name) => {
  const MAX_SCORE = Math.max.apply(null, score);
  const WINNER = [];
  for (let i = 0; i < score.length; i++) {
    if (score[i] === MAX_SCORE) {
      WINNER.push(name[i]);
    }
  }
  return WINNER;
};

export const printWinner = (WINNER) => {
  for (let i = 0; i < WINNER.length; i++) {
    Console.print();
  }
};
