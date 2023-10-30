import { random } from "../util/RandomNum";
import { racingOutput } from "../views/OutputView";

//입력받은 count에 따라 반복
export const runByCount = (cars, count) => {
  racingOutput("실행 결과");
  for (let round = 0; round < count; round++) {
    const carObject = runRace(cars);
    racingOutput(carObject);
  }
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