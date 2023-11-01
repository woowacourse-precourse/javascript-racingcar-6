import {
  CARNAME_REQUEST_MESSAGE,
  COUNT_REQUEST_MESSAGE,
  NUMBER_MAX,
  NUMBER_MIN,
  MOVE_FORWARD,
} from '../Utils/Define';
import InputView from '../view/InputView';
import { Random } from '@woowacourse/mission-utils';
import Car from './Car';

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

const initCars = (carNames) => {
  const cars = []; // Car 인스턴스들을 저장할 리스트
  for (let i = 0; i < carNames.length; i++) {
    const car = new Car(carNames[i], 0); // Car 인스턴스 생성
    cars.push(car); // 리스트에 Car 인스턴스 추가
  }
  return cars;
};

const playOneRound = async (cars) => {
  cars.forEach((car) => {
    const randomNumber = createRandomNumber();
    if (canMoveForward(randomNumber)) {
      car.moveForward();
    }
  });
};

const startGame = async () => {
  const carsNames = await InputView(CARNAME_REQUEST_MESSAGE);
  const gameRound = await InputView(COUNT_REQUEST_MESSAGE);
  const cars = await initCars(carsNames);
  await playOneRound(cars);
};

export default { startGame };
