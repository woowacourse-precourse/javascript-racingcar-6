import { Random } from '@woowacourse/mission-utils';
import { NUMBER_MAX, NUMBER_MIN, MOVE_FORWARD } from '../Utils/Define';
import Car from './Car';
import userInput from '../view/View';

const createRandomNumber = () => {
  const RandomNumber = Random.pickNumberInRange(NUMBER_MIN, NUMBER_MAX);
  return RandomNumber;
};

const canMoveForward = (randomNumber) => {
  if (randomNumber >= MOVE_FORWARD) {
    return true;
  }
  return false;
};

export const initCars = (carNames) => {
  const cars = carNames.map((name) => new Car(name, 0));
  return cars;
};

// export const playOneRound = async (cars) => {
//   cars.forEach((car) => {
//     const randomNumber = createRandomNumber();
//     if (canMoveForward(randomNumber)) {
//       car.moveForward();
//     }
//   });
//   return cars;
// };

// export const startGame = async () => {
//   const [carsNames, gameRound] = await userInput();
//   const cars = await initCars(carsNames);
//   // const afterOneRound = await playOneRound(cars);
//   let roundCount = 0; // 반복 횟수를 추적할 변수
//   while (roundCount < gameRound) {
//     const afterOneRound = await playOneRound(cars);
//     roundCount += 1; // 반복 횟수를 1씩 증가
//     // cars = afterOneRound;
//     Object.assign(cars, afterOneRound); // 객체 병합을 통해 cars 업데이트
//   }

//   // return afterOneRound;
//   return cars;
// };
export const startGame = async () => {
  const [carsNames, gameRound] = await userInput();
  const cars = await initCars(carsNames);

  let roundCount = 0;
  while (roundCount < gameRound) {
    cars.forEach((car) => {
      const randomNumber = createRandomNumber();
      if (canMoveForward(randomNumber)) {
        car.moveForward();
      }
    });
    roundCount += 1;
  }
  return cars;
};

export default { startGame, initCars };
