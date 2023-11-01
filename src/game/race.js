import { MissionUtils } from '@woowacourse/mission-utils';
import MESSEGE from '../constants/messeges.js';

function getDistance(car) {
  const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
  if (randomNumber >= 4) {
    car.distance += 1;
  }
}

function renderRaceResult(carArray) {
  carArray.forEach(car => {
    getDistance(car);
    const hyphen = '-'.repeat(car.distance);
    MissionUtils.Console.print(`${car.name} : ${hyphen}`);
  });
  MissionUtils.Console.print(``);
  return carArray;
}

function getMaxDistance(car, maxDistance) {
  if (car.distance >= maxDistance) {
    maxDistance = car.distance;
  }
  return maxDistance;
}

function getRaceresult(roundNum, carArray) {
  MissionUtils.Console.print(MESSEGE.excutionResult);
  for (let i = 0; i < roundNum; i += 1) {
    renderRaceResult(carArray);
  }
  return carArray;
}

function getWinners(carArray) {
  let winners = [];
  let maxDistance = -1;
  carArray.forEach(car => {
    maxDistance = getMaxDistance(car, maxDistance);
  });
  winners = carArray.filter(car => car.distance === maxDistance);

  return winners;
}

export { getRaceresult, getWinners };
