import { runByCount } from "../controllers/GameControllers";

//입력받은 자동차의 이름에 대한 객체 생성
const createCars = (name, count) => {
  const names = String(name).split(',');
  const cars = {};

  names.forEach((name) => {
    cars[name] = '';
  });

  runByCount(cars, count);
};

export default createCars;
