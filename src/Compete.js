import { MissionUtils } from '@woowacourse/mission-utils';
import Car from './Car.js';

export default function compete(carNames, round) {
  // 질문하기
  // for (let car of carNames) {
  //   car = new Car(car);
  //   // console.log(car);
  //   // console.log(car.runningResult);
  // }

  const cars = carNames.map((name) => new Car(name));

  for (let i = 0; i < round; i += 1) {
    MissionUtils.Console.print('\n');

    cars.forEach((j) => {
      const car = j;
      // 이 부분에 대해 완벽히 이해안감, 사이드 이팩트?
      car.runningResult = car.runOrNot(car.runningResult);
      MissionUtils.Console.print(`${car.name} : ${car.runningResult}`);
    });

    //   for (const car of cars) {
    //     // 이것도 왜 const 가능함?
    //     car.runningResult = car.runOrNot(car.runningResult);
    //     MissionUtils.Console.print(`${car.name} : ${car.runningResult}`);
    //   }
  }

  const winner = [];
  const array = [];

  // 질문: 이거 왜 const 써도 됨? 뒤에 push 있는데

  // for (const car of cars) {
  //   array.push(car.runningResult.length);
  // }

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
