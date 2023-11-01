import { MissionUtils } from "@woowacourse/mission-utils";

async function randomPlay(car) {
  const number = await MissionUtils.Random.pickNumberInRange(0, 9);
  
  if (number >= 4) {
    car[1] += 1
  }

  MissionUtils.Console.print(`${car[0]} : ${'-'.repeat(car[1])}`);
}

export default randomPlay