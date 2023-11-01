import { random } from "../util/RandomNum";
import { printWinner, racingOutput } from "../views/OutputView";

//입력받은 count에 따라 반복
export const runByCount = (cars, count) => {
  racingOutput("실행 결과");
  let carObject = {};
  for (let round = 0; round < count; round++) {
    carObject = runRace(cars);
    racingOutput(carObject);
  }
  findWinner(cars);
};

//랜덤수에 따른 전진 상태 결정
export const runRace = (cars) => {
  const carNames = Object.keys(cars);
  const randomNums = random(carNames.length);

  //받은 랜덤수가 3이하면 0, 4이상 9이하면 1을 추가
  carNames.forEach((carName, index) => {
    cars[carName] += randomNums[index] >= 4 ? '-' : '';
  });

  return cars;
};

export const findWinner = (cars) => {
  let maxDistance = -1;
  let winners = [];

  const carNames = Object.keys(cars);
  const distances = Object.values(cars);

  distances.forEach((distance, index) => {
    const dashCount = distance.length;
    if (dashCount > maxDistance) {
      maxDistance = dashCount;
      winners = [carNames[index]];
    } else if (dashCount === maxDistance) {
      winners.push(carNames[index]);
    }
  });

  printWinner(winners.join(', '));
};