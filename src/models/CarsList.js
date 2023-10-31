import { moveCount } from './moveCar.js';

//입력 받은 자동차 이름에 대해 객체 생성하기
export const carsList = (carName, round) => {
  const nameArray = String(carName).split(',');
  const cars = {};

  nameArray.forEach((car) => {
    cars[car] = '';
    console.log(nameArray);
  });

  moveCount(cars, round);
};
