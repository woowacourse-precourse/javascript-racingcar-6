import { MissionUtils } from "@woowacourse/mission-utils";

function drive() {
  const NUMBER = MissionUtils.Random.pickNumberInRange(0, 9);
  if (NUMBER >= 4) {
    return true;
  }
  return false;
}

function simulation(cars, scores) {
  cars.forEach(async function (car) {
    const RUN = await drive();
    if (RUN) {
      scores[car] += 1;
    }
    MissionUtils.Console.print(`${car} : ${"-".repeat(scores[car])}`);
  });
}

function raceResult(scores) {
  let maxValue = 0;
  const WINNER = [];
  for (const key in scores) {
    const SCORE = scores[key];
    if (SCORE > maxValue) {
      maxValue = SCORE;
      WINNER.length = 0;
      WINNER.push(key);
    } else if (SCORE === maxValue) {
      WINNER.push(key);
    }
  }

  let result = "";
  for (const name of WINNER) {
    if (!result) {
      result += name;
    } else {
      result += `, ${name}`;
    }
  }

  MissionUtils.Console.print(`최종 우승자 : ${result}`);
}

const RACE = async (CARS, TIMES) => {
  const SCORES = {};
  for (const NAME of CARS) {
    SCORES[NAME] = 0;
  }

  MissionUtils.Console.print("");
  MissionUtils.Console.print("실행 결과");
  for (let i = 0; i < TIMES; i++) {
    await simulation(CARS, SCORES);
    MissionUtils.Console.print("");
  }

  raceResult(SCORES);
};

export default RACE;
