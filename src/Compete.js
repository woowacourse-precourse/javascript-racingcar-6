import { MissionUtils } from '@woowacourse/mission-utils';
import Car from './Car.js';

export default function compete(carNames, round) {
  const cars = carNames.map((name) => new Car(name));

  for (let i = 0; i < round; i += 1) {
    MissionUtils.Console.print('\n');

    cars.forEach((j) => {
      const car = j;
      car.runningResult = car.runOrNot(car.runningResult);
      MissionUtils.Console.print(`${car.name} : ${car.runningResult}`);
    });
  }

  const winner = [];
  const array = [];

  cars.forEach((car) => {
    array.push(car.runningResult.length);
  });

  cars.forEach((car) => {
    if (car.runningResult.length === Math.max(...array)) {
      winner.push(car.name);
    }
  });

  MissionUtils.Console.print('\n실행 결과');
  MissionUtils.Console.print(`최종 우승자 : ${winner}`);
}
