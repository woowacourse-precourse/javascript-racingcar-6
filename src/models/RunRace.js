import { random } from "../util/RandomNum";

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

  return winners.join(', ');
};